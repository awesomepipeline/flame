import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'api/v1/user',
  headers: {
    "authorization": "Token token=\"zFv7vEy55ZD7cnbos1wV\",  username=\"tester1\""
  }
});
