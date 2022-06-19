const accountsDal = require("../DAL/accountsDal");
const operationsDal = require("../DAL/operationsDal");
const {getOperationsService} = require("./operationsService");

const getChartDataService = async ()=>{
    var accounts = await accountsDal.getAccounts();
    let X = []
    let Y = []
    accounts.forEach(element=>{
        X.push(element.Name)
        Y.push(element.State)
    })
    const result = {}
    result.X = X;
    result.Y = Y;
    return result;
}

const getPlotDataService = async (accountId)=>{
    let operation = await operationsDal.getOperationsForAccount(accountId);
    var account = await accountsDal.getAccount(accountId);

    operation.sort(compare);
    let currentState = account[0].State;

    let X = [mapDate(Date.now())]
    let Y = [currentState]
    operation.forEach(element=>{
        X.push(mapDate(element.InsertDate))
        currentState = currentState - element.SUM
        Y.push(currentState)
    })

    const result = {}
    result.X = X.reverse();
    result.Y = Y.reverse();
    return result;
}

const mapDate = (date)=>{
    var temp = new Date(date);
    return temp.getDate()+"."+(temp.getMonth()+1)+"."+temp.getUTCFullYear()+" "+temp.getHours()+":"+temp.getMinutes();
}

function compare( a, b ) {
    if ( a.InsertDate < b.InsertDate ){
        return 1;
    }
    if ( a.InsertDate > b.InsertDate ){
        return -1;
    }
    return 0;
}

module.exports = {
    getChartDataService,
    getPlotDataService
}