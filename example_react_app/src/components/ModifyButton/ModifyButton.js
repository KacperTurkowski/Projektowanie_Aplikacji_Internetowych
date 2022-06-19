import './ModifyButton.css';
import Popup from "reactjs-popup";
import {useEffect, useState} from "react";
import Repository from "../../Repository";
import * as Icon from "react-bootstrap-icons";

const ModifyButton = (props)=>{
    const{
        state,
        id
    } = props;

    const [state_, setstate_] = useState('');

    const changeState = (event)=>{
        event.stopPropagation()
        Repository.changeState(id,state_)
        setstate_('');
    }
    return (
        <>
            <Popup trigger={<button className="trash"><Icon.Gear size="30" color="white"></Icon.Gear></button>}>
                <form onSubmit={changeState}>
                    <br/>
                    state: <input onChange={event => setstate_(event.target.value)} id="state_" type="number"/>
                    <br/>
                    <br/>
                    <button type="submit" onClick={changeState}>Save</button>
                    <br/>
                </form>
            </Popup>
        </>
    )
}

export default ModifyButton;