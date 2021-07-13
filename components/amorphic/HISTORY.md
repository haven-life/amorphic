## 8.2.1
* Replaced realistic hardcoded session secrets in test files with a test string
## 8.2.0
* for safety, stop amorphic from starting up if certain conditions aren't met
## 8.1.1
* upgrade the express-session and cookie-parser module to support the sameSite=None
## 8.1.0
* Adding the ability for amorphic to set the cookie options for cross-origin load
## 8.0.0
* Allowing for passing of a Config Store instead of using the internal config builder
* Will use the new SuperTypeBuilder if one is not provided
## 7.4.0
* Remove Bluebird dependency from frontend client code
## 7.3.0
* Adding ability for amorphic to pass in request and response objects into semotus server calls and adding updates to types
## 7.2.0
* adding access to the response object
## 7.1.3
* Adding unit test for cookies
## 7.1.2
* ensure we don't call logic to send response twice on form parsing error condition
## 7.1.1
* Added bug handling and better errors for uploads
## 7.1.0
* Updating persistor version
## 7.0.1
* Handle null pointer exception when path or file params are undefined.
## 7.0.0
* Adding sync states logic in Semotus, see Semotus for relevant documentation
* Breaking change due to changing the imports in webpack bundles for semotus applications
## 6.0.0
* Updated Knex and Mongo in persistor to latest major versions
* Bringing in all of persistor versions greater than or equal to 4.0.0
## 5.5.0
* send app configs over to persistor for remote document config setup
## 5.4.0
* Default app port to 3000 if not listed
* Security fix to remove istanbul for NYC
* Fixing old type and adding new types for preServerCall
## 5.3.0
* use the os' temporary directory to store downloads instead of project root directory.
* default to knex db connection instead of mongo
## 5.2.0
* Exposing expire session to all entry points that require session in the app
* Adding interfaces / types / documentation for Amorphic App Controller
* Cleaning up some small bugs
## 5.1.0
* Logging Improvements
* Added any level logging from client in an amorphic app to propagate to the server side logs, as long as you specify the 'browser' component.
* Example, from the client: amorphic.logger.info({
            module: 'testModule',
            activity: 'testActivity',
            component: 'browser'
        }, 'Client Side JS LOG from browser');
