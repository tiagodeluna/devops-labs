# Base image with just node and npm
FROM node:8.1.4

# Copy over the repository
COPY . /dromedary/

# Update packages, install java and get project dependencies
RUN apt-get update && \
  apt-get install default-jre -y && \
  cd /dromedary && \
  npm install && \
  npm install gulp -g

# Set the working directory to the repository
WORKDIR /dromedary
