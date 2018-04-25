#  Multi-Step Wizard with Angular 4, Angular Material & PHP (Maropost API)

#### [Partially inspired by Cathy Wun's work](http://angular-multi-step-wizard.azurewebsites.net/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

#### Build

- Update the URL to the Maropost PHP File in src/app/constants.ts first 
- Add a file .env.php under src/assets/php that contains
```
  - $auth_token  = "[MAROPOST auth token]";
  - $url_api = "http://api.maropost.com/accounts/[MAROPOST ACCOUNT ID]/";
  - $list = "lists/[MAROPOST LIST ID]/contacts";
```
- run ```ng build -prod```

(Update the <base href="/..."> in index.html if necessary)
