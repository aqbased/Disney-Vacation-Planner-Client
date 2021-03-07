const config = require('../config')
const store = require('../store')

const createTrip = function (data) {
  return $.ajax({
    url: config.apiUrl + '/trips',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const showTrip = function (data) {
  return $.ajax({
    url: config.apiUrl + '/trips/' + data.trip.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const indexTrip = function () {
  return $.ajax({
    url: config.apiUrl + '/trips',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateTrip = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/trips/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const destroyTrip = function (id) {
  return $.ajax({
    url: config.apiUrl + '/trips/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createTrip,
  showTrip,
  indexTrip,
  updateTrip,
  destroyTrip
}
