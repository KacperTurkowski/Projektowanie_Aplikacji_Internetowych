const express = require('express');
const router = express.Router();
const chartController = require('../Controllers/chartController')

router.get('/', chartController.getChartData);
router.get('/:id', chartController.getPlotData);

module.exports = router;
