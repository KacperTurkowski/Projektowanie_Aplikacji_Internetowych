const getAccounts = async ()=>{
    const url = "http://localhost:3000/accounts";
    const response = await fetch(url,{
        headers: {'Content-Type' : 'application/json'}
    });
    return response.json();
}
const addAccount = async (name, state)=>{
    const url = "http://localhost:3000/accounts";
    let temp = {}
    temp.name = name;
    temp.sum = state;
    const response = await fetch(url,{
        method: 'PUT',
        body: JSON.stringify(temp),
        headers: {'Content-Type' : 'application/json'}
    });
    return response.json();
}
const deleteAccount = async (id)=>{
    const url = "http://localhost:3000/accounts";
    let temp = {}
    temp.id = id;
    const response = await fetch(url,{
        method: 'DELETE',
        body: JSON.stringify(temp),
        headers: {'Content-Type' : 'application/json'}
    });
    return response.json();
}
const changeState = async (id, difference)=>{
    const url = "http://localhost:3000/accounts";
    let temp = {}
    temp.id = id;
    temp.difference = difference;
    const response = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(temp),
        headers: {'Content-Type' : 'application/json'}
    });
    return response.json();
}

const getOperations = async ()=>{
    const url = "http://localhost:3000/operations";
    const response = await fetch(url,{
        headers: {'Content-Type' : 'application/json'}
    });
    return response.json();
}
const deleteOperation = async (id)=>{
    const url = "http://localhost:3000/operations";
    let temp = {}
    temp.id = id;
    const response = await fetch(url,{
        method: 'DELETE',
        body: JSON.stringify(temp),
        headers: {'Content-Type' : 'application/json'}
    });
    return response.json();
}
const addOperation = async (name, sum, accountId)=>{
    const url = "http://localhost:3000/operations";
    let temp = {}
    temp.name = name;
    temp.sum = sum;
    temp.accountId = accountId;
    const response = await fetch(url,{
        method: 'PUT',
        body: JSON.stringify(temp),
        headers: {'Content-Type' : 'application/json'}
    });
    return response.json();
}
const getOperationsForAccount = async (id)=>{
    const url = "http://localhost:3000/operations/"+id;
    const response = await fetch(url,{
        headers: {'Content-Type' : 'application/json'}
    });
    return response.json();
}

const getAccount = async (id)=>{
    const url = "http://localhost:3000/accounts/"+id;
    const response = await fetch(url,{
        headers: {'Content-Type' : 'application/json'}
    });
    return response.json();
}

module.exports = {
    getAccounts,
    addAccount,
    deleteAccount,
    changeState,
    getOperations,
    deleteOperation,
    addOperation,
    getOperationsForAccount,
    getAccount
}