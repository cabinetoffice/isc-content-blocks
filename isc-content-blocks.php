<?php
/**
 * Plugin Name: ISC - Content Blocks
 * Description: This plugin holds all of the custom content blocks used on ISC.
 * Plugin URI:        https://www.affinity-digital.com
 * Version:           1.0.0
 * Author:            Affinity Digital
 * Author URI:        https://www.affinity-digital.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       isc-content-blocks
 * Domain Path:       /languages
 */


if ( ! defined( 'ABSPATH' ) ) {
	die( 'UNAUTHORIZED - we are watching you!!!!' );
}

/**
 * check if we're all good with autoload
 */
if ( file_exists( __DIR__ ) . '/vendor/autoload.php' ) {
	require_once __DIR__ . '/vendor/autoload.php';
}

/**
 * these are the activation / de-activation code calls
 */
function co_activate_isccb(): void {
	ISC\Inc\Base\Activate::activate();
	ISC\Inc\Managers\RolesCapsManager::co_add_custom_admin_caps();
}

register_activation_hook( __FILE__, 'co_activate_isccb' );

function co_deactivate_isccb(): void {
	ISC\Inc\Base\Deactivate::deactivate(); // replaced the "use"
	ISC\Inc\Managers\RolesCapsManager::co_remove_custom_admin_caps();
}

register_deactivation_hook( __FILE__, 'co_deactivate_isccb' );


/**
 * Initialize the core classes of the plugin */
if ( class_exists( 'ISC\\Inc\\Init' ) ) {
	
	ISC\Inc\Init::register_services();

}