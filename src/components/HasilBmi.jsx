import React from 'react';

const HasilBmi = ({bmiObj}) => {

    console.log(bmiObj);
    
    return (
        <div className="card text-center pt-5 bg-dark-green">
            <div className="card-header bg-semi-green font-weight-bold fs-4 color-dark-green kanit-bold">
                Hasil BMI 
            </div>
            <div className="card-body bg-light-green kanit-bold color-dark-green">
                <h5 className="card-title">{bmiObj.count}</h5>
                <p className="card-text">{bmiObj.category}</p>
              
            </div>
            <div className="card-footer text-muted bg-semi-green font-weight-bold fs-6 color-dark-green kanit-bold">
                {bmiObj.id}
            </div>
        </div>
    );
}

export default HasilBmi;
