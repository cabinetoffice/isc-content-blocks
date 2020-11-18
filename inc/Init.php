<?php

/**
 * @package ISC
 */

namespace ISC\Inc;

use ISC\Inc\Base\BaseController;

final class Init {

	/**
	 * Stores all classes in an arrays
	 * @return array - full list of classes
	 */
	public static function get_services() : array {
		return [
			Base\Enqueue::class,
			Managers\BlockManager::class,
			Admin\DatePickerPostMeta::class,
			Admin\ContentBlockList::class
		];
	}  // END: get_services()


	/**
	 * Loops through the classes, and initializes them, and then calls the register() method if it exists
	 * it returns nought, thus the:
	 * @return void
	 */
	public static function register_services() : void {

		foreach ( self::get_services() as $class ) {

			$service = self::instantiate( $class );

			if ( method_exists( $service, 'register' ) ) {

				$service->register();

			}
		}
		
	}  // END: register_services()


	/**
	 * Initialise an instance of the fed in class
	 * @param $class - class form the service array
	 *
	 * @return mixed - class instance   new instance of the class
	 */
	private static function instantiate( $class ) {
		
		return new $class();

	}  // END: instantiate()
}