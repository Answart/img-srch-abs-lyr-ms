const mongoose = require('mongoose'),
  Schema = mongoose.Schema;


const searchHistorySchema = new Schema({
  term: String,
  when: String
}, {
  toJSON: {
    transform: function (doc, ret, options) {
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

const searchHistoryModel = mongoose.model('SearchHistory', searchHistorySchema);

// middleware -----
// make sure that short_url is created from original_url
searchHistorySchema.pre('save', function(next) {
  this.when = new Date().toISOString();
  next();
});


module.exports = searchHistoryModel;
