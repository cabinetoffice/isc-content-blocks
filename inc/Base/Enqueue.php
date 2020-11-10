<?php

/**
 * @package ISC
 * @description this file is mainly used to enqueue standard css and JS, not Gutenberg scripts etc.
 */

namespace ISC\Inc\Base;

use \ISC\Inc\Base\BaseController;

if( !defined ( 'ABSPATH' ) ) {
	die( 'UNAUTHORIZED - we are watching you!!!!' );
}

class Enqueue extends BaseController{

	public function register() : void {

		add_action( 'wp_enqueue_scripts', [ $this, 'remove_block_css'] );
	}

	public static function remove_block_css() : void {
		wp_dequeue_style( 'wp-block-library' );
		wp_dequeue_style( 'wp-block-library-theme' );
		wp_dequeue_style( 'wc-block-style' );
		wp_dequeue_style( 'storefront-gutenberg-blocks' );
	}

}