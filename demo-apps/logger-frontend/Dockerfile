FROM node

EXPOSE 3000

COPY ./public /home/node/public
COPY ./package.json ./package-lock.json ./index.js /home/node/


USER node
WORKDIR /home/node

RUN npm install

CMD ["npm", "start"]
