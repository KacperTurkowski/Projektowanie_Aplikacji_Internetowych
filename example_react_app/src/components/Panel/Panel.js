import './Panel.css';
import Repository from "../../Repository";
import {useEffect, useState} from "react";
import AccountButton from "../AccountButton/AccountButton";
import 'reactjs-popup/dist/index.css'
import Popup from "reactjs-popup";
import * as Icon from "react-bootstrap-icons";
const Panel = ()=>{

    const [accounts, setAccounts] = useState([]);
    const [name_, setname_] = useState('');
    const [state_, setstate_] = useState('');

    useEffect(() => {
        Repository
            .getAccounts()
            .then(json => {
                setAccounts(json)
            })
    }, []);

    const addAccount = ()=>{
        Repository.addAccount(name_,state_)
        setname_('');
        setstate_('');
    }
    return (
        <>
            <h1>Account manager</h1>
            {
                accounts.map((account, index)=>(
                    <div key={index}>
                        <br/>
                        <AccountButton account = {account}/>
                    </div>
                ))
            }
            <br/>
            <Popup id="popupContainer" trigger={<button className="buttonAdd" ><Icon.Plus color="white" size="30"></Icon.Plus></button>}>
                <form onSubmit={addAccount}>
                    <br/>
                    name: <input onChange={event => setname_(event.target.value)} id="name_" type="text"/>
                    <br/>
                    state: <input onChange={event => setstate_(event.target.value)} id="state_" type="number"/>
                    <br/>
                    <br/>
                    <button type="submit">Save</button>
                    <br/>
                </form>
            </Popup>
        </>

    )
}
export default Panel;