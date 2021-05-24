import React from 'react'
import { useDispatch } from 'react-redux'
import { eventDeleted } from '../../actions/events'

export const DeleteEventFab = () => {
    const dispatch = useDispatch();

    return (
        <button className={`btn fab-danger btn-danger`} onClick={() => dispatch(eventDeleted())}>
            <i className='fas fa-trash'></i>
        </button >
    )
}
