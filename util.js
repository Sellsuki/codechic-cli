const fs = require('fs')

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

module.exports = {
  readFile,
  writeFile,
  makeDirectory
}