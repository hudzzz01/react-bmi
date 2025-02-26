import React from 'react';

const HasilBmi = ({ bmiObj }) => {

    console.log(bmiObj);

    let imageMaskot = undefined;

    if (bmiObj.category == "Obesitas") {
        imageMaskot = <img className='mt-0 mb-2 around' style={{ width: "200px" }} src="/src/assets/olahraga_barbel.svg" alt="gym" />
    } else if (bmiObj.category == "Kelebihan Berat Badan") {
        imageMaskot = <img className='mt-0 mb-2 around' style={{ width: "200px" }} src="/src/assets/olahraga_bike.svg" alt="gym" />
    } else if (bmiObj.category == "normal") {
        imageMaskot = <img className='mt-0 mb-2 around' style={{ width: "200px" }} src="/src/assets/minum.svg" alt="gym" />
    } else if (bmiObj.category == "kurus") {
        imageMaskot = <img className='mt-0 mb-2 around' style={{ width: "200px" }} src="/src/assets/eat.svg" alt="gym" />
    } else {
        imageMaskot = <img className='mt-0 mb-2 around' style={{ width: "200px" }} src="/src/assets/moon_light.svg" alt="gym" />
    }

    return (
        <div className="card text-center pt-5 bg-dark-green">
            <div className="card-header bg-semi-green font-weight-bold fs-4 color-dark-green kanit-bold">
                Hasil BMI
            </div>
            <div className="card-body bg-light-green kanit-bold color-dark-green">
                <h5 className="card-title">{bmiObj.count}</h5>
                <p className="card-text">{bmiObj.category}</p>

            </div>
            <div className="card-footer text-muted bg-semi-green font-weight-bold fs-6 color-dark-green kanit-bold d-flex flex-column align-items-center justify-content-center gap-2">
                {bmiObj.id == 0 ? "silakan hitung BMI" : bmiObj.id}

                {imageMaskot}

            </div>
        </div>
    );
}

export default HasilBmi;
