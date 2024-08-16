// import type { AWS } from 'serverless-plugin-typescript';
const serverlessConfiguration = {
  service: 'tunl-api',
  frameworkVersion: '3',
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    tracing: {
      lambda: true,
    },
    ecr: {
      images: {
        api: {
          path: './',
        },
      },
    },
  },
  functions: {
    api: {
      handler: 'dist/lambda.handler',
      image: {
        name: 'api',
      },
      events: [
        {
          httpApi: '*',
        },
      ],
    },
  },
  package: {
    individually: true,
  },
//   plugins: ['serverless-offline'],
};

module.exports = serverlessConfiguration;
