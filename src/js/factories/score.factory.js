angular
  .module('GoGenki')
  .factory('Score', scoreFactory);

scoreFactory.$inject = ['API', '$resource'];
function scoreFactory(API, $resource){
  return $resource(`${API}/scores/:id`, { id: '@_id'}, {'update': {method: 'PUT'}});
}
