Bustle.Router.map(function() {
  this.resource('headline', {path: '/'});
  this.resource('vacations', function() {
    this.resource('1');
    this.resource('2');
  });
  this.resource('food');
  this.resource('sports');
});
