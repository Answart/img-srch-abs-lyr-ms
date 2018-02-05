const history        = require('../helpers/search-history.helper');


function showImagesByTerm(req, res) {
  var term = req.params.term;

  function returnHome(err) {
    req.flash('errors', err);
    res.render('pages/home', {
      errors: req.flash('errors')
    });
  }
  if (!term) {
    returnHome('Please include a query to search for.');
  };

  history.create(term, (err, doc) => {
    if (err) {
      returnHome(err);
    } else {
      res.json({});
    }
  })
}

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
  showImagesByTerm: showImagesByTerm,
  showSearchHistory: showSearchHistory
};
