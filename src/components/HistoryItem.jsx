import React from 'react';

const HistoryItem = ({ history,deleteHistoryById }) => {

    const dateHuman = new Date(history.id).toISOString().split('T')[0];


    return (
        <li className="list-group-item bg-light-green">
            <div class="card bg-dark-green color-light-green">
                <div class="card-header">
                    {history.id}
                </div>
                <div class="card-body bg-semi-green color-dark-green">
                    <blockquote class="blockquote mb-0">
                        <p> BMI : {history.count}</p>
                        <footer class="blockquote-footer">{history.name}<cite title="Source Title"> ~{dateHuman}</cite></footer>
                    </blockquote>
                    <button className='btn btn-danger' onClick={()=>deleteHistoryById(history.id)}>Delete</button>
                </div>
            </div>
        </li>
    );
}

export default HistoryItem;
