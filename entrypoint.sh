#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Substitute PORT variable into nginx.conf
envsubst '$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Start PHP-FPM
php-fpm &

# Start Nginx
nginx -g 'daemon off;'

# Menjalankan migrasi dan seeding Laravel
# echo "Running Laravel migrations..."
# php artisan migrate --force

# echo "Seeding Laravel database..."
# php artisan db:seed --force

# Menjalankan seeder Python (jika diperlukan)
# echo "Running Python seeders..."
# python3 /var/www/database/python_seeders/seeder.py

# Memulai server aplikasi Laravel dan React
# echo "Starting Laravel and React..."
# php artisan serve --host=0.0.0.0 --port=8000 & npm run dev
