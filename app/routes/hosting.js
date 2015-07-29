import AuthRoute from './auth-route';

export default AuthRoute.extend({
  model: function() {
    // return [
    //   {
    //     name: 'Event 1',
    //     date: '20/5/2015',
    //     venue: 'Plaza Singapura'
    //   },
    //   {
    //     name: 'Event 2',
    //     date: '20/6/2015',
    //     venue: 'Causeway Point',
    //   },
    //   {
    //     name: 'Event 3',
    //     date: '3/7/2015',
    //     venue: 'NUS School of Computing'
    //   }
    // ];
    // Ember.$.getJSON('http://localhost:3000/api/v1/user/events');

    Ember.$.ajax({
      url: 'http://localhost:3000/api/v1/user/events',
      type: 'GET',
      headers: { 
        "authorization": "Token token='zFv7vEy55ZD7cnbos1wV', username='tester1'",
        "Access-Control-Allow-Origin" : "localhost:3000",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      }
    })
    
    // var jqxhr = Ember.$.ajax({
    //   type: "GET",
    //   url: 'http://localhost:3000/api/v1/user/events',
    //   beforeSend: function(xhr) {
    //     xhr.setRequestHeader("Authorization", "Token token='zFv7vEy55ZD7cnbos1wV',  username='tester1'");
    //   }
    // });

    // var form = new FormData();
    // form.append("user[username]", "tester1");
    // form.append("user[password]", "12345678");

    // var settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "http://localhost:3000/api/v1/user/events",
    //   "method": "GET",
    //   "headers": {
    //     "authorization": "Token token=\"zFv7vEy55ZD7cnbos1wV\",  username=\"tester1\""
    //   },
    //   "processData": false,
    //   "contentType": false,
    //   "mimeType": "multipart/form-data",
    //   "data": form
    // }

    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    // });
    }
});
