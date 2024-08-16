FROM public.ecr.aws/lambda/nodejs:18

RUN npm install -g

COPY package.json package-lock.lock ./

RUN npm install

# Bundle app source
COPY . .

CMD ["lambda.handler"]
