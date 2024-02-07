import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Main = () => {


    return (
        <div className=''>
            
            <div className='carousel p-5 container'>

                <div className='d-block'>
                    <h1 className='title-head'>البرنامج الدراسي</h1>
                    <h4 className='under-title'>برنامج الدروس الفصاح</h4>
                    <h5 className='manhaj'><Link >الى جميع المقررات</Link></h5>
                </div>

                <div className='carousel-container m-auto pt-5'>
                    <Carousel responsive={responsive} infinite={true} rtl={true} focusOnSelect={true} showDots={true} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-50-px" className=''>
                        <div className='cars-img'>
                            <img src={require("../assets/book1.PNG")} alt="" />
                        </div>
                        <div className='cars-img'>
                            <img src={require("../assets/book2.PNG")} alt="" />
                        </div>
                        <div className='cars-img'>
                            <img src={require("../assets/book3.PNG")} alt="" />
                        </div>
                        <div className='cars-img'>
                            <img src={require("../assets/book4.PNG")} alt="" />
                        </div>
                    </Carousel>;
                </div>
            </div>
        </div>

    )
}

export default Main
