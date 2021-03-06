'use strict'

const onCreateTripSuccess = function (response) {
  $('#tripsuccess-message').html('Great, you created a new trip!  Your trip information is below.  Either search the trip by ID or find it in your trip list for more options.')
  setTimeout(() => {
    $('#tripsuccess-message').html('')
  }, 10000)
  $('form').trigger('reset')
  $('#createTripModal').modal('hide')
  $('#trip1-message').hide()
  const tripInfo = response
  const tripInfoHtml = `
    <h4>Name: ${tripInfo.name}</h4>
    <p>Dates: ${tripInfo.dates}</p>
    <p>Description: ${tripInfo.description}</p>
    <p>Trip Id: ${tripInfo._id}
  `
  $('#trip-message').show()
  $('#trip-message').html(tripInfoHtml)
}

const onShowTripSuccess = function (response) {
  $('form').trigger('reset')
  $('#trip1-message').hide()
  const tripInfo = response.trip
  const tripInfoHtml = `

  <form id='createEventForm' data-id=${tripInfo._id}>
  <input name="event[parkPlan]" type="text" placeholder="Enter Event Name" required>
  <input name="event[content]" type="text" placeholder="Enter Event Notes" required>
  <button type="submit" class="btn btn-primary">Create Event</button><br><br>
  </form>

  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-item active">
  <img class="d-block w-100" src="https://i.imgur.com/1LREBba.jpg" alt="First slide">
  <div class="carousel-caption ">
      <h2 class="showText">Name: ${tripInfo.name}</h2>
      <h3 class="showText">Dates: ${tripInfo.dates}<br>
      Description: ${tripInfo.description}<br>
      Trip Id: ${tripInfo._id}</h3>
    </div>
  </div>
  <div class="carousel-item">
  <img class="d-block w-100" src="https://i.imgur.com/zjTWqvk.jpg" alt="Second slide">
  <div class="carousel-caption ">
      <p id="eventNameText" class="showText"></p>
    </div>
  </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
  </a>
  </div>`
  $('#trip-message').show()
  $('#trip-message').html(tripInfoHtml)
  const data = response.trip.events
  if (data.length === 0) {
    $('#eventNameText').html('Events will be shown here once created.  You can do that in the form above.')
  } else {
    $('#eventNameText').html('')
    for (let i = 0; i < data.length; i++) {
      const newEventName = data[i].parkPlan
      const newEventContent = data[i].content
      $('#eventNameText').append(`Event Name: ${newEventName} || Event Notes: ${newEventContent} <br><hr>`)
    }
  }
}

const onIndexTripSuccess = function (response) {
  $('#trip-message').hide()
  let tripInfoHtml = ''
  response.forEach(response => {
    tripInfoHtml += `
      <hr>
      <p>Name: ${response.name}</p>
      <p>Dates: ${response.dates}</p>
      <p>Description: ${response.description}</p>
      <p>Trip Id: ${response._id}</p>
      <form class="trips-update-dynamic" data-id=${response._id}>
        <input type="text" name="trip[name]" placeholder="Enter new trip name" required>
        <input type="text" name="trip[dates]" placeholder="Enter new dates" required>
        <input type="text" name="trip[description]" placeholder="Enter new description" required><br>
        <button type="submit" class="index-dynamic-button btn btn-primary">Update Trip</button>
      </form>
      <button class='trips-destroy-dynamic index-dynamic-button btn btn-primary' data-id=${response._id}>Delete Trip</button>
      <br>
      <hr>
    `
  })
  $('#trip1-message').show()
  $('#trip1-message').html(tripInfoHtml)
  if ($('#trip1-message').html() === '') {
    $('#trip1-message').html('There are no trips to show.  Please create a trip to see information here.')
    setTimeout(() => {
      $('#trip1-message').html('')
    }, 5000)
  }
}

const onUpdateTripSuccess = function () {
  $('form').trigger('reset')
  $('#trip1-message').hide()
  $('#trip0-message').html('The update has gone through.  Search the trip by ID to check updates or view through your index.')
  setTimeout(() => {
    $('#trip0-message').html('')
  }, 5000)
}

const onDestroyTripSuccess = function () {
  $('form').trigger('reset')
  $('#trip1-message').hide()
  $('#trip0-message').html('Your trip has been deleted.')
  setTimeout(() => {
    $('#trip0-message').html('')
  }, 8000)
}

const onTripFailure = function () {
  $('form').trigger('reset')
  $('#triperror-message').html('Sorry!  Something wasn\'t right, please try again.')
  setTimeout(() => {
    $('#triperror-message').html('')
  }, 5000)
}

const onCreateEventSuccess = function (response) {
  $('#tripsuccess-message').html('Great!  You created a new event!  Click the slide below to see your events.')
  setTimeout(() => {
    $('#tripsuccess-message').html('')
  }, 5000)
  $('form').trigger('reset')
  $('#eventNameText').html('')
  $('#eventContentText').html('')
  const data = response.trip.events
  for (let i = 0; i < data.length; i++) {
    const newEventName = data[i].parkPlan
    const newEventContent = data[i].content
    $('#eventNameText').append(`Event Name: ${newEventName} || Event Notes: ${newEventContent} <br><hr>`)
  }
}

module.exports = {
  onCreateTripSuccess,
  onShowTripSuccess,
  onIndexTripSuccess,
  onUpdateTripSuccess,
  onDestroyTripSuccess,
  onTripFailure,
  onCreateEventSuccess
}
