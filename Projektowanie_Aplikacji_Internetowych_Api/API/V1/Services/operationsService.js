const operationsDal = require('../DAL/operationsDal')

const getOperationsForAccountService = async (accountId)=>{
    let operation = await operationsDal.getOperationsForAccount(accountId);
    operation.forEach(element => element.InsertDate = mapDate(element.InsertDate));
    return operation;
}
const getOperationsService = async ()=>{
    let operation = await operationsDal.getOperations();

    operation.forEach(element => element.InsertDate = mapDate(element.InsertDate));
    return operation;
}
const getOperationService = async (id)=>{
    let operation = await operationsDal.getOperation(id);
    operation.forEach(element => element.InsertDate = mapDate(element.InsertDate));
    return operation;
}
const addOperationService = (name, sum, accountId)=>{
    return operationsDal.addOperation(name, sum, accountId);
}
const removeOperationService = (id)=>{
    return operationsDal.removeOperation(id);
}
const mapDate = (date)=>{
    var temp = new Date(date);
    return temp.getDate()+"."+(temp.getMonth()+1)+"."+temp.getUTCFullYear()+" "+temp.getHours()+":"+temp.getMinutes();
}


module.exports = {
    getOperationsForAccountService,
    getOperationsService,
    addOperationService,
    removeOperationService,
    getOperationService
}