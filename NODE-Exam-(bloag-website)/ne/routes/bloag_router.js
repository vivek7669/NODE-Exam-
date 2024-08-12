const Router = require('express');
const {gettask,posttask,gettaskbyuid} = require('../controller/bloag_controller');

const bloagrouter = Router();

bloagrouter.get('/', gettask);
bloagrouter.get('/:uid', gettaskbyuid);
bloagrouter.post('/', posttask);

module.exports = bloagrouter;