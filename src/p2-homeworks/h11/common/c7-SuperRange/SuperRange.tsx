import React from 'react'
import {Box, Slider} from '@mui/material';

type SuperRangePropsType = {
    onChangeRange1: (value: number) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        onChangeRange1,value
    }
) => {

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                value={value}
                onChange={(event, value) => {
                    if (typeof value === 'number' && onChangeRange1) {
                        onChangeRange1(value)
                    }
                }}
                valueLabelDisplay="auto"
            />
        </Box>
    )
}

export default SuperRange
