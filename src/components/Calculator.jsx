import React from 'react';
import InputFormCalculator from './InputFormCalculator';
import HasilBmi from './HasilBmi';
import HistoryBmi from './HistoryBmi';

const Calculator = () => {
    return (
        <div className='bg-dark-green py-5'>
            <InputFormCalculator />

            <HasilBmi />

            <HistoryBmi/>
        </div>
    );
}

export default Calculator;
