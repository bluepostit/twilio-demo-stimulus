// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
// Uncomment this line if you want to use the Stimulus Twilio Video controller
//   without inheriting it:
// import TwilioVideoController from 'stimulus-twilio-video'

const application = Application.start()
const context = require.context("controllers", true, /_controller\.js$/)
// Uncomment this line if you want to use the Stimulus Twilio Video controller
//   without inheriting it:
// application.register('video-call', TwilioVideoController)
application.load(definitionsFromContext(context))
