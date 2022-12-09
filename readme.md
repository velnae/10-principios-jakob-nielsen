# Los 10 principios de usabilidad de Jakob Nielsen

Este es un proyecto simple que viene con autenticacion y CRUD de uesrs, es una single page application SPA cosntruido con 
- [NodeJs 16](https://nodejs.org/en/blog/release/v16.16.0/) in the frontend 
- [React.js 16](https://reactjs.org) in the frontend 
- [PHP 7.3](https://www.php.net/manual/es/migration73.php) in the backend.
- [Laravel 6](https://laravel.com) in the backend.

Se le aplica los 10 principios de usabilidad de Jakob Nielsen  
credito a https://github.com/jovertical/laravel-react-admin

## Features

-   Progressive Web App (PWA)
-   Supports multiple locales
-   Stateless authentication system
-   Datatables with server-side pagination, sorting & dynamic filtering
-   [Image Intervention](http://image.intervention.io/) integration for image uploads
-   Drag & drop file uploads.
-   Supports dark mode.


## Quick Start

1. Configurar SSH de tu equipo con github como el siguiente tutorial [configurar ssh github](https://www.ingeniusworlds.com/como-clonar-un-repositorio-de-github-con-ssh/)
2. Clone the repo `git clone git@github.com:velnae/10-principios-jakob-nielsen.git`. 
3. Go to your project folder from your terminal.
4. Tener instalado `PHP 7.3`, `composer` y `Node js`
5. Run: `composer install` 

Abrir el archivo
```php 
vendor/laravel/framework/src/Illuminate/Foundation/PackageManifest.php
```
 Buscar la linea 116 :
```php
$packages = json_decode($this->files->get($path), true);
```
Agrega las siguientes lineas despues:
```
$installed = json_decode($this->files->get($path), true);
$packages = $installed['packages'] ?? $installed;
```
6. Run: `composer install` again to fix the problem
7. Run `npm install` to install application dependencies 
8. Run `set NODE_OPTIONS=--openssl-legacy-provider` y luego  `npm run dev` para buildear los assets js css.
9. Copy the `env.example` file into a `.env` y configura tu base de datos.
10. Run `php artisan key:generate`
10. `php artisan migrate:fresh --seed` para migrar tablas y llenar de datos.
11. Installation is done, you can now run: `php artisan serve` then `npm run watch`.
12. The project will run in this URL: (http://localhost:3000).


## License

The MIT License (MIT). Please see [License File](https://github.com/palonponjovertlota/laravel-react-admin/blob/master/LICENSE) for more information.
