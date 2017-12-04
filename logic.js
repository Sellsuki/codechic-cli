module.exports = {
  createInitFile:createInitFile
}
const { readFile,writeFile,makeDirectory } = require('./util')

async function createInitFile (params) {
  var deployScriptFile = readFile(__dirname + '/template_flie/aws_deployment')
  var codeshipServiceFile = readFile(__dirname + '/template_flie/codeship-services.yml')
  var codeshipStepFile = readFile(__dirname + '/template_flie/codeship-steps.yml')
  var dockerRunFile = readFile(__dirname + '/template_flie/Dockerrun.aws.json')
  console.log(params)

  codeshipServiceFile = codeshipServiceFile.replace(/{aws-image-name}/g, params.awsImageName.trim())
  codeshipServiceFile = codeshipServiceFile.replace(/{aws-key-encrypt-path}/g, params.awsKeyEncryptPath.trim())
  codeshipServiceFile = codeshipServiceFile.replace(/{aws-region}/g, params.awsRegion.trim())

  codeshipStepFile = codeshipStepFile.replace(/{aws-image-name}/g, params.awsImageName.trim())
  codeshipStepFile = codeshipStepFile.replace(/{aws-registry}/g, params.awsRgistry.trim())
  codeshipStepFile = codeshipStepFile.replace(/{application-name}/g, params.applicationName.trim())
  codeshipStepFile = codeshipStepFile.replace(/{application-env}/g, params.applicationEnv.trim())
  codeshipStepFile = codeshipStepFile.replace(/{s3-bucket}/g, params.s3Bucket.trim())

  dockerRunFile = dockerRunFile.replace(/{port}/g, params.containerPort.trim())
  makeDirectory('./deploy')
  var writeProcess = []
  writeProcess.push(writeFile('./deploy/aws_deployment', deployScriptFile))
  writeProcess.push(writeFile('./codeship-services.yml', codeshipServiceFile))
  writeProcess.push(writeFile('./codeship-steps.yml', codeshipStepFile))
  writeProcess.push(writeFile('./deploy/Dockerrun.aws.json', dockerRunFile))
  try {
    await Promise.all(writeProcess)
  } catch(e) {
    console.log('some ting went wrong! Plase check message below')
    console.log(e)
  }
  console.log('Success!!!')
  console.log('file was generated plase coppy key file to deploy dir.')
}
