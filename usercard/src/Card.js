import React from 'react';

const Card = props => {
    return (
        <div className="card">
            <div>
            <img className="pic" src={props.info.avatar_url}/>
            </div>
            <div>
            <h1>{props.info.login}</h1>
            <h2>{props.info.name}</h2>
            <p>{props.info.bio}</p>
            </div>
        </div>
    )
}
export default Card;