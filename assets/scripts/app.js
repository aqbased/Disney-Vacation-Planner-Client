'use strict'

const authEvents = require('./auth/events')
const tripEvents = require('./trips/events')

$(() => {
  // AUTH SECTION //
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // TRIPS SECTION //
  $('#create-trip').on('submit', tripEvents.onCreateTrip)
  $('#show-trip').on('submit', tripEvents.onShowTrip)
  $('#hidetripinfo').on('click', tripEvents.onHideTrip)
  $('#indextrips').on('click', tripEvents.onIndexTrip)
  $('#destroy-trip').on('submit', tripEvents.onDestroyTrip)
  // HIDE BEFORE SIGN IN //
  $('#trip-section').hide()
  $('#sign-out').hide()
  $('#changepasswordbtn').hide()

  // DYNAMIC INDEX UPDATE AND DELETE //
  $('#trip-message').on('click', '.trips-destroy-dynamic', tripEvents.onDynamicDestroyTrip)
  $('#trip-message').on('submit', '.trips-update-dynamic', tripEvents.onDynamicUpdateTrip)

  // DYNAMIC EVENTS SECTION //
  $('#trip-message').on('submit', tripEvents.onDynamicCreateEvent)
})
