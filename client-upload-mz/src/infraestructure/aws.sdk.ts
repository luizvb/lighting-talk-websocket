import AWS from 'aws-sdk';

export const getAwsSdk = () => {
    return new AWS.S3({
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
        region: process.env.AWS_REGION,
        signatureVersion: 'v4',
      });
}