#!/usr/bin/env node

const program = require('commander')
const { prompt } = require('inquirer')
// Require logic.js file and extract controller functions using JS destructuring assignment
const { createInitFile, createInitEnvFile } = require('./logic')
const { initQuestions, initEnvQuestions } = require('./questions')

program
  .version('0.0.1')
  .description('CLI for deployment with Codeship pro. by Sellsuki Team')

program
.command('init')
.alias('i')
.description('Create initial files for deployment by Codeship pro.')
.action(() => {
  prompt(initQuestions).then(answers =>
    createInitFile(answers))
})

program
.command('init-env')
.alias('ie')
.description('Create initial files and environment for deployment by Codeship pro.')
.action(() => {
  prompt(initEnvQuestions).then(answers =>
    createInitEnvFile(answers))
})


program.parse(process.argv)
