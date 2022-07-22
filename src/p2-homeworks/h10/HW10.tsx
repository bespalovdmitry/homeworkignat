import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import Loader from './Loader';
import {useDispatch, useSelector} from 'react-redux';
import {loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import paperStyle from '../../common/styles/Paper.module.css';

function HW10() {
    const loading = useSelector<AppStoreType, boolean>((state) => state.loading.isLoading)
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        // console.log('loading...')
    };
    return (
        <div >
            <hr/>
            homeworks 10
            <div className={paperStyle.paper}>
                {loading ? <Loader /> :
                    <div>
                        <SuperButton def onClick={setLoading}>set loading...</SuperButton>
                    </div>
                }
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
