import Ember from 'ember';

export default Ember.Route.extend({
  model({ id }) {
    return this.get('store').findRecord('guide', id);
  }
});
