#!/usr/bin/env node

const program = require('commander')
const { prompt } = require('inquirer')
// Require logic.js file and extract controller functions using JS destructuring assignment
const { createInitFile } = require('./logic')

program
  .version('0.0.1')
  .description('Create init files to be deploy by Codeship pro.')

const questions = [
  {
    type : 'input',
    name : 'containerPort',
    default: '80',
    message : 'What is your docker container port : '
  },
  {
    type : 'input',
    name : 'awsRgistry',
    message : 'What is your aws registry : '
  },
  {
    type : 'input',
    name : 'awsImageName',
    message : 'What is your aws image name : '
  },
  {
    type : 'input',
    name : 'applicationName',
    message : 'What is your eb application name :'
  },
  {
    type : 'input',
    name : 'applicationEnv',
    message : 'What is your eb iapplication env :'
  },
  {
    type : 'input',
    name : 's3Bucket',
    message : 'What is your s3 bucket :'
  },
  {
    type : 'input',
    name : 'awsKeyEncryptPath',
    default: 'aws_credes.encrypted',
    message : 'What is your aws encrypted key file path :'
  },
  {
    type : 'input',
    name : 'awsRegion',
    default: 'ap-southeast-1',
    message : 'What is your aws region :'
  },
  {
    type : 'input',
    name : 'awsRegion',
    default: 'ap-southeast-1',
    message : 'What is your aws region :'
  },
  {
    type : 'input',
    name : 'testCommand',
    default: 'npm run test',
    message : 'What is your test command :'
  }
]

program
.command('init')
.alias('i')
.description('Create init files to be deploy by Codeship pro.')
.action(() => {
  prompt(questions).then(answers =>
    createInitFile(answers))
});


program.parse(process.argv)
