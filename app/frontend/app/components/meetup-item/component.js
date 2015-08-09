import Ember from 'ember';

export default Ember.Component.extend({

  meetup: null,

  tagName: 'meetup-item',

  actions: {

    save() {
      this.set('isEditing', false);
      this.sendAction('action', this.get('meetup'));
    },

    edit() {
      this.set('isEditing', true);
    },

    cancel() {
      this.get('meetup').rollbackAttributes();
      this.set('isEditing', false);
    }

  }

});
