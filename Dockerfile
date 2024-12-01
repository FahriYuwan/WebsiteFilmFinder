FROM php:8.2-fpm

# Install dependencies
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
    supervisor \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@latest

# PHP extensions
RUN docker-php-ext-install pdo pdo_pgsql mbstring exif pcntl bcmath xml

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy project files
WORKDIR /var/www
COPY . /var/www

# Set permissions
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Install dependencies
RUN composer install --no-dev --optimize-autoloader && npm install

# Supervisor config
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose ports
EXPOSE 8000 3000 5173

# Entry point
CMD ["/usr/bin/supervisord"]


# FROM php:8.2-fpm

# # Install system dependencies
# RUN apt-get update && apt-get install -y \
#     git \
#     curl \
#     libpq-dev \
#     libonig-dev \
#     libxml2-dev \
#     zip \
#     unzip \
#     python3 \
#     python3-pip \
#     python3-psycopg2 \
#     postgresql-client && \
#     apt-get clean && rm -rf /var/lib/apt/lists/*

# # Install Node.js (versi 20.x)
# RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
#     apt-get install -y nodejs && \
#     npm install -g npm@latest

# # Install PHP extensions
# RUN docker-php-ext-install pdo pdo_pgsql mbstring exif pcntl bcmath xml

# # Install Composer
# COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# # Set working directory
# WORKDIR /var/www

# # Copy application code
# COPY . /var/www

# # Set proper permissions for Laravel
# RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# # Install PHP dependencies
# RUN composer install --no-dev --optimize-autoloader

# # Install Node.js dependencies
# RUN npm install

# # Expose ports
# EXPOSE 8000
# EXPOSE 3000
# EXPOSE 5173

# # Command to run the application
# CMD ["sh", "-c", "php artisan serve --host=0.0.0.0 --port=8000 & npm run dev"]