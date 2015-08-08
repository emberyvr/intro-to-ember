import Ember from 'ember';

export default Ember.Controller.extend({

  meetups: Ember.computed.alias('model')

});
