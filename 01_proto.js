/* jshint 
  loopfunc: true,
  trailing: true,
  sub: true,
  expr: true,
  noarg: false,
  forin: false
*/

(function(){

  var classMem = {};

  function create(props){
      props._extends = props._extends || props._new;
      delete props._new;
      var obj = Object.create(classMem[props._extends] || {});
      for(var i in props){
        obj[i] = typeof props[i] == "object" ? multiCreate(props[i]) : props[i];
      }
      props._class && (classMem[props._class] = obj);
      return obj;
  }

  function multiCreate(arrayOfObjects){
    var aoo = arrayOfObjects, a = aoo instanceof Array ? aoo: [aoo];
    var result = a.map(create);
    return aoo instanceof Array ? result : result[0];
  }

  window.create = multiCreate;

})();