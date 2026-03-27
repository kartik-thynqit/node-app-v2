FROM node:18

COPY package.json package.json

RUN npm install --ignore-scripts

COPY package-lock.json package-lock.json
COPY app.js app.js

ENTRYPOINT ["node", "app.js"]