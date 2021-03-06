// Generated by CoffeeScript 1.8.0
(function() {
  var Constangular, sysPath, yaml;

  yaml = require('js-yaml');

  sysPath = require('path');

  module.exports = Constangular = (function() {
    Constangular.prototype.brunchPlugin = true;

    Constangular.prototype.type = 'javascript';

    Constangular.prototype.pattern = /config[\/\\].*\.yaml$/;

    function Constangular(config) {
      this.config = config;
      true;
    }

    Constangular.prototype.compile = function(data, path, callback) {
      var environment, err, error, my_name, result;
      try {
        environment = this.config.env.length > 0 ? this.config.env[0] : 'development';
        data = yaml.load(data);
        if (environment in data) {
          my_name = sysPath.basename(path, sysPath.extname(path));
          return result = "angular.module('config." + my_name + "',[]).constant('" + my_name + "Config', " + (JSON.stringify(data[environment])) + ")";
        }
      } catch (_error) {
        err = _error;
        return error = err;
      } finally {
        callback(error, result);
      }
    };

    return Constangular;

  })();

}).call(this);
