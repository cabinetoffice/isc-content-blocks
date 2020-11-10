<?php

/**
 * @package ISC
 * @description this file is mainly used to enqueue standard css and JS, not Gutenberg scripts etc.
 */

namespace ISC\Inc\Managers;

use \ISC\Inc\Base\BaseController;

if( !defined ( 'ABSPATH' ) ) {
	die( 'UNAUTHORIZED - we are watching you!!!!' );
}

class RolesCapsManager extends BaseController{

	public function register() : void {
		//add_action( 'init', [ $this, 'co_daily_log_post_register_post_meta' ] );
	}


	public static function co_add_custom_admin_caps() : void {

		// START: Admin role add custom caps
		$admin_role = get_role( 'administrator' );

		$admin_caps = [
			'manage_options',
		];


		foreach ( $admin_caps as $admin_cap ) {

			if ( $admin_role && ! empty( $admin_cap ) && ! $admin_role->has_cap( $admin_cap ) ) {

				$admin_role->add_cap( $admin_cap );

			}
		}
		// END: Admin role add custom caps
	}


	public static function co_remove_custom_admin_caps() : void {

		// START: Admin role
		$admin_role = get_role( 'administrator' );

		$admin_caps = [
			
		];

		global $wp_roles;

		foreach ( $admin_caps as $admin_cap ) {

			$wp_roles->remove_cap('administrator', $admin_cap);
		}

		flush_rewrite_rules(); // END: Admin role add custom caps

	} // END: co_remove_custom_admin_caps()
}