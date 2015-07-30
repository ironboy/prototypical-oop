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

// Create several new instances from some JSON
// (a couple of humans, and a mammal)

var instances;

// Load the JSON
$.ajax({url: "04_things.json", dataType: "json", success: classify});

// Type cast the JSON as objects of the correct "class"/type
// thus inheriting methods and extra properties
function classify(data){
  instances = create(data);
  test();
}

// Test that our mammals and humans can talk
// (and that even subobjects have been type casted)
function test(){
  function talkTest(x){
     x.talk && $('body').append('<p>' + x.talk("I was created from JSON!") + '</p>');
  }
  instances.concat([instances[1].pets[0]]).forEach(talkTest);
}