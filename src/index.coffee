yaml = require 'js-yaml'
sysPath = require 'path'

module.exports = class Constangular
  brunchPlugin: yes
  type: 'javascript'
  pattern: /config[\/\\].*\.yaml$/

  constructor: (@config) ->
    true

  compile: (data, path, callback) ->
    try
      # Check in which environment we are, fallback to 'development'
      environment = if @config.env.length > 0 then @config.env[0] else 'development'
      
      # Parse the YAML file
      data = yaml.load(data)
      
      # Check if this env is decribe in the YAML
      if environment of data
        my_name = sysPath.basename(path, sysPath.extname(path))
        result = "angular.module('config.#{my_name}',[]).constant('#{my_name}Config', #{JSON.stringify(data[environment])})"
        
    catch err
      error = err
    finally
      callback error, result
