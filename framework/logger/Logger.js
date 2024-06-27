import log4js from 'log4js'
import getLogConfig from './log4js.config.js'
import * as fs from 'node:fs'
import * as allure from '@wdio/allure-reporter'

class Logger {
  initLogger(testName) {
    const config = getLogConfig(testName)
    log4js.configure(config)
    this.innerLogger = log4js.getLogger()
    this.fileLogger = log4js.getLogger('traceCategory')
    this.currentTestName = testName
  }

  getLogFileName() {
    return `logs/${this.currentTestName}.log`
  }

  attachLogFileToReport() {
    const logFilePath = this.getLogFileName()
    const logFileContent = fs.readFileSync(logFilePath, 'utf8')
    allure.addAttachment('Log File', Buffer.from(logFileContent), 'text/plain')
  }

  trace(...args) {
    this.fileLogger.trace(...args)
  }

  debug(...args) {
    this.innerLogger.debug(...args)
  }

  info(...args) {
    this.innerLogger.info(...args)
  }

  warn(...args) {
    this.innerLogger.warn(...args)
  }

  error(...args) {
    this.innerLogger.error(...args)
  }

  fatal(...args) {
    this.innerLogger.fatal(...args)
  }

  logStep(message) {
    this.innerLogger.info(`${message}`)
    allure.addStep(`${message}`)
  }
}

export default new Logger()
