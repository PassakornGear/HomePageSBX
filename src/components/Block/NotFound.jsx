/* eslint-disable no-unused-vars */
import React from 'react';
import './css/NotFound.css'

export default function notFound(notfoundList) {

    return (
        <>
            <div className='notfound'>
                <small className='h6'>{notfoundList.data.wording} <a className='btn btn-link' href={`${notfoundList.data.hostname}/app/me/plans`} target='blank'><u>Click Go to plan.</u></a></small>
            </div>
        </>
    )
}