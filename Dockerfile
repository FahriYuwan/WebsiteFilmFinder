# Use the official PHP image with FPM
FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpq-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    python3 \
    python3-pip \
    python3-psycopg2 \
    postgresql-client \
    nginx \
    gettext && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Node.js (version 20.x)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@latest

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_pgsql mbstring exif pcntl bcmath xml

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy application code
COPY . /var/www

# Set proper permissions for Laravel
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install Node.js dependencies and build React app
RUN npm install && npm run build

# Copy the built React app to Laravel's public directory
RUN cp -R ./public/build/* /var/www/public/

# Remove Node.js dependencies after build to reduce image size
RUN npm prune --production

# Configure Nginx
COPY ./nginx.conf.template /etc/nginx/conf.d/default.conf.template

# Copy entrypoint script
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Create directory for PHP-FPM socket
RUN mkdir -p /var/run/php && chown -R www-data:www-data /var/run/php

# Expose port (default to 80 if PORT not set)
ENV PORT=80
EXPOSE $PORT

# Start the application
CMD ["/entrypoint.sh"]