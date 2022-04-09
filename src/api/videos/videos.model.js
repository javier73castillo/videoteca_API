
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  
    {
        title: { type: String, required: false, trim: true },
        category: { type: String, required: false, trim: true },
        description: { type: String, required: false, trim: true},
        url: { type: String, required: false, trim: true }
    },
    
    {
        timestamps: true
    }
);

const Video = mongoose.model('videos', videoSchema);

module.exports = Video;