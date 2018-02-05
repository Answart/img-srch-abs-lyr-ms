'use strict'

// tailored from 'google-images' package
var got = require('got');


class Client {
	constructor(id, apiKey, endPoint) {
		if (!id) { throw new TypeError('Expected a Custom Search Engine ID') };
		if (!apiKey) { throw new TypeError('Expected an API key') };
		if (!endPoint) { throw new TypeError('Expected an End Point') };

		this.endpoint = endPoint;
		this.apiKey = apiKey;
		this.id = id;
	}

	search(query, options) {
		if (!query) { throw new TypeError('Expected a query') };

		const url = `${this.endpoint}/customsearch/v1?`;
    var builtQuery = {
      q: query.replace(/\s/g, '+'),
      searchType: 'image',
      cx: this.id,
      key: this.apiKey
    }
    if (options.page) { builtQuery.start = options.page };

		return got(url, {
      json: true,
      query: builtQuery
    }).then(function(res) {
			const items = res.body.items || [];

			return items.map(function(item) {
        return {
    			url: item.link,
    			snippet: item.snippet,
    			thumbnail: item.image.thumbnailLink,
          context: item.image.contextLink
        }
      })
		});
	}
}


module.exports = Client;
