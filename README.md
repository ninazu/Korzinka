1. в корне ```composer install```
2. **WebRoot** ведет на **public_html**
3. добавить **config/app_secret.php** на сервере (исключен из Git)
```
<?php

return [
	'mail' => [
		'user' => 'ТВОЙ_SMTP@gmail.com',
		'pass' => 'ПАРОЛЬ',
	],
	'adminEmail' => 'КУДА_СЛАТЬ@gmail.com',
];
```


