import React from 'react';

const Card = (props) => {

    return (
        <div className="card">
            <div className="card-body">
                {props.children}
                <div className="btn">
                    <a href="#0" className="btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