* Adding request id logging on every amorphic request (outside of processPost)
* Adding a unique request ID generator in client.js for the front end if they want to generate one (generateUID)
* Logs the amorphic, persistor, semotus, and supertype versions at startup
* Adding types for the remote decorator and the properties associated with it
## 5.0.0
* breaking change for daemon applications. server mode config is now only config used to specify run mode.
* deamon apps will need to change config from "isDaemon": true, to "serverMode": "daemon"
* allowing amorphic session apps to set up custom endpoints
* refactor server mode to be the source of truth for server configuration
## 4.6.0
* Using stats client for persistor
* Amorphic will now pull all minor supertype, persistor and semotus changes instead of only bug fixes
## 4.5.0
* Using @havenlife/supertype, @havenlife/semotus, @havenlife/persistor
* refactor inactivity logout functionality.
## 4.4.0
* Add the option to pass in an analytics client into amorphic. Use this
* client to monitor key function response times.
## 4.3.0
* Updated Persistor to 2.11.*
## 4.2.2
* Updated Semotus to 2.5.*
## 4.2.1
* Fixed a bug where front-end changes would be lost if the client received certain status code responses.
## 4.2.0
* Adding possible `serverMode` app level config option for amorphic. This key, if it exists has only one value that can be associated with it, `api`. This marks this application as **daemon exclusively**. This is provided as an **alternative** to the already existing `isDaemon`, and should be adopted for daemon applications going forward.
* Augmented the legacy daemon mode (`isDaemon`) to be able to run both `/amorphic` specific and `/api` specific routes. It is now possible to hit `amorphic/xhr` (and the associated amorphic routes as well) in daemon mode through this paradigm.
* `isDaemon` should be reserved for Legacy applications from now on. It is suggested to use `serverMode: "api"` for daemon specific applications going forward
* It is **not recommended** to use both `serverMode` and `isDaemon` as possible configurations. If both `serverMode` is set to `api` and `isDaemon` is set to true, then amorphic will default to `api`.
* All api routes will be continue to be namespaced by default the `/api` endpoint if `isDaemon` is set to true. If an app is set to `serverMode: "api"`, all routes will be namespaced by default to `/`. In addition, it is possible to specify a namespace value if you would like. Within your app-level config.json add an additional key for `serverOptions` as an object and within that object add an addition key called `apiPath`, with whatever string value necessary. You can see an example of this in the `daemon_only_apiPath` test
* There are future plans to deprecate the `isDaemon` in favor of utilizing only `serverMode`
## 4.1.0
* Adding config for the servers for daemon mode and enabling https server in addition to the http server. Now you can specify express options in the form 'serverOptions' in your app level config. This is used for HTTPS configuration. You need an 'isSecure' flag turned on, an optional 'securePort' flag for the https server (otherwise, will use the default port as per the HTTPS module)
* Also removing the amorphic routes for daemon applications.
* Fixed a bug where in daemon mode would not appropriately read the middlewares / routes in all cases
* Apply sendToLogFunction override to SupertypeSession, for a custom logger propogation
## 4.0.0
* Enabling daemon applications to service their own endpoints.
## 3.1.0
* Updating supertype to 3.1.0, adding a public api to allow customization of supertype's logging functionality
## 3.0.0
* updating persistor module to 2.8.* to pull async API calls change
* this is a BREAKING change, instead of returning Bluebird promises, persistor is returning native promises
## 2.9.0
* Listen now returns a promise and logs when amorphic is finished
## 2.8.2
* updating persistor module to 2.7.*
## 2.8.1
* Updating persistor module to 2.6.*
## 2.8.0
* Upgrade HTTP module from connect to express.
## 2.7.0
* Supertype typescript now supported
## 2.6.0
* environment specific configs are now supported
* "session data not as saved" is now a warning instead of an error
## 2.5.1
* pool parameter for latest knex only allows numbers.
# 2.5.0
* Get latest persistor module with `knex` module upgrade and sensitiveData flag feature.
## 2.4.13
* Added back support of __ver being passed outside clientInit.js.
## 2.4.12
* Get latest persistor module
## 2.4.11
* Added better error logging for config params that are required for amorphic to start.
## 2.4.10
* Pruning unused require's and removing logging of configs during unit tests
## 2.4.9
* Added clientInit.js to allow to remove the dependency for Bindster in Amorphic. See the pull request notes for more details (https://github.com/selsamman/amorphic/pull/55).
## 2.4.8
* Adding application name to the connection for better debugging.
## 2.4.7
* Fixed error logging for checking the application list.
## 2.4.6
* Reverted changes from 2.4.5.
## 2.4.5
* Added convenience types to amorphic.
## 2.4.4
* Added logging and a hard failure when the main application is not in the application list.
## 2.4.3
* Removed reset function from AmorphicContext, which previously was only used for writing tests.
## 2.4.2
* Removed sessionSecret from logs when starting amorphic.
## 2.4.1
* can include dbPort in the configuration.
## 2.4.0
* Change default nconf nested-config delimiter from `:` to `__` in configBuilder
## 2.3.8
* Updated client.js to use bluebird promises and updated the corresponding tests that depend on the Q being on the window.
## 2.3.7
* Added a default sessionSecret for applications running in daemon mode. Changed request body size limit from default to 50kb. It can also be configured by applications as well via app level config.
## 2.3.6
* Upgrade and lock down npm dependancies.
## 2.3.5
* `AmorphicStatic` will expose the `appendSchema` method to allow private modules to include schemas.
## 2.3.4
* Fixed a session leakage problem where users could end up with each other's sessions.
## 2.3.3
* Adding dbConnectionTimeout and knexDebug config settings
## 2.3.2
* Fixed session serialization which sometimes used wrong objectTemplate
## 2.3.1
* Typings for Bindster
* Some missing typings like __dictionary__
## 2.3.0
* Support for TypeScript.
##2.2.1
* Fix to allow hyphens in application names.
##2.2.0
* Fixed blocking issues by using in memory store for task start times
##2.1.1
* Fix to support pass through logging.
## 2.1.0
* Support for lazy template loading.
## 2.0.5
* Reorder middlewears to support new relic.
## 2.0.4
* Fixed forced refresh after an hour problem
## 2.0.3
* Updated dependencies
## 2.0.2
* Retrofitted 1.5 changes for template mixins and static processing in client
## 2.0.1
* Fixed static processing on server
## 2.0.0
* Noop refactor
## 1.5.9
* Fixed order of statics processing
## 1.5.7
* Bump for supertype
* Add guard for appConfig
## 1.5.6
* Include supertype 1.5
* Copy over static members
## 1.5.5
* Make parameters consistent for both processPost cases
* Including 1.5.0 of semotus
## 1.5.4
* Fixed bug in post
## 1.5.3
* Fixed message sequencing and serialization verification
## 1.5.2
* Fixed tests to setup and teardown
## 1.5.1
* Message sequence numbers being out of sync force a reset
* Passing change conflict mode to semoutus
* Warning when serialization may be out of sync
## 1.4.19
* More changes for templateMode: auto
## 1.4.18
* Numerous changes for new template mode after testing with our app
## 1.4.17
* Bump version to get latest semotus which gets latest supertype
## 1.4.16
* Moved client.js functions out of if block
## 1.4.15
* Cherry picked app name with dashes fix
## 1.4.14
* Get 1.4 versions of all modules
## 1.4.12
* Stopped including modules in source if rules dictated they were toClient: false
* Update client.js with the same deferred template processing as we had on the server
## 1.4.11
* Fixed problem with random ordering of extends messing up recusive template processing
## 1.4.8
* default sourceMode to debug
* Add controller application config setting for setting controller.js file name
## 1.4.5
* Produce object.__statics__ even for legacy template mode
## 1.4.4
* Data was being sent to browser even if template file was getTemplated as toClient: false
## 1.4.3
* Added the ability to still support non-supertype return values in templates
## 1.4.1
* First cut at simplified template definition pattern
## 1.3.21
* Adde PR to allow app names with dash and eliminate regexp in app name checking
## 1.3.20
* Revert shrink wrap
## 1.3.19
* Shrink wrap
## 1.3.9
* Cherry picked 1.2.16
## 1.3.8
* Find amorphic-bindster in the root
## 1.3.2
* New bindster
* Fixed browser logging on server to include session
## 1.2.18
* Added extra parameters to getTemplate to allow optimized pattern
## 1.2.16
* Fixed bug where objectMaps were not separated by application
## 1.2.15
* Fixed bug where duplicate ids could be generated
* Added logging context for client logging
## 1.2.14
* Fixed bad dependency
## 1.2.13
* Addeed call to controller.displayError for amorphic errors
## 1.2.11
* Fixed bug where session expiration could cause controller id mismatch if pending calls
## 1.2.1
* Logging
## 1.1.0
* Use new pattern for change tracking
## 1.0.2
* Added module.exports.objectTemplateInitialize function call in controllers to deal with client ordering of templates
## 1.0.1
* Took care of non-database case
* Added timeout default
* Prevent multiple schema updates on sourceMode==prod
* Added full request in call to controller's post method
## 1.0.0-rc.1
* No change
## 1.0.0-beta.8
* Latest versions of persistor and semotus
## 1.0.0-beta.7
* Include updated dependencies
## 1.0.0-beta.1
* Moving to semver convention
* Call to semotus for serialization and garbage collection
* Option to not have source maps prodns
* Default to compressed uglified source
## 0.2.33
* Pre-uglify things for better performance
## 0.2.30
* Use Uglify to compress source when set to production
## 0.2.29
* improved on --sourceMode prod by having two files, one dynaamic and one cached
* Fixed source map mismatch
## 0.2.28
* Added --sourceMode prod option cosolidate model source into a single file
* Added --compressXHR true option to compress XHR responses.
## 0.2.26
* Including alpha client for ionic
## 0.2.25
* Added option to compress session data with zlib (--compressSession)
* All configs included in global config even if application not invoked
## 0.2.24
* Put post session inject before amorphic processing to allow requestion injection
## 0.2.23
* Allow post processing to be asynchronous
## 0.2.22
* Added config.set in sumulated nconf
## 0.2.21
* Added post handling
## 0.2.20
* New config file scheme allows config file settings to be overriddent at the app directory level
## 0.2.16
* set maximum time to block call for semotus
## 0.2.15
* configurable connections with default set to 20
## 0.2.14
* don't mark restored data from session as __changed__
## 0.2.13
* Dependent on Persistor 0.2.68 or higher
* Serializes objectMap on behalf of Persistor
## 0.2.10
* Changed adding persistor properties to use a list passed from Peristor
## 0.2.07
* Changes in support of Postgres in Persistor
## 0.2.06
* Changes in support of Postgres in Persistor
## 0.2.05
* Attempt to destory knex connection on exit
## 0.2.04
* support for dbpassword
## 0.2.03
* Added dbUser, dbType, dbDriver config parameters to both base and application level config.json
## 0.2.01
* Support for transactions
* Support for new semotus/persistor with Postgres databases
## 0.1.89
* Included link to video
* Pull standard amorphic-bindster
## 0.1.88
* Beta version including beta version 0.1.51 of amorphic-bindster for new router functionality
## 0.1.87
* serverInit on controller was not tracking changes
* zombie handling allowed messages to go through
## 0.1.86
* Fixed problem introduced in 1.85
## 0.1.85
* Allow get fetch to be forced by specifying query options
## 0.1.83
* Updated doctor patient sample
* Set zombie status before expiring controller
## 0.1.83
* Updated doctor patient sample
## 0.1.82
* Clear session when we expireController()
## 0.1.81
* Record incoming IP address in objectTemplate.incomingIP
## 0.1.80
* Make config_secure.json override config.json
## 0.1.76
* setConfig was causing leakage of data from secure.json
## 0.1.75
* Don't let undefined values in template returns throw an exception
## 0.1.74
* Don't require referer header to support AWS Cloudfront
## 0.1.73
* Don't expect persistors for non-schema objects
## 0.1.72
* Added objectTemplate.expireSession
## 0.1.71
* Got rid of obsolete code
* Allow {client: false} as the 2nd parameter of getTemplate to prevent transmission to browser
## 0.1.70
* Don't cause refresh if server call didn't make changes
## 0.1.69
* Force version on model files to prevent browser caching issue
## 0.1.68
* Problem in amorphic url for test framework
## 0.1.65
* Corrected problems starting specific applications from command line
* Support for new subdoc handling in persistor
## 0.1.62
* Allow file uploads in iFrames
## 0.1.61
* Zombie detection code now takes into account application name
## 0.1.60
* file upload mechansim now compatible with REDIS
## 0.1.59
* support for file download
## 0.1.54
* queue up messages while being processed by server so stuff goes single file
## 0.1.51
* application parameter in config.json or environment / start parameter must specifiy list of apps to star separated by ;
## 0.1.50
* Use env variables or command parameters dbname and dbpath if app level names and paths are not specified
## 0.1.49
* Don't require subclasses in same collection to be defined in schema
## 0.1.48
* File upload handling was broken
## 0.1.47
* Changes to be compatible with new persistor sub-document handling
## 0.1.46
* Changes to be compatible with new convention for schemas and collections
## 0.1.44
* Allow other requests to be injected
## 0.1.43
* Allow supertype and semotus to be installed in root of project without messing up client paths
## 0.1.42
* Changed path for xhr calls to /amorphic/xhr?path= to make it easier to map
## 0.1.40
* Added support for daemons (batch tasks)
## 0.1.38
* fixed problem referencing static assets for other than the default application
## 0.1.37
* schema.js and config.js can now be in /app/common
* fixed another issues with multiple applications
## 0.1.35
* Multiple applications had some path issues
## 0.1.35
* You can now place common template files in /app/common/js
## 0.1.33
* Include new dependencies
## 0.1.31
* Include model files as document.writes of the script files since source mapping would otherwise not be available
## 0.1.30
* Tests were not running because securityContext injected in supertype rather than peristor
## 0.1.28
* Corrected a problem when controllers are created on the server model was not being passed to client
## 0.1.27
* Include proper path for modules
* Fixed incorrect file upload handling
* Include controller and it's dependency automatically for the browser
Note:  You must remove any script statements to include the model as they are included automatically no
       when you include /amorphic/init
