'use strict'

const authEvents = require('./auth/events')

$(() => {
  // Sign Up
  $('#sign-up').on('submit', authEvents.onSignUp)
  // Sign In
  $('#sign-in').on('submit', authEvents.onSignIn)
  // Change Password
  $('#change-password').on('submit', authEvents.onChangePassword)
})
