import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('guides', { path: '/' }, function() {
    this.route('guide', { path: '/guide/:id' });
    this.route('table-of-contents', { path: '/' });
  });
});

export default Router;
