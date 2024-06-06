import log4js from 'log4js'
import logConfig from './log4js.config.js'

const innerLogger = log4js.getLogger()
const fileLogger = log4js.getLogger('traceCategory')

log4js.configure(logConfig)

class Logger {
  trace(...args) {
    fileLogger.trace(...args)
  }

  debug(...args) {
    innerLogger.debug(...args)
  }

  info(...args) {
    innerLogger.info(...args)
  }

  warn(...args) {
    innerLogger.warn(...args)
  }

  error(...args) {
    innerLogger.error(...args)
  }

  fatal(...args) {
    innerLogger.fatal(...args)
  }
}

export default new Logger()
