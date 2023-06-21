const { preparePyodide } = require('./pyodide.js')
const { getPythonSubsetFunction } = require('./get-python-subset-function.js')

async function main(args = process.argv.slice(2)) {
  const pyodide = await preparePyodide()
  pyodide.FS.mount(pyodide.FS.filesystems.NODEFS, { root: '.' }, '.')
  const pythonSubsetFunction = await getPythonSubsetFunction()
  const exitCode = pythonSubsetFunction(args)
  process.exit(exitCode)
}

module.exports = {
  main
}