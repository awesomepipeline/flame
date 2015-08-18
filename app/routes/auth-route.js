import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';
import ResetScroll from 'flame/mixins/reset-scroll';

export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScroll, {
  // Stuff goes here
});
