#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AccountBootstrapStack } from "../lib/stacks";

const app = new cdk.App();

cdk.Tags.of(app).add("Project", "AWSAccountBootstrap");
cdk.Tags.of(app).add("ManagedBy", "cdk");

new AccountBootstrapStack(app, "AccountBootstrapStack", {
  /**
   * When you run: cdk deploy --profile <your-sso-profile>
   * CDK will automatically detect the account + region from that profile.
   */
});
