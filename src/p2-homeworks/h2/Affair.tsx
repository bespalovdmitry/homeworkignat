import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div style={{
            display: 'grid',
            marginBottom: '1em',
            justifyContent: 'space-evenly',
            gridTemplateRows: '1fr',
            gridTemplateColumns: '30% 40% 30%'
        }}>
            <button className={s.glow_on_hover} onClick={deleteCallback}>Delete</button>
            <div className={s.affairText} style={{width: '100px'}}>{props.affair.name}</div>
            <div>
                {props.affair.priority}
            </div>
        </div>
    )
}

export default Affair
