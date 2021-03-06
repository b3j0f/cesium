/******
* !! WARNING: This is a generated file !!
*
* PLEASE DO NOT MODIFY DIRECTLY
*
* => Changes should be done on file 'app/config.json'.
******/

angular.module("cesium.config", [])

.constant("csConfig", {
	"cacheTimeMs": 60000,
	"fallbackLanguage": "en",
	"rememberMe": false,
	"showUDHistory": false,
	"timeout": 10000,
	"timeWarningExpireMembership": 5184000,
	"timeWarningExpire": 7776000,
	"useLocalStorage": true,
	"useRelative": true,
	"initPhase": false,
	"expertMode": false,
	"decimalCount": 4,
	"httpsMode": false,
	"helptip": {
		"enable": false,
		"installDocUrl": "https://github.com/duniter/duniter/blob/master/doc/install-a-node.md"
	},
	"node": {
		"host": "gtest.duniter.org",
		"port": "10900"
	},
	"plugins": {
		"es": {
			"enable": true,
			"askEnable": false,
			"host": "localhost",
			"port": "9200",
			"notifications": {
				"txSent": true,
				"txReceived": true,
				"certSent": true,
				"certReceived": true
			}
		}
	},
	"version": "0.10.2",
	"build": "2017-03-01T17:14:05.154Z",
	"newIssueUrl": "https://github.com/duniter/cesium/issues/new?labels=bug"
})

;
