set -ex

cp /app/code.ini /usr/local/etc/php/conf.d/code.ini

echo "copied code.ini"

php-fpm
