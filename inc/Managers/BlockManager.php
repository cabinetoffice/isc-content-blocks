<?php

/**
 * @package ISC
 * @description this file is mainly used to manage the blocks.
 */

namespace ISC\Inc\Managers;

use \ISC\Inc\Base\BaseController;

if( !defined ( 'ABSPATH' ) ) {
	die( 'UNAUTHORIZED - we are watching you!!!!' );
}

class BlockManager extends BaseController{

	public function register() : void {
		add_action( 'init', [ $this, 'co_committee_table_columns_block_register' ] );
		add_action( 'init', [ $this, 'co_committee_table_row_columns_block_register' ] );
		add_action( 'init', [ $this, 'co_event_date_time_register' ] );
	}

	// START: Register - Purpose content block
	public function co_committee_table_columns_block_register(): void {

		wp_register_script(
			'co_committee_table_columns_block_editor_script',
			$this->plugin_url . 'dist/editor-output.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components','wp-edit-post', 'wp-plugins' )
		);

		register_block_type(
			'co/committee-table-columns',
			array(
				'editor_script'   => 'co_committee_table_columns_block_editor_script'
			)
		);

	}  // END: Register - Purpose content block

	// START: Register - Intro content block
	public function co_committee_table_row_columns_block_register(): void {

		wp_register_script(
			'co_capability_degraded_row_block_editor_script',
			$this->plugin_url . 'dist/editor-output.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components','wp-edit-post', 'wp-plugins' )
		);

		register_block_type(
			'co/committee-table-row',
			array(
				'editor_script'   => 'co_capability_degraded_row_block_editor_script'
			)
		);

	}  // END: Register - Intro content block

	// START: Register - General content block
	public function co_event_date_time_register(): void {

		wp_register_script(
			'co_event_date_time_block_editor_script',
			$this->plugin_url . 'dist/editor-output.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components','wp-edit-post', 'wp-plugins' )
		);

		register_block_type(
			'co/event-date-time',
			array(
				'editor_script'   => 'co_event_date_time_block_editor_script'
			)
		);

	}  // END: Register - General content block

}