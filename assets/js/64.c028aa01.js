(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{325:function(e,t,a){"use strict";a.r(t);var n=a(15),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"webserver-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webserver-configuration"}},[e._v("#")]),e._v(" Webserver Configuration")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("When using the SSL configuration you MUST create SSL certificates, otherwise your webserver will fail to start. See the "),t("RouterLink",{attrs:{to:"/tutorials/creating_ssl_certificates.html"}},[e._v("Creating SSL Certificates")]),e._v(" documentation page to learn how to create these certificates before continuing.")],1)]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("If you are using "),t("a",{attrs:{href:"#caddy-with-automatic-ssl"}},[e._v("Caddy With Automatic SSL")]),e._v(", you do not have to create SSL certificates manually, Caddy will take care of it automatically.")])]),e._v(" "),t("tabs",[t("tab",{attrs:{name:"Nginx With SSL"}},[t("p",[e._v("First, remove the default NGINX configuration.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /etc/nginx/sites-enabled/default\n")])])]),t("p",[e._v("Now, you should paste the contents of the file below, replacing "),t("code",[e._v("<domain>")]),e._v(" with your domain name being used in a file called\n"),t("code",[e._v("pterodactyl.conf")]),e._v(" and place the file in "),t("code",[e._v("/etc/nginx/sites-available/")]),e._v(", or — if on RHEL, Rocky Linux, or AlmaLinux, "),t("code",[e._v("/etc/nginx/conf.d/")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('server {\n    # Replace the example <domain> with your domain name or IP address\n    listen 80;\n    server_name <domain>;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    # Replace the example <domain> with your domain name or IP address\n    listen 443 ssl http2;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.php;\n\n    access_log /var/log/nginx/pterodactyl.app-access.log;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    # SSL Configuration - Replace the example <domain> with your domain\n    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";\n    ssl_prefer_server_ciphers on;\n\n    # See https://hstspreload.org/ before uncommenting the line below.\n    # add_header Strict-Transport-Security "max-age=15768000; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php8.3-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n')])])]),t("h3",{attrs:{id:"enabling-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration"}},[e._v("#")]),e._v(" Enabling Configuration")]),e._v(" "),t("p",[e._v("The final step is to enable your NGINX configuration and restart it.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You do not need to symlink this file if you are using RHEL, Rocky Linux, or AlmaLinux.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-s")]),e._v(" /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You need to restart nginx regardless of OS.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl restart nginx\n")])])])]),e._v(" "),t("tab",{attrs:{name:"Nginx Without SSL"}},[t("p",[e._v("First, remove the default NGINX configuration.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /etc/nginx/sites-enabled/default\n")])])]),t("p",[e._v("Now, you should paste the contents of the file below, replacing "),t("code",[e._v("<domain>")]),e._v(" with your domain name being used in a file called\n"),t("code",[e._v("pterodactyl.conf")]),e._v(" and place the file in "),t("code",[e._v("/etc/nginx/sites-available/")]),e._v(", or — if on RHEL, Rocky Linux, or AlmaLinux, "),t("code",[e._v("/etc/nginx/conf.d/")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('server {\n    # Replace the example <domain> with your domain name or IP address\n    listen 80;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.html index.htm index.php;\n    charset utf-8;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location = /favicon.ico { access_log off; log_not_found off; }\n    location = /robots.txt  { access_log off; log_not_found off; }\n\n    access_log off;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php8.3-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n')])])]),t("h3",{attrs:{id:"enabling-configuration-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration-2"}},[e._v("#")]),e._v(" Enabling Configuration")]),e._v(" "),t("p",[e._v("The final step is to enable your NGINX configuration and restart it.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You do not need to symlink this file if you are using RHEL, Rocky Linux, or AlmaLinux.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-s")]),e._v(" /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You need to restart nginx regardless of OS.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl restart nginx\n")])])])]),e._v(" "),t("tab",{attrs:{name:"Apache With SSL"}},[t("p",[e._v("First, remove the default Apache configuration.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("a2dissite 000-default.conf\n")])])]),t("p",[e._v("Now, you should paste the contents of the file below, replacing "),t("code",[e._v("<domain>")]),e._v(" with your domain name being used in a file called\n"),t("code",[e._v("pterodactyl.conf")]),e._v(" and place the file in "),t("code",[e._v("/etc/apache2/sites-available")]),e._v(", or — if on RHEL, Rocky Linux, or AlmaLinux, "),t("code",[e._v("/etc/httpd/conf.d/")]),e._v(".")]),e._v(" "),t("p",[e._v("Note: When using Apache, make sure you have the "),t("code",[e._v("libapache2-mod-php8.3")]),e._v(" package installed or else PHP will not display on your webserver.")]),e._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<VirtualHost *:80>\n    # Replace the example <domain> with your domain name or IP address\n    ServerName <domain>\n\n    RewriteEngine On\n    RewriteCond %{HTTPS} !=on\n    RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] \n</VirtualHost>\n\n<VirtualHost *:443>\n    # Replace the example <domain> with your domain name or IP address\n    ServerName <domain>\n    DocumentRoot "/var/www/pterodactyl/public"\n\n    AllowEncodedSlashes On\n\n    php_value upload_max_filesize 100M\n    php_value post_max_size 100M\n\n    <Directory "/var/www/pterodactyl/public">\n        Require all granted\n        AllowOverride all\n    </Directory>\n\n    SSLEngine on\n    SSLCertificateFile /etc/letsencrypt/live/<domain>/fullchain.pem\n    SSLCertificateKeyFile /etc/letsencrypt/live/<domain>/privkey.pem\n</VirtualHost> \n')])])]),t("h3",{attrs:{id:"enabling-configuration-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration-3"}},[e._v("#")]),e._v(" Enabling Configuration")]),e._v(" "),t("p",[e._v("Once you've created the file above, simply run the commands below. If you are on RHEL, Rocky Linux, or AlmaLinux "),t("em",[e._v("you do not need to run the commands\nbelow!")]),e._v(" You only need to run "),t("code",[e._v("systemctl restart httpd")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You do not need to run any of these commands on RHEL, Rocky Linux, or AlmaLinux")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-s")]),e._v(" /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" a2enmod rewrite\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" a2enmod ssl\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl restart apache2\n")])])])]),e._v(" "),t("tab",{attrs:{name:"Apache Without SSL"}},[t("p",[e._v("First, remove the default Apache configuration.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("a2dissite 000-default.conf\n")])])]),t("p",[e._v("Now, you should paste the contents of the file below, replacing "),t("code",[e._v("<domain>")]),e._v(" with your domain name being used in a file called\n"),t("code",[e._v("pterodactyl.conf")]),e._v(" and place the file in "),t("code",[e._v("/etc/apache2/sites-available")]),e._v(", or — if on RHEL, Rocky Linux, or AlmaLinux, "),t("code",[e._v("/etc/httpd/conf.d/")]),e._v(".")]),e._v(" "),t("p",[e._v("Note: When using Apache, make sure you have the "),t("code",[e._v("libapache2-mod-php8.3")]),e._v(" package installed or else PHP will not display on your webserver.")]),e._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<VirtualHost *:80>\n    # Replace the example <domain> with your domain name or IP address\n    ServerName <domain>\n    DocumentRoot "/var/www/pterodactyl/public"\n    \n    AllowEncodedSlashes On\n    \n    php_value upload_max_filesize 100M\n    php_value post_max_size 100M\n    \n    <Directory "/var/www/pterodactyl/public">\n        AllowOverride all\n        Require all granted\n    </Directory>\n</VirtualHost>\n')])])]),t("h3",{attrs:{id:"enabling-configuration-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration-4"}},[e._v("#")]),e._v(" Enabling Configuration")]),e._v(" "),t("p",[e._v("Once you've created the file above, simply run the commands below. If you are on RHEL, Rocky Linux, or AlmaLinux "),t("em",[e._v("you do not need to run the commands\nbelow!")]),e._v(" You only need to run "),t("code",[e._v("systemctl restart httpd")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You do not need to run any of these commands on RHEL, Rocky Linux, or AlmaLinux")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-s")]),e._v(" /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" a2enmod rewrite\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl restart apache2\n")])])])]),e._v(" "),t("tab",{attrs:{name:"Caddy With Automatic SSL"}},[t("p",[e._v("Before adding our custom configuration, let's remove the default one. You can do it either by deleting the contents of config file or by deleting the config file completely and than creating a new one from scratch. The config file path is "),t("code",[e._v("/etc/caddy/Caddyfile")]),e._v(".")]),e._v(" "),t("p",[e._v("To delete the config file completely, run the following command:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /etc/caddy/Caddyfile\n")])])]),t("p",[e._v("Then continue with an editor of your choice to write the config.")]),e._v(" "),t("p",[e._v("You should paste the contents of the file below, replacing "),t("code",[e._v("<domain>")]),e._v(" with your domain name.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    servers :443 {\n        timeouts {\n            read_body 120s\n        }\n    }\n}\n\n# Replace the example <domain> with your domain name or IP address\n<domain> {\n    root * /var/www/pterodactyl/public\n\n    file_server\n\n    php_fastcgi unix//run/php/php8.3-fpm.sock {\n        root /var/www/pterodactyl/public\n        index index.php\n\n        env PHP_VALUE "upload_max_filesize = 100M\n        post_max_size = 100M"\n        env HTTP_PROXY ""\n        env HTTPS "on"\n\n        read_timeout 300s\n        dial_timeout 300s\n        write_timeout 300s\n    }\n\n    header Strict-Transport-Security "max-age=16768000; preload;"\n    header X-Content-Type-Options "nosniff"\n    header X-XSS-Protection "1; mode=block;"\n    header X-Robots-Tag "none"\n    header Content-Security-Policy "frame-ancestors \'self\'"\n    header X-Frame-Options "DENY"\n    header Referrer-Policy "same-origin"\n\n    request_body {\n        max_size 100m\n    }\n\n    respond /.ht* 403\n\n    log {\n        output file /var/log/caddy/pterodactyl.log {\n            roll_size 100MiB\n            roll_keep_for 7d\n        }\n        level INFO\n    }\n}')])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("If you are using Cloudflare DNS in proxy mode, refer to "),t("RouterLink",{attrs:{to:"/tutorials/creating_ssl_certificates.html#method-3:-caddy-(using-cloudflare-api)"}},[e._v("this tutorial")]),e._v(", to see how to configure Caddy to use DNS challenge for obtaining SSL certificates.")],1)]),e._v(" "),t("h3",{attrs:{id:"enabling-configuration-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration-5"}},[e._v("#")]),e._v(" Enabling Configuration")]),e._v(" "),t("p",[e._v("The final step is to restart Caddy.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("systemctl restart caddy\n")])])])]),e._v(" "),t("tab",{attrs:{name:"Caddy Without SSL"}},[t("p",[e._v("Before adding our custom configuration, let's remove the default one. You can do it either by deleting the contents of config file or by deleting the config file completely and than creating a new one from scratch. The config file path is "),t("code",[e._v("/etc/caddy/Caddyfile")]),e._v(".")]),e._v(" "),t("p",[e._v("To delete the config file completely, run the following command:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /etc/caddy/Caddyfile\n")])])]),t("p",[e._v("Then continue with an editor of your choice to write the config.")]),e._v(" "),t("p",[e._v("You should paste the contents of the file below, replacing "),t("code",[e._v("<domain>")]),e._v(" with your domain name.")]),e._v(" "),t("p",[e._v("The only two differences are that we have suffixed the "),t("code",[e._v("<domain>")]),e._v(" with "),t("code",[e._v(":80")]),e._v(" and in the global config at "),t("code",[e._v("servers")]),e._v(" directive, we have changed the port from "),t("code",[e._v(":443")]),e._v(" to "),t("code",[e._v(":80")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    servers :80 {\n        timeouts {\n            read_body 120s\n        }\n    }\n}\n\n# Replace the example <domain> with your domain name or IP address\n<domain>:80 {\n    root * /var/www/pterodactyl/public\n\n    file_server\n\n    php_fastcgi unix//run/php/php8.3-fpm.sock {\n        root /var/www/pterodactyl/public\n        index index.php\n\n        env PHP_VALUE "upload_max_filesize = 100M\n        post_max_size = 100M"\n        env HTTP_PROXY ""\n        # env HTTPS "on" # IMPORTANT: this is commented out, to disable HTTPS\n\n        read_timeout 300s\n        dial_timeout 300s\n        write_timeout 300s\n    }\n\n    header Strict-Transport-Security "max-age=16768000; preload;"\n    header X-Content-Type-Options "nosniff"\n    header X-XSS-Protection "1; mode=block;"\n    header X-Robots-Tag "none"\n    header Content-Security-Policy "frame-ancestors \'self\'"\n    header X-Frame-Options "DENY"\n    header Referrer-Policy "same-origin"\n\n    request_body {\n        max_size 100m\n    }\n\n    respond /.ht* 403\n\n    log {\n        output file /var/log/caddy/pterodactyl.log {\n            roll_size 100MiB\n            roll_keep_for 7d\n        }\n        level INFO\n    }\n}')])])]),t("h3",{attrs:{id:"enabling-configuration-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration-6"}},[e._v("#")]),e._v(" Enabling Configuration")]),e._v(" "),t("p",[e._v("The final step is to restart Caddy.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("systemctl restart caddy\n")])])])])],1),e._v(" "),t("h4",{attrs:{id:"next-step-wings-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-step-wings-installation"}},[e._v("#")]),e._v(" Next Step: "),t("RouterLink",{attrs:{to:"/wings/installing.html"}},[e._v("Wings Installation")])],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);