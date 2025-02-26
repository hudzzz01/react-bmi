import React from 'react';
import HistoryItem from './HistoryItem';

const HistoryBmi = ({arrHistory,deleteHistoryById}) => {

    
    return (
        <div classNameName=''>
            <div className='d-flex justify-content-center mt-5 bg-dark-green'>

                <div className="card mb-3 bg-semi-green" style={{ width: "50rem" }}>
                    <div className="card-header">
                        History
                    </div>
                    <ul className="list-group list-group-flush">
                       {arrHistory.map((history)=>(
                            
                         <HistoryItem history={history}/>

                       ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HistoryBmi;
