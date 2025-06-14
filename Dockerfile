# Use the official nginx image
FROM nginx:alpine

# Copy the index.html file to nginx html directory
COPY index.html /usr/share/nginx/html/

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 4001
EXPOSE 4001

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 