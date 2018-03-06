#!/usr/bin/env node

const program = require('commander')
const { prompt } = require('inquirer')
// Require logic.js file and extract controller functions using JS destructuring assignment
const { createInitFile, createInitEnvFile } = require('./logic')
const { initQuestions, initEnvQuestions } = require('./questions')
const { exec } = require('child_process')

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

program
  .command("check-jet")
  .description('Check jet cli')
  .action(() => {
    exec('jet', function (error, stdout, stderr) {
      if (error === null) {
        console.log("jet not yet install.\ndocuments of jet-cli installation: https://documentation.codeship.com/pro/jet-cli/installation")
      } else {
        console.log("jet installed.")
      }
    })
  })


program.parse(process.argv)
