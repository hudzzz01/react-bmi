import React from 'react';

const HistoryItem = ({ history, deleteHistoryById }) => {

    const dateHuman = new Date(history.id).toISOString().split('T')[0];


    let imageMaskot = undefined;

    if (history.category == "Obesitas") {
        imageMaskot = <img className='mt-0 mb-2 around' style={{ width: "200px" }} src="/src/assets/olahraga_barbel.svg" alt="gym" />
    } else if (history.category == "Kelebihan Berat Badan") {
        imageMaskot = <img className='mt-0 mb-2 around' style={{ width: "200px" }} src="/src/assets/olahraga_bike.svg" alt="gym" />
    } else if (history.category == "normal") {
        imageMaskot = <img className='mt-0 mb-2 around' style={{ width: "200px" }} src="/src/assets/minum.svg" alt="gym" />
    } else if (history.category == "kurus") {
        imageMaskot = <img className='mt-0 mb-2 around' style={{ width: "200px" }} src="/src/assets/eat.svg" alt="gym" />
    } else {
        imageMaskot = <img className='mt-0 mb-2 around' style={{ width: "200px" }} src="/src/assets/moon_light.svg" alt="gym" />
    }


    return (
        <li className="list-group-item bg-semi-green border-0">
            <div class="card bg-dark-green border-0 shadow mb-0 pb-3 ps-5 pe-3 color-light-green">
                <div class="card-header">
                    {history.id}
                </div>
                <div class="card-body bg-semi-green color-dark-green">
                    <blockquote class="blockquote mb-0">
                        <p> BMI : {history.count}</p>
                        <footer class="blockquote-footer">{history.name}<cite title="Source Title"> ~{dateHuman}</cite></footer>
                    </blockquote>
                    <div className='d-flex justify-content-center align-items-center gap-5'>
                        {imageMaskot}
                        <button className='btn btn-danger' onClick={() => deleteHistoryById(history.id)}>Delete</button>

                    </div>
                </div>
            </div>
        </li>
    );
}

export default HistoryItem;
