# Step 1
## base image for Step 1: Node 10
FROM node:14 AS builder
WORKDIR /app
## 프로젝트의 모든 파일을 WORKDIR(/app)로 복사한다
COPY package*.json ./
## Nest.js project를 build 한다
RUN npm install
COPY . .
RUN npm run build

## application 실행
ENV PORT 80
EXPOSE 80
CMD ["npm", "run", "start:prod"]