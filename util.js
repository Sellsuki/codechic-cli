const fs = require('fs')
const { exec } = require('child_process')
const LogHorizon = require('log-horizon')
const logger = new LogHorizon({statusType:'badge'})

function readFile (filePath) {
  return fs.readFileSync(filePath, 'utf8')
}

function writeFile (filePath, data) {
  return new Promise ((resolve, reject) => {
    fs.writeFile(filePath, data, {encoding: 'utf8', mode: 0o755}, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

function makeDirectory (path) {
  fs.mkdirSync(path)
}

function encryptDefault (output = 'aws_credes.encrypted', logSuccess = true) {
  return new Promise ((resolve, reject) => {
    exec(`jet encrypt env ${output}`, function(error, stdout, stderr) {
      if (error !== null) {
        logger.error(stdout)
        resolve(false)
      } else {
        if (logSuccess) logger.success('encrypted.')
        resolve(true)
      }
    })
  })
}

function checkJetCLI (logSuccess = true) {
  return new Promise ((resolve, reject) => {
    exec('jet', function (error, stdout, stderr) {
      if (error !== null) {
        logger.error(`jet-cli not yet install.`)
        logger.warn(`Need help? Check the docs at https://documentation.codeship.com/pro/jet-cli/installation`)
        resolve(false)
      } else {
        if (logSuccess) logger.success("jet-cli installed.")
        resolve(true)
      }
    })
  })
}

async function encryptWithCheckJet(filename = 'aws_credes.encrypted') {
  const jetChecked = await checkJetCLI(false)
  if(jetChecked) {
    encrypt = await encryptDefault(`${filename}`, false)
    return Promise.resolve(encrypt)
  }
  return Promise.resolve(false)
}

module.exports = {
  readFile,
  writeFile,
  makeDirectory,
  encryptDefault,
  checkJetCLI,
  encryptWithCheckJet
}