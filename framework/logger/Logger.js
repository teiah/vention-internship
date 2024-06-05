import log4js from 'log4js'
import logConfig from './log4js.config.js'

const innerLogger = log4js.getLogger()
const fileLogger = log4js.getLogger('traceCategory')

log4js.configure(logConfig)

class Logger {
  trace(message) {
    fileLogger.trace(message)
  }

  debug(message) {
    innerLogger.debug(message)
  }

  info(message) {
    innerLogger.info(message)
  }

  warn(message) {
    innerLogger.warn(message)
  }

  error(message) {
    innerLogger.error(message)
  }

  fatal(message) {
    innerLogger.fatal(message)
  }
}

export default new Logger()
