import { Stack, StackProps, RemovalPolicy } from "aws-cdk-lib";
import { Construct } from "constructs";
import { aws_s3 as s3, aws_cloudtrail as cloudtrail } from "aws-cdk-lib";

export class AccountBootstrapStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const logsBucket = new s3.Bucket(this, "AccountLogsBucket", {
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      versioned: true,
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      removalPolicy: RemovalPolicy.RETAIN,
    });

    new cloudtrail.Trail(this, "AccountCloudTrail", {
      bucket: logsBucket,
      isMultiRegionTrail: true,
      includeGlobalServiceEvents: true,
      managementEvents: cloudtrail.ReadWriteType.ALL,
      enableFileValidation: true,
      // Data events (S3 object-level, Lambda, etc.) are off by default to keep cost down
    });
  }
}
