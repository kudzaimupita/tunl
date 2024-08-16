FROM public.ecr.aws/lambda/nodejs:18

COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

CMD ["lambda.handler"]
