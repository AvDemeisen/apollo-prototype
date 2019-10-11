const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: String,
    genre: String,
    release: Number,
    artistId: String
});

module.exports = mongoose.model('Album', albumSchema);