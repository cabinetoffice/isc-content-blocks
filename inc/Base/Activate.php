<?php

/**
 * @package ISC
 */

namespace ISC\Inc\Base;

var_dump('Activate');

class Activate {
	public static function activate() : void {
		flush_rewrite_rules();
	}

}