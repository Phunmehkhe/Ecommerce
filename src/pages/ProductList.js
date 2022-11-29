import React from 'react'
import Product from '../components/Product';
import { Link } from 'react-router-dom';

const ProductList = () => {
    return (
        <div>
            <article className='text-center mt-5'>
                <h1>Products</h1>
                <p>Order it for you or for your beloved ones</p>
            </article>

            <div classname='container mt-5'>
                <div className='row'>
                    <div className='col-md'>
                        <Link to="/productdetails" className='text-decoration-none text-black'>
                            <Product imageUrl="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png" productName="Strawberry" price="$10.90" />
                        </Link>
                    </div>

                    <div className='col-md'>
                        <Link to="/productdetails" className='text-decoration-none text-black'>
                            <Product imageUrl="https://res.cloudinary.com/oluwaloni/image/upload/v1666781140/image1_.png" productName="Mango" price="$11.80" />
                        </Link>
                    </div>

                    <div className='col-md'>
                        <Link to="/productdetails" className='text-decoration-none text-black'>
                            <Product imageUrl="https://res.cloudinary.com/oluwaloni/image/upload/v1666781140/image11.png" productName="Banana" price="$11.20" /> 
                       </Link>
                    </div>

                    <div className='col-md'>
                        <Link to="/productdetails" className='text-decoration-none text-black'>
                            <Product imageUrl="https://res.cloudinary.com/oluwaloni/image/upload/v1666775072/image_1.png" productName="Apple" price="$9.50" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;