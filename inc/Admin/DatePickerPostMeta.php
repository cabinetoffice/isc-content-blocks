<?php

/**
 * @package ISC
 * @description This will save/update posts to add custom post meta
 * @author: Aran Wilcox
 */

namespace ISC\Inc\Admin;


if ( ! defined ( 'ABSPATH' ) ) {
	die ( 'UNAUTHORIZED - we are watching you!!!!' );
}

class DatePickerPostMeta {

	public function register(): void {

		add_action( 'save_post', [$this, 'add_published_date'] );
		add_action( 'post_updated', [$this, 'add_published_date'] );

    }

	public function add_published_date( $post_id ) {

        $date_picker_pt = [
            'publications',
            'post'
        ];

        // This functionality only applies the select CPT added above
        if ( in_array(get_post_type( $post_id ), $date_picker_pt) ) {

            // Get the post content
            $content = get_post_field( 'post_content', $post_id ); 

            // Parse the content blocks
            $blocks = parse_blocks( $content );

            // Loop through each block and find the 'co/event-date-time', if the data exists then set as variable and if not then use the post date field
            foreach ( $blocks as $block ) {

                if ( $block['blockName'] === 'co/event-date-time' && $block['attrs'] !== false ) {

                    // We only want the date here
                    $date = $block['attrs']['date_time'];
                    $date = strtotime($date);
    
                } 

            }

            // If the post has no date set then use the post date as a fallback
            if ( empty( $date ) ) {
                $date = get_the_date( 'Ym', $post_id );
            }

            // Add the date as post meta
            if ( ! empty( $date ) && ! add_post_meta( $post_id, 'published_date', $date, true ) ) { 

                update_post_meta( $post_id, 'published_date', $date );
                //var_dump('updated');

            }
            
        }

	}

} 