############################################################
# Dockerfile to build Nginx Installed Containers
# Based on Alpine
############################################################

# Set the base image to Alpine
FROM alpine

# File Author / Maintainer
MAINTAINER John "JB" Brock (peppertech@gmail.com)

# Install Nginx
FROM nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /tmp/nginx/client-body

COPY app /usr/share/nginx/html

# Expose ports
EXPOSE 80

# Set the default command to execute
# when creating a new container
CMD ["nginx", "-g", "daemon off;"]
