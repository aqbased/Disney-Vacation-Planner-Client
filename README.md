# Disney Vacation Planner

This application allows the user to create a new Disney trip to plan for!  Simply enter
the trip information in the form to save it to your account.  A user can then
search the trip and add new events for that trip.

## Important Links

- [Back-End Repo](https://github.com/aqbased/Disney-Vacation-Planner-Back-End)
- [Deployed API](https://git.heroku.com/limitless-retreat-94224.git)
- [Deployed Client](https://aqbased.github.io/Disney-Vacation-Planner-Client/)

## Planning Story

For the back end, I needed to create a new resource(trips) to link to my user.
I created routes for each trip path and then linked them to the user.
Starting the front end side of this project was a blast.  The first thing I
needed to take care of was setting up the authentication for a new user.  After
that my plan was to start implementing the user's "trips" into the client.  I
started off with all the CRUD actions for them and added forms to go along with
them.  Finally I wanted to implement a subdocument to be created by the user
also.  With that part of the project happening I also implemented a carousel
with 2 seperate images on each slide for a user's trip and event info to to
act as a caption for.  My main problem solving strategy was to break and fix my
code over and over for a good 10-20 minutes.  I would then search our main
project repo's issue queu and google for any help.  If all of the above fails
I had the help of my instructors or fellow classmates to help tag-team the
problem.

### User Stories

- As a user I want to create a vacation trip title.
- As a user I want to add events to my vacation trip object.
- As a user I want to view trips and events I've already made.
- As a user I want to delete trips and start a new one.

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript

### Unsolved Problems

- Still need to add read, update and delete actions for my subdocument.
- Would like to eventually have the carousel set up to have a new slide created
for each new event created.

#### Wireframe:
![wireframe](https://i.imgur.com/Tf8rMqZ.jpg)
