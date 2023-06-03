import { getAwsSdk } from "./infraestructure/aws.sdk";

export const getAwsSignedUrl = async ({ name }: any) => {
  return getAwsSdk().getSignedUrlPromise('putObject', {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: name,
  });
};
