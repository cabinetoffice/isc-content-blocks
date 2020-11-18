<?php

/**
 * @package ISC
 * @description This will set the allowed content blocks
 * @author: Aran Wilcox
 */

namespace ISC\Inc\Admin;


if ( ! defined ( 'ABSPATH' ) ) {
	die ( 'UNAUTHORIZED - we are watching you!!!!' );
}

class ContentBlockList {

	public function register(): void {

		add_action( 'allowed_block_types', [$this, 'allowed_blocks'] );

    }

	public function allowed_blocks( $post_id ) {

        $allowed_blocks = array(
            'core/paragraph',
            'core/image',
            'core/heading',
            'core/list',
            'core/file',
            'core/buttons',
            'co/event-date-time',
            'co/committee-table-row',
            'co/committee-table-columns',
            'co/profile-link'
        );
     
        return $allowed_blocks;

	}

} 