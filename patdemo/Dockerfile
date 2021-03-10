FROM lyberteam/php-fpm-7.2.5

WORKDIR /app/code

COPY ./code/composer.json .

RUN composer install

# COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

COPY . /app

WORKDIR /app/code

