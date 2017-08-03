# Dockerfile.latest
FROM node

# Create app directory
RUN mkdir -p /www
WORKDIR /www

# Bundle app source
COPY . /www

# Install app dependencies
# COPY package.json /web
# RUN npm install --production

# set app env
ENV APP_ID 3387
ENV APP_SECRET 4e0a682f5bb008f484bceba2634f1c95741c4cd7
ENV AGENTX_ERROR_LOG /web/.logs/pm2-err.log

# Expose port
EXPOSE 8080
CMD [ "npm", "start" ]
