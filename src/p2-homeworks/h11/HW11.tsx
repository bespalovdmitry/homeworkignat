import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import paperStyle from '../../common/styles/Paper.module.css';

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value: Array<number>) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div
                className={paperStyle.paper}
                style={{paddingTop: '35px'}}
            >
                <div>
                    <SuperRange
                        onChangeRange1={setValue1}
                        value={value1}
                    />
                </div>

                <div>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={onChangeRange}
                    />
                </div>
            </div>


            <hr/>
            <hr/>
        </div>
    )
}

export default HW11
