const server = require('./server/server.js')

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/Avell/Downloads/appsqazando/app-release.apk',
      platform: 'Android',
      desiredCompabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'Pixel2Teste',
        platformVersion: '9'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: async () => {
    await server.start();
  },
  timeout: null,
  teardown: async () => {
    await server.stop();
  },
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'qazando-automation',
  tests: './test/*_test.js'
}