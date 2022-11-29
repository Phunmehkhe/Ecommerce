import React from 'react'

const Product = ({ imageUrl, productName, price }) => {
    return (
        <div>
            <div className="card border-0 shadow" style={{width: '18rem', backgroundColor: "#F7F8FA"}}>
                <img src={imageUrl} />
                <div className="card-body bg-white">
                    <article className='d-flex justify-content-around'>
                        <h5 className="card-title">{productName}</h5>
                        <p className="text-success">{price}</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Product