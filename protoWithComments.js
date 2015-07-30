/*

# JavaScript prototypical inheritance
  
JavaScript has prototypical inheritance
so there is no real difference in extending
something or creating a new instance


## No new keyword necessary

The new keyword may have tricked you into
believing JS is class based, 
but it is really more of a sweetener
for aligning JS with class based languages.

Thus we will avoid it here and use
Object.create  instead - to show you there is
no real difference between a "template/class" 
and an object instance in JS


### Object.create (prototypeObject)

Returns a new object with the prototype object
as its prototype.

Object.create creates a new object
based on an old one - that will
become its prototype. Thuse it unlocks
the basis of prototypical inheritance.

*/

/* jshint 
  loopfunc: true,
  trailing: true,
  sub: true,
  expr: true,
  noarg: false,
  forin: false
*/

/* jshint 
  loopfunc: true,
  trailing: true,
  sub: true,
  expr: true,
  noarg: false,
  forin: false
*/

var create = (function(){

  // A memory for "classes" - objects we want to reuse as templates
  var classMem = {};

  // Create lets us create an object with another object as its prototype
  function createOne(props){
      // If there is a property "_new" use it as an alias for "_extends"
      props._extends = props._extends || props._new;
      delete props._new;
      // Create a new object with an object from classMem as its prototype
      // - read the property "_extends" to select the correct prototype
      var obj = Object.create(classMem[props._extends] || {});
      // Loop through all  properties, if there are sub-objects or arrays
      // send them to create too - via multiCreate
      for(var i in props){
        obj[i] = typeof props[i] == "object" ? create(props[i]) : props[i];
      }
      // If the property "_class" is set theen store the object to classMem
      props._class && (classMem[props._class] = obj);
      return obj;
  }

  // Create several object instances at once from an array of objects/properties
  // return an object if the input was an object, otherwise an array
  function create(arrayOfObjects){
    var aoo = arrayOfObjects, a = aoo instanceof Array ? aoo: [aoo];
    var result = a.map(createOne);
    return aoo instanceof Array ? result : result[0];
  }

  return create;

})();
