import React from 'react';

const Card = (props) => {
    console.log(props.children);
    return (
        <div className="card">
            <div className="card-body">
                <img src={props.img} className="card-img-top" alt="..."></img>
                <h3 className="card-title">{props.title}</h3>
                {props.children}
                <div className="btn">
                    <a href="#0" className="btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
