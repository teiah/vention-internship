const logConfig = {
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
      filename: 'logs/app.log',
      layout: {
        type: 'pattern',
        pattern: '[%d{yyyy-MM-dd hh:mm:ss}] [%p] %m%',
      },
    },
    traceFile: {
      type: 'file',
      filename: 'logs/trace.log',
      layout: {
        type: 'pattern',
        pattern: '[%d{yyyy-MM-dd hh:mm:ss}] [%p] %m%',
      },
    },
  },
  categories: {
    default: { appenders: ['out', 'app'], level: 'debug' },
    traceCategory: { appenders: ['traceFile'], level: 'trace' },
  },
}

export default logConfig
