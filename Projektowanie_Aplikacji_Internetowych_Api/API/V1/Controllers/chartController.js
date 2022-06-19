const chartService = require("../Services/chartService");
const getChartData = async (req, res) => {
    const result = await chartService.getChartDataService()
    res.status(200).json(result);
}

const getPlotData = async (req, res) => {
    const result = await chartService.getPlotDataService(req.params.id)
    res.status(200).json(result);
}

module.exports = {
    getChartData,
    getPlotData
}