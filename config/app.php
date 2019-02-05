<?php

return array_replace_recursive([
	'mail' => [
		'smtp' => 'smtp.gmail.com',
		'user' => null,
		'pass' => null,
		'port' => 587,
		'encryption' => 'tls',
	],
	'adminEmail' => null,
	'applicationName' => 'Korzin-ka',
], require __DIR__ . '/app_secret.php');