const Router = require('express');
const {gettask,posttask,gettaskbyuid} = require('../controller/task_controller');

const taskrouter = Router();

taskrouter.get('/', gettask);
taskrouter.get('/:uid', gettaskbyuid);
taskrouter.post('/', posttask);

module.exports = taskrouter;