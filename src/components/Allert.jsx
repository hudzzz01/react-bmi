import React from 'react';

const Allert = ({ message }) => {
    return (

        <div class="alert alert-danger d-flex align-items-center" role="alert">
            <div className='d-flex gap-2'>
             <i class="bi bi-megaphone-fill"></i> <p> Pemberitahuan :  {message}</p>
            </div>
        </div>

    );
}

export default Allert;
