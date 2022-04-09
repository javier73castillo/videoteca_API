const Video = require('./videos.model');

const getAll = async (req, res, next) => {
    try {
        
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (error) {
        return next(error)
    }
}

const getOne = async (req, res, next) => {
    try {
        
        const { id } = req.params;
        const video = await Video.findById(id);
        res.status(200).json(video);
    } catch (error) {
        return next(error)
    }
}

const postOne = async (req, res, next) => {
    try {
    
        const video = new Video();
        video.title = req.body.title;
        video.category = req.body.category;
        video.description = req.body.description;
        video.url = req.body.url;
        const videoDB = await video.save();
        return res.status(201).json(videoDB)
    } catch (error) {
        return next(error)
    }
}

const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const video = new Video(req.body);
        video._id = id;
        const updateVideo = await Video.findByIdAndUpdate(id, video);
        return res.status(200).json(updateVideo);
    } catch (error) {
        return next(error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const video = await Video.findByIdAndDelete(id);
        return res.status(200).json(video);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}