const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateTrip = function (event) {
  event.preventDefault()
  const form = event.target
  console.log('this is form', form)
  const data = getFormFields(form)
  console.log('this is data', data)
  api.createTrip(data)
    .then(ui.onCreateTripSuccess)
    .catch(ui.onCreateTripFailure)
}

const onShowTrip = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.showTrip(data)
    .then(ui.onShowTripSuccess)
    .catch(ui.onShowTripFailure)
}

const onIndexTrip = function (event) {
  event.preventDefault()
  api.indexTrip()
    .then(ui.onIndexTripSuccess)
    .catch(ui.onIndexTripFailure)
}

const onHideTrip = function (event) {
  $('#showtrip-message').html('')
}

const onUpdateTrip = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const id = data.trip.id
  console.log('this is the update trip data', data)
  console.log('this is the update trip id', id)
  api.updateTrip(id, data)
    .then(ui.onUpdateTripSuccess)
    .catch(ui.onIndexTripFailure)
}

module.exports = {
  onCreateTrip,
  onShowTrip,
  onHideTrip,
  onIndexTrip,
  onUpdateTrip
}
