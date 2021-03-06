'use strict'
// const store = require('./../store')

const onCreateTripSuccess = function (response) {
  $('form').trigger('reset')
  $('#trip-message').html(`You're created trip's id is: ${response._id}`)
  setTimeout(() => {
    $('#trip-message').html('')
  }, 5000)
}

const onShowTripSuccess = function (response) {
  $('form').trigger('reset')
  const tripInfo = response.trip
  const tripInfoHtml = `
    <h4>Name: ${tripInfo.name}</h4>
    <p>Dates: ${tripInfo.dates}</p>
    <p>Description: ${tripInfo.description}</p>
    <p>Trip Id: ${tripInfo._id}
  `
  $('#trip-message').show()
  $('#trip-message').html(tripInfoHtml)
}

const onIndexTripSuccess = function (response) {
  let tripInfoHtml = ''
  response.forEach(response => {
    tripInfoHtml += `
      <p>Name: ${response.name}<p>
      <p>Dates: ${response.dates}<p>
      <p>Description: ${response.description}<p>
      <p>Trip Id: ${response._id}
      <hr>
    `
  })
  $('#trip-message').show()
  $('#trip-message').html(tripInfoHtml)
}

const onUpdateTripSuccess = function () {
  $('form').trigger('reset')
  $('#trip-message').html('The update has gone through.  Search the trip by ID to check updates or view through your index.')
  setTimeout(() => {
    $('#trip-message').html('')
  }, 5000)
}

const onDestroyTripSuccess = function () {
  $('form').trigger('reset')
  $('#trip-message').html('Your trip has been deleted.')
  setTimeout(() => {
    $('#trip-message').html('')
  }, 5000)
}

const onTripFailure = function () {
  $('form').trigger('reset')
  $('#triperror-message').html('Sorry!  Something wasn\'t right, please try again.')
  setTimeout(() => {
    $('#triperror-message').html('')
  }, 5000)
}

module.exports = {
  onCreateTripSuccess,
  onShowTripSuccess,
  onIndexTripSuccess,
  onUpdateTripSuccess,
  onDestroyTripSuccess,
  onTripFailure
}
