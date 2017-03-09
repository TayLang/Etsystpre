 
/*********VIEW******/
var setHomePage = function() {
	var containerNode = document.querySelector('.pageContent')
	var html = ''
		html += '<p>White and Nerdy</p>'
		containerNode.innerHTML = html
}

/*********MODELS*********/

var EtsyCollection = Backbone.Collection.extend({
	url: 'https://openapi.etsy.com/v2/listings/active.js',
	parse: function(apiResponse){
		console.log(apiResponse)
		return apiResponse.response.docs
	}
})

/*****CONTROLLER******/
var EtsyRouter = Backbone.Router.extend({
	routes: {
		"home" : "showHomePage",
		"search/:query" : "showSearches",
		"detail/:articleID" : "showDetailPage"
	},
	showHomePage: function() {
		setHomePage()			
		var collectionInstance = new EtsyCollection()
			collectionInstance.fetch({
				dataType: 'jsonp',
				data: {
					'api_key': 'ryiipkgu60qm2e2793lny6yz',
					includes: 'Images'
				}

			})
			new setHomePage({
					collection: collectionInstance
				})
	},
	showSearches: function(query) {
		//i shall return
		var collectionInstance = new EtsyCollection()
		//****BELOW IS HIJACKED NYTIMES SCRIPT EXCEPT FOR THE KEY. THE KEY IS ETSY KEY.********
		// collectionInstance.fetch({
		// 	data: {
		// 		q: query,
		// 		'api-key': 'ryiipkgu60qm2e2793lny6yz'
		// 	}
		// })
	},
	// showDetailPage: function(itemID) {
	// 	var modelInstance = new EtsyModel()
	// 	modelInstance.fetch({
	// 		//i shall return
	// 	})
	// }
})

var instance = new EtsyRouter()
Backbone.history.start()