import React from 'react';

const AboutPage = () => {
    return (
        <div  className='bg-semi-green pt-5 px-3' style={{ height: "100vh",  }}>
            <div className="card bg-low-green color-midle-green">
                <h5 className="card-header  bg-midle-green color-light-green">Created By Hudzaifah</h5>
                <div className="card-body">
                    <h5 className="card-title">Task Enigmacamp Turing #19</h5>
                    <p className="card-text">Learn React js</p>
                    <a href="wa.me/62895366975992" className="btn btn-success"><i class="bi bi-telephone-x"></i>  Whatsapp me</a>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
