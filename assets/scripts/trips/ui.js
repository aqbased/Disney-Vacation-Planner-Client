'use strict'
const store = require('./../store')

const onCreateTripSuccess = function (response) {
  store.tripid = response._id
  $('form').trigger('reset')
  $('#trip-message').html(`The last trip id created was ${store.tripid}`)
  $('#createtrip-message').html('Woohoo!  You\'re trip has been created!')
  setTimeout(() => {
    $('#createtrip-message').html('')
  }, 5000)
  console.log('you made it to create trip success')
}
const onCreateTripFailure = function (response) {
  $('#triperror-message').html('Sorry!  You\'re trip was not created, try again.')
  setTimeout(() => {
    $('#triperror-message').html('')
  }, 5000)
  console.log('you made it to create trip failure')
}

const onShowTripSuccess = function (response) {
  $('form').trigger('reset')
  const tripInfo = response.trip
  const tripInfoHtml = `
    <h4>Name: ${tripInfo.name}</h4>
    <p>Dates: ${tripInfo.dates}</p>
    <p>Description: ${tripInfo.description}</p>
  `
  $('#showtrip-message').html(tripInfoHtml)
}

const onShowTripFailure = function (response) {
  console.log('show trip failure')
}

const onIndexTripSuccess = function (response) {
  console.log('this is response', response)
  let tripInfoHtml = ''
  response.forEach(response => {
    tripInfoHtml += `
      <p>Name: ${response.name}<p>
      <p>Dates: ${response.dates}<p>
      <p>Description: ${response.description}<p>
      <hr>
    `
  })
  $('#showtrip-message').append(tripInfoHtml)
}

const onIndexTripFailure = function (response) {
  console.log('u failed my dude')
}

const onUpdateTripSuccess = function () {
  $('form').trigger('reset')
  $('#showtrip-message').html('The update has gone through.  Search the trip by ID to check updates or view through your index.')
  setTimeout(() => {
    $('#showtrip-message').html('')
  }, 5000)
}

module.exports = {
  onCreateTripSuccess,
  onCreateTripFailure,
  onShowTripFailure,
  onShowTripSuccess,
  onIndexTripSuccess,
  onIndexTripFailure,
  onUpdateTripSuccess
}
