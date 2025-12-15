# AWSAccountBootstrap

This repository contains a reusable AWS CDK stack that bootstraps any new AWS
account with baseline IAM roles, security controls, and organizational guardrails.

It is designed to work with AWS IAM Identity Center (SSO) and deploy consistently
across accounts using the same `cdk deploy --profile <sso-profile>` workflow.

## Deploying

```bash
# Build the application
npm install
npm run build

# Authenticate with your AWS account
# Option 1: New profile
aws configure sso # Use management account for the session name
# Option 2: Existing profile
aws sso login --profile [[your-sso-profile]]

# Deploy the application
cdk deploy --profile [[your-sso-profile]]
```
