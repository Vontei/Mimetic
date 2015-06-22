module.exports = function (query) {
  var object = {}
  if(query === null){
    return {};
  };

  query = query.replace('?', '');
  subQuery = query.split('&');
  for (i=0; i<subQuery.length; i++){
    var key = subQuery[i].split('=')[0];
    var value = subQuery[i].split('=')[1];
    object[key] = value;
  }
    return object
}
