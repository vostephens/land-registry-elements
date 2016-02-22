var should = require('should');
var webdriverio = require('webdriverio');
var selenium = require('selenium-standalone');
var fs = require('fs');
var path = require('path');

var client = webdriverio.remote({
  logLevel: 'command',
  desiredCapabilities: {
    browserName: 'phantomjs'
  }
});

describe('Clientside validation', function() {

  this.timeout(30000);

  before(function(done){
    selenium.install(
      {
        logger: function (message) {
          console.log(message);
        }
      },
      function (err) {
        if (err) return done(err);

        selenium.start(function() {
          done();
        });
      }
    );

  });


  it('should display a summary of errors when submitting an incomplete form', function(done) {

    client
      .init()
      .url('http://localhost:3000/components/elements/land-registry/clientside-form-validation/demo/')
      .setValue('#full-name', 'WebdriverIO')
      .click('#submit')
      .element('.error-summary')
      .call(done);

      // .screenshot()
      // .then(function(data) {
      //   var binaryData = new Buffer(data.value, 'base64').toString('binary');
      //   fs.writeFileSync(path.join(process.cwd(), '/.tmp/screenshot.png'), binaryData, 'binary');
      // })

  });

  after(function(done) {
    done();
  });

});
