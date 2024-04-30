import { config } from './wdio.conf.js'
import { browser, $ } from '@wdio/globals'
import { assert } from 'chai'
import { getElementText } from '/Users/teddy/VentionProjects/vention-internship/src/help-functions.js'

export function setup() {
  // Define global setup variables
  global.config = config
  global.setup = {
    config,
    browser,
    $,
    assert,
    getElementText,
  }
  console.log('Global setup complete:', global.config) // Log global.config for debugging
}
