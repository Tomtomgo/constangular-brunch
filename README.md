## constangular-brunch

Reads YAML configuration files, parses them and adds them to your Angular app as a module.

Constangular is environment-dependent so it allows you to have multiple configs for multiple environments.

## Example

**`app/config/api.yaml`**:

```
development:
  base_url: http://localhost:3000/
  api_key: kthxbye

production:
  base_url: http://api.suchurl.co/
  api_key: g5e4rrdy66f6da6fduka
```

``` coffeescript
App = angular.module 'MyApp', ['config.api']

App.constants = {}

App.config ['apiConfig', (apiConfig) ->
  App.constants.api = apiConfig
]
```

You see the pattern there:

* Constangular finds files in app/config/*some_name*.yaml
* Exports their contents as constants named *some_name*Config to an angular module named config.*some_name*