const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateTrip = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createTrip(data)
    .then(ui.onCreateTripSuccess)
    .catch(ui.onTripFailure)
}

const onShowTrip = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.showTrip(data)
    .then(ui.onShowTripSuccess)
    .catch(ui.onTripFailure)
}

const onIndexTrip = function (event) {
  event.preventDefault()
  api.indexTrip()
    .then(ui.onIndexTripSuccess)
    .catch(ui.onTripFailure)
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
    // CHANGE THIS FAILURE
    .catch(ui.onTripFailure)
}

const onDestroyTrip = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const id = data.trip.id
  api.destroyTrip(id)
    .then(ui.onDestroyTripSuccess)
    // CHANGE THIS FAILURE
    .catch(ui.onTripFailure)
}

const onHideTrip = function (event) {
  $('#trip-message').html('')
}

module.exports = {
  onCreateTrip,
  onShowTrip,
  onHideTrip,
  onIndexTrip,
  onUpdateTrip,
  onDestroyTrip
}
