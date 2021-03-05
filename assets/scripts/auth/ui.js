const store = require('./../store')
const signUpSuccess = function (response) {
  $('#sign-up').trigger('reset')
  $('#auth-message').html('Welcome!')
  setTimeout(() => {
    $('#auth-message').html('')
  }, 5000)
}

const authFailure = function (response) {
  $('#auth-message').html('Sorry, that did not work.  Please try again.')
  setTimeout(() => {
    $('#auth-message').html('')
  }, 5000)
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('#auth-message').html('Welcome home!')
  setTimeout(() => {
    $('#auth-message').html('')
  }, 5000)
}

const onChangePasswordSuccess = function (response) {
  $('#change-password').trigger('reset')
  $('#auth-message').html('You\'re password has been changed.')
  setTimeout(() => {
    $('#auth-message').html('')
  }, 5000)
}

module.exports = {
  signUpSuccess,
  authFailure,
  onSignInSuccess,
  onChangePasswordSuccess
}
