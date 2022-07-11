import React from 'react'
import {Box, Slider} from '@mui/material';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: Array<number>) => void
    value?: Array<number>

}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        // min, max, step, disable, ...
    }
) => {

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                value={value}
                onChange={(event, value) => {
                    if(Array.isArray(value) && onChangeRange){
                        onChangeRange(value)
                    }
                }}
                valueLabelDisplay="auto"
            />
        </Box>
    )
}

export default SuperDoubleRange
