import React from 'react';
import HistoryItem from './HistoryItem';
import donat from '../assets/donat.svg';

const HistoryBmi = ({ arrHistory, deleteHistoryById }) => {

    const reverse = [...arrHistory].reverse();
    const date = Date.now();


    const imageSrc = donat;

    return (
        <div classNameName=''>
            <div className='d-flex justify-content-center mt-5 bg-dark-green'>

                <div className="card mb-3 bg-semi-green" style={{ width: "50rem" }}>
                    <div className="card-header">
                        History
                    </div>
                    <ul className="list-group list-group-flush">

                        {reverse.length == 0 ? (
                            <div>
                                <h1 className='text-center fs-3 color-dark-green'>Silakan hitung BMI</h1>
                                <img className='mt-5 mb-0 around w-100' src={imageSrc} alt="Donat Maskot" />

                            </div>

                        ) :

                            (

                                reverse.map((history) => (

                                    <HistoryItem history={history} deleteHistoryById={deleteHistoryById} />

                                ))
                            )


                        }


                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HistoryBmi;
