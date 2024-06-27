const getLogConfig = (testName) => {
  return {
    appenders: {
      out: {
        type: 'console',
        layout: {
          type: 'pattern',
          pattern: '%[[%d{yyyy-MM-dd hh:mm:ss}] [%p] %m%',
        },
      },
      app: {
        type: 'file',
        filename: `logs/${testName}.log`,
        flags: 'w',
        layout: {
          type: 'pattern',
          pattern: '[%d{yyyy-MM-dd hh:mm:ss}] [%p] %m%',
        },
      },
    },
    categories: {
      default: { appenders: ['out', 'app'], level: 'debug' },
      traceCategory: { appenders: ['app'], level: 'trace' },
    },
  }
}
export default getLogConfig
