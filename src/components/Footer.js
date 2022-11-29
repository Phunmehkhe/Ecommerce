import React from 'react'


const Footer = () => {
    return (
        <div className='bg-dark text-white mt-5 pb-5'>
            <div className="container">
                <div className="row align-items-center">
                    <article className="mt-5">
                        <hr className='text-white bg-white align-items-center'style={{height:"2px", borderWidth: "0", width:"100%"}} />
                    </article>
                    <div className='col-md px-5'>
                        <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666784614/footer.png" />
                        <p>Your natural candle made for<br /> your home and for your wellness</p>
                    </div>

                    <div className='col-md-2'>
                    <h5 className='text-success my-4'>Discovery</h5>
                    <p>New Season</p>
                    <p>Most searched</p>
                    <p>Most sold</p>  
                    </div>

                    <div className='col-md-2'>
                        <h5 className='text-success my-4'>About</h5>
                        <p>Help</p>
                        <p>Shipping</p>
                        <p>Affiliate</p>
                    </div>

                    <div className='col-md-2'>
                        <h5 className='text-success my-4'>Info</h5>
                        <p>Contact us</p>
                        <p>Privacy Policies</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;