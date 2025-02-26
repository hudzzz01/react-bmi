import React, { useState } from 'react';
import InputFormCalculator from './InputFormCalculator';
import HasilBmi from './HasilBmi';
import HistoryBmi from './HistoryBmi';

const Calculator = () => {
    const [bmiObj,setBmiObj] = useState({
        name : "",
        count : 0,
        category : null,
        id : 0
    });

    const [arrHistory, setArrHistory] = useState(JSON.parse(localStorage.getItem("history")) || []);

    const addHistory = () => {
        setArrHistory([...arrHistory, bmiObj])
    }

    const deleteHistoryById = (id) => {
        setArrHistory(arrHistory.filter(history => history.id !== id))
    }

    return (
        <div className='bg-dark-green py-5'>
            <InputFormCalculator setBmiObj={setBmiObj} setArrHistory={setArrHistory}/>

            <HasilBmi bmiObj={bmiObj} />

            <HistoryBmi arrHistory={arrHistory} deleteHistoryById={deleteHistoryById}/>
        </div>
    );
}

export default Calculator;
