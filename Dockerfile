FROM node:15.4

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

CMD npm run start:dev
