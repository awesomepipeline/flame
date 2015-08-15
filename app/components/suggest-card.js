import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitSuggestion: function(invitation) {
      var dropdownSelection = $('#dropdown').val();
      var suggestionText = $('#suggestionText').val();
      var date = $('#date').val();
      var time = $('#time').val();
      var suggestedDatetime = date + " " + time + ":00";

      if (dropdownSelection === "suggest_datetime") {
        this.sendAction('action', dropdownSelection, suggestedDatetime, this.get('card-data').id);
      } else {
        this.sendAction('action', dropdownSelection, suggestionText, this.get('card-data').id);  
      }      
    }
  },
});
