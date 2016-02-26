var tgz = require('express-tgz');
var build = require('../build');

module.exports = function(app){

  /**
   * Download a tarball of the built out assets
   */
  app.get('/build', function(req, res){
    build({
      cache: false,
      components: {
        'Land Registry': true
      }
    })
      .then(function(directory) {
        res.tgz(directory, 'land-registry-elements.tar.gz', false);
      })
      .catch(function(er) {
        console.error(er);
      });
  });
}
