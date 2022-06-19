import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Repository from "../../Repository";
import Operation from "../Operation/Operation";
import Popup from "reactjs-popup";
import "./DetailsPage.css"
import * as Icon from 'react-bootstrap-icons';
import {useNavigate} from "react-router-dom"

const DetailsPage = ()=>{
    const {id} = useParams()
    const navigate = useNavigate();

    const [operations, setOperations] = useState([]);
    const [name_, setname_] = useState('');
    const [sum_, setsum_] = useState('');
    const [account, setAccount] = useState('');

    useEffect(() => {
        Repository
            .getOperationsForAccount(id)
            .then(json => {
                setOperations(json)
            })
    }, []);

    useEffect(() => {
        Repository
            .getAccount(id)
            .then(json => {
                setAccount(json)
            })
    }, []);

    const addOperation = ()=>{
        Repository.addOperation(name_, sum_, id)
        setname_('');
        setsum_('');
    }
    const goHome = ()=>{
        navigate("/")
    }


    const header = {}
    header.Name = "NAME"
    header.SUM = "SUM";
    header.InsertDate = "DATE"
    console.log(account)

    return (
        <>
            <button className="home" onClick={goHome}><Icon.House size="30" color="white"></Icon.House></button>
            <h1>Operations for account: {account.Name}</h1>
            <div className="div">
                <label className="columnHeader">NAME</label>
                <label className="columnHeader">SUM</label>
                <label className="columnHeader">DATE</label>
                <label className="delete"></label>
            </div>
            {
                operations.map((operation, index)=>(
                    <div key={index}>
                        <br/>
                        <Operation operation = {operation}/>
                    </div>
                ))
            }

            <br/>
            <Popup id="popupContainer" trigger={<button className="add" ><Icon.Plus color="white" size="30"></Icon.Plus></button>}>
                <form onSubmit={addOperation}>
                    <br/>
                    name: <input onChange={event => setname_(event.target.value)} id="name_" type="text"/>
                    <br/>
                    sum: <input onChange={event => setsum_(event.target.value)} id="state_" type="number"/>
                    <br/>
                    <br/>
                    <button type="submit">Save</button>
                    <br/>
                </form>
            </Popup>
            <div className="accountState">
                <label className="label">
                    Account state: {account.State}
                </label>
            </div>

        </>
    )
}

export default DetailsPage;