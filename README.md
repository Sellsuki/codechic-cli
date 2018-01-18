# deploy-cli
CLI for setup continuous integration and continuous deployment with Codeship to AWS service
## Prerequisites
  Before you run this CLI you need to have this:
    * AWS ACCOUNT ID
    * AWS ACCESS KEY ID
    * AWS SECRET ACCESS KEY
    * AWS Application name
    * AWS application enveronment name
    * S3 bucket name
    * AWS registry
    * Codeship aes key
    * npm
## Installation
```
  git clone  https://github.com/Sellsuki/deploy-cli.git
  cd deploy-cli
  npm link
```
## Before Begin
  you must be create env file for codeship to access to aws and encypted with Jet
  create `env` file
  Example:
  ```
    AWS_ACCOUNT_ID=xxxxxxxxxxxxxxx
    AWS_ACCESS_KEY_ID=yyyyyyyyyyyyy
    AWS_SECRET_ACCESS_KEY=aaaaaaaaaaaaaa
    AWS_REGION=ur region
  ```
  [INSTALL JET](https://documentation.codeship.com/pro/builds-and-configuration/cli/) 
  encypted env file with codeship aes key
  ```
  jet encrypt env env.encrypted
  ```
  **NOTE : ** [For more information about the codeship aes key and jet encrypt command](https://documentation.codeship.com/pro/builds-and-configuration/environment-variables/)
  
## Using CLI
```
  cd {your-repository}
  
```
