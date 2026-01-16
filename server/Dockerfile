FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN sed -i 's/\r$//g' ./wait_for_it.sh
RUN chmod +x ./wait_for_it.sh

ENTRYPOINT ["./wait_for_it.sh"]

EXPOSE 9000

CMD ["npm", "run", "dev"]