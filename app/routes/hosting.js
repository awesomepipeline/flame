import AuthRoute from './auth-route';

export default AuthRoute.extend({
  model: function() {
    return [
      {
        name: 'Event 1',
        date: '20/5/2015',
        venue: 'Plaza Singapura'
      },
      {
        name: 'Event 2',
        date: '20/6/2015',
        venue: 'Causeway Point',
      },
      {
        name: 'Event 3',
        date: '3/7/2015',
        venue: 'NUS School of Computing'
      }
    ];
  }
});
