const SearchHistory = require('../models/SearchHistory');


function find(query, cb) {
  SearchHistory.find(query).exec(function(err, results) {
    if (err) { return cb(err) };

    if (results && results.length > 0) {
      var jsonedDocs = results.map(function(doc) {
        return doc.toJSON();
      })
      return cb(null, jsonedDocs);
    } else {
      return cb(null, []);
    }
  })
}


module.exports = {
  find: find
};
