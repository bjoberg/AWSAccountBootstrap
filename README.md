# AWSAccountBootstrap

This repository contains a reusable AWS CDK stack that bootstraps any new AWS
account with baseline IAM roles, security controls, and organizational guardrails.

It is designed to work with AWS IAM Identity Center (SSO) and deploy consistently
across accounts using the same `cdk deploy --profile <sso-profile>` workflow.

## Deploying

```bash
aws sso login --profile your-sso-profile
cdk deploy --profile your-sso-profile
```
