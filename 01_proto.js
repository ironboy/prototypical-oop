/* jshint 
  loopfunc: true,
  trailing: true,
  sub: true,
  expr: true,
  noarg: false,
  forin: false
*/

var create = (function(){

  var classMem = {};

  function createOne(props){
      props._extends = props._extends || props._new;
      delete props._new;
      var obj = Object.create(classMem[props._extends] || {});
      for(var i in props){
        obj[i] = typeof props[i] == "object" ? create(props[i]) : props[i];
      }
      props._class && (classMem[props._class] = obj);
      return obj;
  }

  function create(arrayOfObjects){
    var aoo = arrayOfObjects, a = aoo instanceof Array ? aoo: [aoo];
    var result = a.map(createOne);
    return aoo instanceof Array ? result : result[0];
  }

  return create;

})();