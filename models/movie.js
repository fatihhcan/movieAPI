const mognoose = require('mongoose');
const Schema = mognoose.Schema;

const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    category: String,
    country: String,
    year: Number,
    imdb_score: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('moview', MovieSchema); // EXPORT