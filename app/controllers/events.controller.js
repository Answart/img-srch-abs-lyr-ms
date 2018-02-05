const history        = require('../helpers/search-history.helper');


function showSearchHistory(req, res) {
  var query = req.params.term;
  var searchQuery = query ? {term: query} : {};

  history.find(searchQuery, (err, docs) => {
    if (err) {
      req.flash('errors', err);

      res.render('pages/home', {
        errors: req.flash('errors')
      });
    } else {
      res.json();
    }
  })
}


module.exports = {
  showSearchHistory: showSearchHistory
};
