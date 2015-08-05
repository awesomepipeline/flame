import AuthRoute from './auth-route';

export default AuthRoute.extend({
  // model(params) {
  //   console.log(params);
  //   return this.store.findRecord('event', params.event_id);
  // },
  deactivate: function() {
    // var currentModel = this.modelFor('events.show');
    // var currentUser = this.get('session.content.secure.username');

    // console.log(currentModel);
    // // console.log(currentModel.get('host').username);
    // console.log(this.get('session.content.secure.username'));


    // this.store.deleteRecord(this.modelFor('events.show'));
  }
});

// {"id":"8318f118e8bb9629ea2eaedd5b53bb5a7ca64786a425dda6","activity":"Do nothing for the day","location":"My house","datetime":"2015-08-30T00:00:00.000+08:00","description":"IDK do what shitx","created_at":"2015-08-04T19:07:29.499+08:00","updated_at":"2015-08-04T19:46:00.308+08:00","host":{"id":2,"created_at":"2015-08-04T17:59:09.852+08:00","updated_at":"2015-08-04T22:03:47.596+08:00","fullname":"Tester 1","username":"tester1","admin":false,"auth_token":"YpEEF9xFJuDo8x-y7Zqr"}}