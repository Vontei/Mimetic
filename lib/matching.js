module.exports =

function (routeDefinitions, verb, path) {
  object = {};
   for(i=0;i<routeDefinitions.length; i++){
   if (routeDefinitions[i].verb === verb && routeDefinitions[i].path === path){
     object.verb = verb;
     object.path = path;
   }
   }
 return object
 }














//
// function(path, verb, url){
//   object = {};
//   for(i=0;i<routeDefinitions.length; i++){
//   if (path.verb === verb){
//     object.verb = path.verb;
//   }
//   if(path.path === url){
//     object.path === path.path;
//   }
//
// return object
// }
// // console.log(matchPath(routeDefinitions, 'get', '/'))
