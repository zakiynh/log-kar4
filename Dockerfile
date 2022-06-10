#Base Image
FROM node:16.4.2

WORKDIR /user/local/log-kar-4

COPY package.json package-lock.json /user/local/log-kar-4/

RUN npm install && npm cache clean --force

COPY ./ ./

CMD ["npm", "run", "start"]
