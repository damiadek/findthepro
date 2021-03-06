# findthepro

## Introduction

This is a prototype of a system that allows users find professional service providers.

## Running The Project

Follow the steps below to set the project set up locally:

-   Clone the repository

```bash
git clone https://github.com/damiadek/findthepro.git
```

-   CD into the directory

```bash
cd findthepro
```

-   fetch all repository details using:

```bash
git fetch
```

-   Ensure you have all the dependencies required for a laravel server to run. Check [here](https://laravel.com/docs/5.6#installation)

For initial setup, run the following installation commands:

-   Install composer dependencies:

```php
composer install
```

-   Install javascript dependencies:

```bash
npm install
```

-   Create environment file:

```bash
cp .env.example .env
```

-   Generate key for project:

```php
php artisan key:generate
```

-   Build react files:

```bash
npm run dev
```

-   Start Laravel Server:

```php
php artisan serve
```
