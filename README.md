#  Multi-Step Wizard with Angular 4, Angular Material & PHP

#### [Partially inspired by](http://angular-multi-step-wizard.azurewebsites.net/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

#### Build



Don't forget to update the URL in src/app/constants.ts first 
and add a file .env.php under src/assets/php that contains
 $auth_token 	= [MAROPOST auth token];
 $url_api 		= "http://api.maropost.com/accounts/[MAROPOST ACCOUNT ID]/";
 $list 			= "lists/[MAROPOST LIST ID]/contacts";


ng build -prod

(Update the <<base href="/..."> if necessary)
