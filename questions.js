
const initQuestions = [
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
    message : 'What is your eb application env :'
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
    type : 'confirm',
    name : 'isHaveTestCommand',
    message : 'Do you have test command ?'
  },
  {
    type : 'input',
    name : 'testCommand',
    default: 'npm run test',
    message : 'What is your test command :',
    when: function (answers) {
      return answers.isHaveTestCommand
    }
  }
]

const initEnvQuestions = [
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

module.exports = {
  initEnvQuestions,
  initQuestions
}
