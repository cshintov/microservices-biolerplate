set -ex

cp -rf /app/code /usr/share/nginx/html

cp /app/site.conf /conf/default.conf

echo "copied site conf"

chown -R www-data:www-data /var/log/patdemo

# sleep 3600
