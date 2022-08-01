import React, {useState} from 'react';
import paper from '../../common/styles/Paper.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {herokuAPI} from "./api/herokuapp-api";


function HW13() {
    const [checked, setChecked] = useState(false)
    const onClickPost = () => {
        herokuAPI.authHeroku(checked)
    }
    const onChangeCheckbox = (checked: boolean) => {
        setChecked(checked)
    }
    return (
    <div >
        <hr/>
        homeworks 13
        <div className={paper.paper}>
            <SuperCheckbox
                onChangeChecked={onChangeCheckbox}
            />
            <SuperButton def onClick={onClickPost}>AUTH</SuperButton>
        </div>
        <hr/>
    </div>
    )
}

export default HW13;
