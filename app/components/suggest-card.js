import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitSuggestion: function(invitation) {
      var dropdownSelection = $('#dropdown').val();
      var suggestionText = $('suggestionText').val();
      this.sendAction('action', dropdownSelection, suggestionText, this.get('card-data').id);
    }
  }
});
