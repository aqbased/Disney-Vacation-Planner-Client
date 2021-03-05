'use strict'

const store = require('./../store')
const onSignUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#signup-message').html('Welcome!')
  setTimeout(() => {
    $('#signup-message').html('')
  }, 5000)
}

const authFailure = function (response) {
  $('#error-message').html('Sorry, that did not work.  Please try again.')
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const onSignInSuccess = function (response) {
  store.user = response.user
  console.log(store.user)
  $('form').trigger('reset')
  $('#signin-message').html('Welcome home!')
  setTimeout(() => {
    $('#signin-message').html('')
  }, 5000)
}

const onChangePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#changepassword-message').html('You\'re password has been changed.')
  setTimeout(() => {
    $('#changepassword-message').html('')
  }, 5000)
}

const onSignOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#signout-message').html('Thank you for visiting!')
  setTimeout(() => {
    $('#signout-message').html('')
  }, 5000)
}

module.exports = {
  onSignUpSuccess,
  authFailure,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess
}
