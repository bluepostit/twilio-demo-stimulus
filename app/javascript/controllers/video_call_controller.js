import TwilioVideoController from 'stimulus-twilio-video'

export default class extends TwilioVideoController {
  static targets = ['noCall', 'awaitingBuddy', 'joinCallButton', 'endCallButton']

  callStarted() {
    this.noCallTarget.classList.add('d-none')
    this.awaitingBuddyTarget.classList.remove('d-none')
    this.joinCallButtonTarget.classList.add('d-none')
    this.endCallButtonTarget.classList.remove('d-none')
  }

  callEnded() {
    console.log('Call ended!')
    this.noCallTarget.classList.remove('d-none')
    this.joinCallButtonTarget.classList.remove('d-none')
    this.endCallButtonTarget.classList.add('d-none')
  }

  buddyJoined() {
    console.log('Buddy has joined')
    this.awaitingBuddyTarget.classList.add('d-none')
  }

  buddyLeft() {
    console.log('Buddy has left')
  }
}
