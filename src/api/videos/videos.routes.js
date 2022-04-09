const VideosRoutes = require('express').Router();
const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
} = require('./videos.controller');

VideosRoutes.get('/', getAll);
VideosRoutes.get('/:id', getOne);
VideosRoutes.post('/', postOne);
VideosRoutes.patch('/:id', patchOne);
VideosRoutes.delete('/:id', deleteOne);

module.exports = VideosRoutes;