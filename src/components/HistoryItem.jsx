import React from 'react';

const HistoryItem = ({ history }) => {

    const dateHuman = new Date(history.id).toISOString().split('T')[0];


    return (
        <li className="list-group-item bg-light-green">
            <div class="card bg-dark-green">
                <div class="card-header">
                    {history.id}
                </div>
                <div class="card-body bg-light-green">
                    <blockquote class="blockquote mb-0">
                        <p>{history.count}</p>
                        <footer class="blockquote-footer">{history.name}<cite title="Source Title"> ~{dateHuman}</cite></footer>
                    </blockquote>
                </div>
            </div>
        </li>
    );
}

export default HistoryItem;
