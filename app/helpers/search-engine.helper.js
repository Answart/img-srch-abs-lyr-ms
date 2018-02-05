'use strict';

const searchEngineAPI = require('../api/googleCustomSearchEngineApi');

var searchEngine = new searchEngineAPI(process.env.GGL_SRCH_ENGN_ID, process.env.GGL_SRCH_ENGN_API_KEY, "https://www.googleapis.com");


module.exports = {
  search: function(term, offset, cb) {
    searchEngine.search(term, {
      page: offset
    })
    .then(function(images) {
      /*
      [{
        url	"http://www.petmd.com/sites/default/files/hypoallergenic-cat-breeds.jpg"
        snippet	"Hypoallergenic Cat Breeds | petMD"
        thumbnail	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgib94RrBKnIivze_0ufKueSPfPTCV0jeazQlkTdbWges2Z64k_K02Puo"
        context	"https://www.petmd.com/cat/wellness/evr_ct_hypoallergenic_cat_breeds"
      }]
       */
      return cb(null, images);
    })
  }

};
