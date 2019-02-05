<?php

require_once __DIR__ . '/../vendor/autoload.php';

$config = require __DIR__ . '/../config/app.php';
$params = [];
$paramsMap = [
	'name' => 'Вам написал',
	'phone' => 'Его номер',
	'message' => 'Его сообщение',
];

foreach ($paramsMap as $key => $title) {
	$value = trim(strip_tags(@$_REQUEST[$key]));

	if (empty($value)) {
		echo json_encode(['success' => false]);

		return;
	}

	$params[] = "{$title}: {$value}";
}

$transport = (new Swift_SmtpTransport(
	$config['mail']['smtp'],
	$config['mail']['port'],
	$config['mail']['encryption']
))
	->setUsername($config['mail']['user'])
	->setPassword($config['mail']['pass'])
	->setStreamOptions(
		[
			'ssl' => [
				'allow_self_signed' => true,
				'verify_peer' => false,
			],
		]);

$mailer = new Swift_Mailer($transport);

$message = (new Swift_Message($config['applicationName']))
	->setFrom([$config['adminEmail']])
	->setTo([$config['adminEmail']])
	->setBody(implode("<br>", $params));

$result = $mailer->send($message);

echo json_encode(['success' => !empty($result)]);