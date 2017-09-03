angular
  .module('GoGenki')
  .factory('Test', testFactory);

testFactory.$inject = ['API', '$resource'];
function testFactory(API, $resource){
  return $resource(`${API}/tests/:id`, { id: '@_id'}, {'update': {method: 'PUT'}});
}
