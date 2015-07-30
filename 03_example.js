/* jshint 
  loopfunc: true,
  trailing: true,
  sub: true,
  expr: true,
  noarg: false,
  forin: false
*/

// Create a new Human

var Jessica = create({
  _new: "Human",
  name: "Jessica"
});

$('body').append('<p>' + Jessica.talk("I was created in JavaScript!") + '</p>');
