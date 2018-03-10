# CodeChic CLI
### Easy way for deploy your docker image to Amazon Elastic Beanstalk with Codeship Pro
<img src="https://raw.githubusercontent.com/Sellsuki/codechic-cli/master/static/img/header.png">

<p align="center">
  <a href="https://npmjs.com/package/codechic"><img src="https://img.shields.io/npm/v/codechic.svg?style=flat" alt="NPM version"></a>
  <a href="https://npmjs.com/package/codechic"><img src="https://img.shields.io/npm/dm/codechic.svg?style=flat" alt="NPM downloads"></a>
  <a href="https://travis-ci.org/Sellsuki/codechic-cli"><img src="https://travis-ci.org/Sellsuki/codechic-cli.svg?branch=master" alt="CircleCI"></a>
</p>

# codechic-cli
Easy way for deploy your docker image to Amazon Elastic Beanstalk with Codeship Pro
## Requirement
  - AWS ACCOUNT ID
  - AWS ACCESS KEY ID
  - AWS SECRET ACCESS KEY
  - AWS Application name
  - AWS application enveronment name
  - S3 bucket name
  - AWS registry
  - Codeship aes key
  - dockerfile
  - npm
## Installation
```
npm install codechic -g
```

## Process of Codeship Pro deploy your docker image to EB

<img src="https://raw.githubusercontent.com/Sellsuki/codechic-cli/master/static/img/process.png">

# How to use

## 1. Encrypt your AWS credential
  - Step first you must create `env` file (in anywhere) with
  [Jet CLI](https://documentation.codeship.com/pro/builds-and-configuration/cli/) .

    Example: env
    ```
    AWS_ACCOUNT_ID=xxxxxxxxxxxxxxx
    AWS_ACCESS_KEY_ID=yyyyyyyyyyyyy
    AWS_SECRET_ACCESS_KEY=aaaaaaaaaaaaaa
    AWS_REGION=ur-region
    ```
  - Download [Codeship AES Key](https://documentation.codeship.com/pro/builds-and-configuration/environment-variables/#downloading-your-aes-key)
  - Install `jet` CLI. [(Installing The Jet CLI)](https://documentation.codeship.com/pro/jet-cli/installation/)
  - Just encrypt file `env` with `jet` CLI.
    ```
    // Command:

    $jet encrypt ${YOUR_ENV_FILE} ${OUTPUT_FILE_NAME}

    // Example:

    $jet encrypt env aws_credes.encrypted
    ```
## 2. Use `codechic` CLI
  - Run this command :
    ```
    $cd {your-repository}
    $codechic init
    ```
  - Fill your information on console.

    ```
    1. Docker port
    2. AWS registry url
    3. Image name
    4. EB application name
    5. EB environment name
    6. S3 bucket
    7. Your encrypted file
    8. AWS region
    9. Do you have test command ? (y/N)
    10. Your test command (optional)
    ```
    <img src="https://raw.githubusercontent.com/Sellsuki/codechic-cli/master/static/img/example-console.png">

  - You will receive file & directory for deployment.

    <img src="https://raw.githubusercontent.com/Sellsuki/codechic-cli/master/static/img/directory.png">

## 3. Create your Dockerfile
  - Move your DockerFile to your repository.
## 4. Copy file encrypted to
```
./deploy/${YOUR_FILE}
```
## 5. Push your code !!
## ⚠️ ️ BEWARE !!!
  <span style="color:red">
    - Don't push your codeship.aes and your AWS credential file to git.
  </span>

## License

[MIT](LICENSE)

Developed with ❤️ and ☕️
