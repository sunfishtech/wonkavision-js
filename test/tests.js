module('General');

test('it should pass test', function () {
  var obj = new Wonkavision('John Doe');
  equal('Mr. John Doe', obj.title())
});