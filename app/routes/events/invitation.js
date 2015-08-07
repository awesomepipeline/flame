import Ember from 'ember';
import EventsAdapter from 'flame/adapter/events';
import AuthRoute from 'flame/routes/auth-route';

export default Ember.Route.extend({
  adapter: EventsAdapter.create(),

  model: function(params) {
    var settings = this.get('adapter').createInvitationSettings(params);
    var _this = this;

    return Ember.$.ajax(settings)
      .done(function(response) {
        console.log(response);
        _this.transitionTo('invitations.show', params.event_id);
      })
      .fail(function() {
        _this.transitionTo('invitations');
      });
  }
});
