import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'

export const AddNewFab = () => {
    const dispatch = useDispatch();

    return (
        <button className='btn fab btn-primary' onClick={() => dispatch(uiOpenModal())}>
            <i className='fas fa-plus'></i>
        </button >
    )
}
