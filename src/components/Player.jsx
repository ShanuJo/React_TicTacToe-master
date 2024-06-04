import { useState } from "react"

export default function Player({name, symbol, isActive, onChangeName}) {
    let [isEditing, setIsEditing] = useState(false);
    let [pName, setPName] = useState(name)

     function clickHandle() {
        setIsEditing((editing)=>!editing);

        if(isEditing){
            onChangeName(symbol, pName);
        }
     }
     function handleChange(event){
        setPName(event.target.value);
     }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
           {!isEditing && <span className="player-name">{pName}</span>}
           {isEditing && <input required value={pName} onChange={handleChange}/>}
            <span className="players-symbol">{symbol}</span>
            </span>
            <button onClick={clickHandle}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}