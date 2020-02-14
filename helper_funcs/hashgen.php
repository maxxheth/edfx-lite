<?php

namespace EDFX;

error_reporting(E_ALL);
ini_set('display_errors', true);

class HashGenerator {

    public static $hashPair = '';

    public static $hash = '';

    public static $alphanumericSet = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz';

    public static function makeHashPair($hashProp) {

        self::generateHash();

        self::$hashPair = [$hashProp => self::$hash];

    }

    public static function generateHash() {
		
		self::$hash = '';

		$alphanumericSetArr = str_split(self::$alphanumericSet);
		
		$alphanumericSetLen = count($alphanumericSetArr);

        for ($x = 0; $x < $alphanumericSetLen; $x++) {

			$randNum = rand($x, $alphanumericSetLen * rand(0, 1));

			self::$hash .= $alphanumericSetArr[$randNum < $alphanumericSetLen ? $randNum : rand(0, $alphanumericSetLen)];

        }

    }

}
