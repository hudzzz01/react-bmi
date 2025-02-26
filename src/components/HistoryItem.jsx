import olahragaBarbel from '../assets/olahraga_barbel.svg';
import olahragaBike from '../assets/olahraga_bike.svg';
import minum from '../assets/minum.svg';
import eat from '../assets/eat.svg';
import moonLight from '../assets/moon_light.svg';

const HistoryItem = ({ history, deleteHistoryById }) => {

    const dateHuman = new Date(history.id).toISOString().split('T')[0];
    const categoryImages = {
        "Obesitas": olahragaBarbel,
        "Kelebihan Berat Badan": olahragaBike,
        "normal": minum,
        "kurus": eat,
        "default": moonLight
    };

    const imageSrc = categoryImages[history.category] || categoryImages["default"];


    const imageMaskot = (
        <img className='mt-0 mb-2 around' style={{ width: "200px" }} src={imageSrc} alt="maskot" />
    );

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
