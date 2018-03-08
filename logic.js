const { readFile,writeFile,makeDirectory, encryptWithCheckJet } = require('./util')
const LogHorizon = require('log-horizon')
const logger = new LogHorizon({statusType:'badge'})

async function createInitFile (params) {
  let deployScriptFile = readFile(__dirname + '/template_flie/aws_deployment')
  let codeshipServiceFile = readFile(__dirname + '/template_flie/codeship-services.yml')
  let codeshipStepFile = readFile(__dirname + '/template_flie/codeship-steps.yml')
  let dockerRunFile = readFile(__dirname + '/template_flie/Dockerrun.aws.json')
  let awsImageName = params.awsImageName.trim().split('/')
  awsImageName = awsImageName[awsImageName.length - 1]

  codeshipServiceFile = codeshipServiceFile.replace(/{aws-image-name}/g, params.awsRgistry.trim() + '/' + params.awsImageName.trim())
  codeshipServiceFile = codeshipServiceFile.replace(/{aws-key-encrypt-path}/g, params.awsKeyEncryptPath.trim())
  codeshipServiceFile = codeshipServiceFile.replace(/{aws-region}/g, params.awsRegion.trim())

  codeshipStepFile = codeshipStepFile.replace(/{aws-image-name}/g, params.awsRgistry.trim() + '/' + params.awsImageName.trim())
  codeshipStepFile = codeshipStepFile.replace(/{aws-registry}/g, params.awsRgistry.trim())
  codeshipStepFile = codeshipStepFile.replace(/{application-name}/g, params.applicationName.trim())
  codeshipStepFile = codeshipStepFile.replace(/{application-env}/g, params.applicationEnv.trim())
  codeshipStepFile = codeshipStepFile.replace(/{s3-bucket}/g, params.s3Bucket.trim())
  if (params.isHaveTestCommand) {
    const testStep = `- name: Run test \n        service: app \n        command: ${params.testCommand.trim()}`
    codeshipStepFile = codeshipStepFile.replace(/{run-test-command}/g, testStep)
  } else {
    codeshipStepFile = codeshipStepFile.replace(/\n      {run-test-command}/g, '')
  }

  dockerRunFile = dockerRunFile.replace(/{port}/g, params.containerPort.trim())
  dockerRunFile = dockerRunFile.replace(/{image-name}/g, awsImageName)
  makeDirectory('./deploy')
  let writeProcess = []
  writeProcess.push(writeFile('./deploy/aws_deployment', deployScriptFile))
  writeProcess.push(writeFile('./codeship-services.yml', codeshipServiceFile))
  writeProcess.push(writeFile('./codeship-steps.yml', codeshipStepFile))
  writeProcess.push(writeFile('./deploy/Dockerrun.aws.json', dockerRunFile))
  try {
    await Promise.all(writeProcess)
  } catch(e) {
    logger.error('Something went wrong!')
    logger.error(e)
  }

  logger.success('File was generated please copy key file to deploy directory.')
}

async function createInitEnvFile (params) {
  let deployScriptFile = readFile(__dirname + '/template_flie/aws_deployment')
  let codeshipServiceFile = readFile(__dirname + '/template_flie/codeship-services.yml')
  let codeshipStepFile = readFile(__dirname + '/template_flie/codeship-steps.yml')
  let dockerRunFile = readFile(__dirname + '/template_flie/Dockerrun.aws.json')
  let awsImageName = params.awsImageName.trim().split('/')
  awsImageName = awsImageName[awsImageName.length - 1]

  codeshipServiceFile = codeshipServiceFile.replace(/{aws-image-name}/g, params.awsRgistry.trim() + '/' + params.awsImageName.trim())
  codeshipServiceFile = codeshipServiceFile.replace(/{aws-key-encrypt-path}/g, params.awsKeyEncryptPath.trim())
  codeshipServiceFile = codeshipServiceFile.replace(/{aws-region}/g, params.awsRegion.trim())

  codeshipStepFile = codeshipStepFile.replace(/{aws-image-name}/g, params.awsRgistry.trim() + '/' + params.awsImageName.trim())
  codeshipStepFile = codeshipStepFile.replace(/{aws-registry}/g, params.awsRgistry.trim())
  codeshipStepFile = codeshipStepFile.replace(/{application-name}/g, params.applicationName.trim())
  codeshipStepFile = codeshipStepFile.replace(/{application-env}/g, params.applicationEnv.trim())
  codeshipStepFile = codeshipStepFile.replace(/{s3-bucket}/g, params.s3Bucket.trim())
  if (params.isHaveTestCommand) {
    const testStep = `- name: Run test \n        service: app \n        command: ${params.testCommand.trim()}`
    codeshipStepFile = codeshipStepFile.replace(/{run-test-command}/g, testStep)
  } else {
    codeshipStepFile = codeshipStepFile.replace(/\n      {run-test-command}/g, '')
  }

  dockerRunFile = dockerRunFile.replace(/{port}/g, params.containerPort.trim())
  dockerRunFile = dockerRunFile.replace(/{image-name}/g, awsImageName)
  makeDirectory('./deploy')
  let writeProcess = []
  writeProcess.push(writeFile('./deploy/aws_deployment', deployScriptFile))
  writeProcess.push(writeFile('./codeship-services.yml', codeshipServiceFile))
  writeProcess.push(writeFile('./codeship-steps.yml', codeshipStepFile))
  writeProcess.push(writeFile('./deploy/Dockerrun.aws.json', dockerRunFile))
  try {
    await Promise.all(writeProcess)
  } catch(e) {
    logger.error('Something went wrong!')
    logger.error(e)
  }

  logger.success('File was generated please copy key file to deploy directory.')
}

module.exports = {
  createInitFile,
  createInitEnvFile
}
