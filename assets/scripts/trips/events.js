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

const onDestroyTrip = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const id = data.trip.id
  api.destroyTrip(id)
    .then(ui.onDestroyTripSuccess)
    .catch(ui.onTripFailure)
}

const onHideTrip = function (event) {
  $('#trip-message').html('')
}

const onDynamicDestroyTrip = function (event) {
  console.log('at event.js dynamicdestroy')
  const deleteButton = event.target
  const id = $(deleteButton).data('id')
  api.destroyTrip(id)
    .then(ui.onDestroyTripSuccess)
    .catch(ui.onTripFailure)
}

const onDynamicUpdateTrip = function (event) {
  console.log('at event.js onDynamicUpdateTrip')
  event.preventDefault()
  const updateForm = event.target
  const id = $(updateForm).data('id')
  console.log(id)
  const formData = getFormFields(updateForm)
  api.updateTrip(id, formData)
    .then(ui.onUpdateTripSuccess)
    .catch(ui.onTripFailure)
}

module.exports = {
  onCreateTrip,
  onShowTrip,
  onHideTrip,
  onIndexTrip,
  onDestroyTrip,
  onDynamicDestroyTrip,
  onDynamicUpdateTrip
}
