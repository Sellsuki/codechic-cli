#!/usr/bin/env node

const program = require('commander')
const { prompt } = require('inquirer')
// Require logic.js file and extract controller functions using JS destructuring assignment
const { createInitFile } = require('./logic')

program
  .version('0.0.1')
  .description('testWrite CLI')

const questions = [
  {
    type : 'input',
    name : 'containerPort',
    default: '80',
    message : 'What your docker container port : '
  },
  {
    type : 'input',
    name : 'awsRgistry',
    message : 'What your aws registry : '
  },
  {
    type : 'input',
    name : 'awsImageName',
    message : 'What your aws image name : '
  },
  {
    type : 'input',
    name : 'applicationName',
    message : 'What your eb application name :'
  },
  {
    type : 'input',
    name : 'applicationEnv',
    message : 'What your eb iapplication env :'
  },
  {
    type : 'input',
    name : 's3Bucket',
    message : 'What your s3 bucket :'
  },
  {
    type : 'input',
    name : 'awsKeyEncryptPath',
    default: 'aws_credes.encrypted',
    message : 'What your aws encrypted key file path :'
  },
  {
    type : 'input',
    name : 'awsRegion',
    default: 'ap-southeast-1',
    message : 'What your aws region :'
  }
]

program
.command('init')
.alias('i')
.description('create a init file to be deploy by code ship pro')
.action(() => {
  prompt(questions).then(answers =>
    createInitFile(answers))
});


program.parse(process.argv)
