const { readFile,writeFile,makeDirectory } = require('./util')

async function createInitFile (params) {
  let deployScriptFile = readFile(__dirname + '/template_flie/aws_deployment')
  let codeshipServiceFile = readFile(__dirname + '/template_flie/codeship-services.yml')
  let codeshipStepFile = readFile(__dirname + '/template_flie/codeship-steps.yml')
  let dockerRunFile = readFile(__dirname + '/template_flie/Dockerrun.aws.json')

  codeshipServiceFile = codeshipServiceFile.replace(/{aws-image-name}/g, params.awsImageName.trim())
  codeshipServiceFile = codeshipServiceFile.replace(/{aws-key-encrypt-path}/g, params.awsKeyEncryptPath.trim())
  codeshipServiceFile = codeshipServiceFile.replace(/{aws-region}/g, params.awsRegion.trim())

  codeshipStepFile = codeshipStepFile.replace(/{aws-image-name}/g, params.awsImageName.trim())
  codeshipStepFile = codeshipStepFile.replace(/{aws-registry}/g, params.awsRgistry.trim())
  codeshipStepFile = codeshipStepFile.replace(/{application-name}/g, params.applicationName.trim())
  codeshipStepFile = codeshipStepFile.replace(/{application-env}/g, params.applicationEnv.trim())
  codeshipStepFile = codeshipStepFile.replace(/{s3-bucket}/g, params.s3Bucket.trim())
  codeshipStepFile = codeshipStepFile.replace(/{run-test-command}/g, params.testCommand.trim())

  dockerRunFile = dockerRunFile.replace(/{port}/g, params.containerPort.trim())
  makeDirectory('./deploy')
  let writeProcess = []
  writeProcess.push(writeFile('./deploy/aws_deployment', deployScriptFile))
  writeProcess.push(writeFile('./codeship-services.yml', codeshipServiceFile))
  writeProcess.push(writeFile('./codeship-steps.yml', codeshipStepFile))
  writeProcess.push(writeFile('./deploy/Dockerrun.aws.json', dockerRunFile))
  try {
    await Promise.all(writeProcess)
  } catch(e) {
    console.log('Something went wrong!')
    console.log(e)
  }
  console.log('Success!')
  console.log('File was generated please copy key file to deploy directory.')
}

async function createInitEnvFile (params) {
  let deployScriptFile = readFile(__dirname + '/template_flie/aws_deployment')
  let codeshipServiceFile = readFile(__dirname + '/template_flie/codeship-services.yml')
  let codeshipStepFile = readFile(__dirname + '/template_flie/codeship-steps.yml')
  let dockerRunFile = readFile(__dirname + '/template_flie/Dockerrun.aws.json')

  codeshipServiceFile = codeshipServiceFile.replace(/{aws-image-name}/g, params.awsImageName.trim())
  codeshipServiceFile = codeshipServiceFile.replace(/{aws-key-encrypt-path}/g, params.awsKeyEncryptPath.trim())
  codeshipServiceFile = codeshipServiceFile.replace(/{aws-region}/g, params.awsRegion.trim())

  codeshipStepFile = codeshipStepFile.replace(/{aws-image-name}/g, params.awsImageName.trim())
  codeshipStepFile = codeshipStepFile.replace(/{aws-registry}/g, params.awsRgistry.trim())
  codeshipStepFile = codeshipStepFile.replace(/{application-name}/g, params.applicationName.trim())
  codeshipStepFile = codeshipStepFile.replace(/{application-env}/g, params.applicationEnv.trim())
  codeshipStepFile = codeshipStepFile.replace(/{s3-bucket}/g, params.s3Bucket.trim())
  codeshipStepFile = codeshipStepFile.replace(/{run-test-command}/g, params.testCommand.trim())

  dockerRunFile = dockerRunFile.replace(/{port}/g, params.containerPort.trim())
  makeDirectory('./deploy')
  let writeProcess = []
  writeProcess.push(writeFile('./deploy/aws_deployment', deployScriptFile))
  writeProcess.push(writeFile('./codeship-services.yml', codeshipServiceFile))
  writeProcess.push(writeFile('./codeship-steps.yml', codeshipStepFile))
  writeProcess.push(writeFile('./deploy/Dockerrun.aws.json', dockerRunFile))
  try {
    await Promise.all(writeProcess)
  } catch(e) {
    console.log('Something went wrong!')
    console.log(e)
  }
  console.log('Success!')
  console.log('File was generated please copy key file to deploy directory.')
}

module.exports = {
  createInitFile,
  createInitEnvFile
}
