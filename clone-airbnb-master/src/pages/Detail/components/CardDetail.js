import React from 'react'

export const CardDetail = ({image, description}) => {
    
    return(
    <article className="card-detail">
        <img src={image}></img>
        <p>{description}</p>
    </article>
    )
};
