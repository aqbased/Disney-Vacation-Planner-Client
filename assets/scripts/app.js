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
  $('#update-trip').on('submit', tripEvents.onUpdateTrip)
  $('#destroy-trip').on('submit', tripEvents.onDestroyTrip)
  // HIDE BEFORE SIGN IN //
  $('#trip-section').hide()
  $('#sign-out').hide()
  $('#changepasswordbtn').hide()
})
