# The first stage
# Build React static files
FROM node:14-alpine as build

WORKDIR /app
COPY /frontend/package.json ./
COPY /frontend/package-lock.json ./
RUN npm install
COPY /frontend/. .
RUN npm run build

# The second stage
# Copy React static files and start nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]