FROM lyberteam/php-fpm-7.2.5

WORKDIR /app

COPY ./site.conf .

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

COPY ./code.ini /usr/local/etc/php/conf.d/code.ini

COPY ./code /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html

RUN composer install
