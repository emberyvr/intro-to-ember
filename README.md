# Ambitious Web Apps with Ember

Slides and code for talk given at Ember.YVR meetup on Monday, August 10th, 2015.

## Viewing the slides

Open _preso/index.html_ in your browser. 

## Running the demo application

### Backend (Rails)

```
cd app/backend
gem install bundler
bundle install
rake db:create db:migrate db:seed
rails server
```

### Frontend (Ember)

```
cd app/frontend
ember server
```
