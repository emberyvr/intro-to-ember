import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('meetup');
  },

  actions: {

    saveMeetup(meetup) {
      meetup.save().then(() => {
        console.info('saved!')
      }, () => {
        console.error('failed to save!');
      });
    }

  }

});
