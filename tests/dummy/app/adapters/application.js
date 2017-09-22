import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'dummy/config/environment';

export default JSONAPIAdapter.extend({
  namespace: `${ENV.rootURL}api`
});
