/* jshint 
  loopfunc: true,
  trailing: true,
  sub: true,
  expr: true,
  noarg: false,
  forin: false
*/

// Some "classes"

create({
  _class: "Animal",
  alive: true
});

create({
  _class: "Mammal",
  _extends: "Animal",
  _constructor: function(){
    $('body').append('<p>I, ' + this.name + ', was created!</p>');
  },
  name: "Ani Doe",
  warmblooded: true,
  talk: function(){
    return  this.name + " says: I am an animal, I don't talk...";
  }
});

create({
  _class: "Human",
  _extends: "Mammal",
  name: "John Doe",
  pets: [],
  talk: function(x){
    return this.name + " says: " + x;
  }
});