import React from 'react';

const InputFormCalculator = () => {
    return (
        <form className='bg-semi-green mx-5 pb-5 rounded shadow'>
        <h1 className='text-center fs-4 kanit-bold pt-4 color-dark-green'>Calculator </h1>
        <div classNameName=''>
            <div className="input-group px-5 pt-5">
                <span className="input-group-text bg-dark-green rounded border-0 color-light-green kanit-light" id="inputGroup-sizing-default">Your Name </span>
                <input type="text" className="form-control bg-light-green border-0" placeholder='Ex. Hudzaifah' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div className='d-flex gap-2 px-5 pt-4'>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text bg-dark-green rounded border-0 color-light-green kanit-light" id="inputGroup-sizing-sm">Height <span className='pt-2 ms-1 fs-5'>cm</span></span>
                    <input type="text" className="form-control bg-light-green border-0 " placeholder='Ex. 179' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>

                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text bg-dark-green rounded border-0 color-light-green kanit-light" id="inputGroup-sizing-sm">Weight<span className='pt-2 ms-1 fs-5'>kg</span></span>
                    <input type="text" className="form-control bg-light-green border-0 " placeholder='Ex. 64' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </div>

            <div className='d-flex flex-column justify-content-center mx-5 '>
                <button type="submit" className="btn btn-success bg-dark-green rounded border-0 color-light-green kanit-light">Submit</button>

            </div>


        </div>
    </form>
    );
}

export default InputFormCalculator;
