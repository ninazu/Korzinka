<?php

require_once __DIR__ . '/vendor/autoload.php';

$transport = (new Swift_SmtpTransport('smtp.example.org', 25))
	->setUsername('your username')
	->setPassword('your password');

$mailer = new Swift_Mailer($transport);

$message = (new Swift_Message('Wonderful Subject'))
	->setFrom(['john@doe.com' => 'John Doe'])
	->setTo(['receiver@domain.org', 'other@domain.org' => 'A name'])
	->setBody('Here is the message itself');

$result = $mailer->send($message);

echo json_encode(['success' => !empty($result)]);