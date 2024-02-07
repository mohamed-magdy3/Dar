import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer '>
            <div className='footer-in container m-auto'>
                <div className='logo-with-markz '>
                    <img src={require('../assets/logo-footer.png')} alt="" className='logo-footer' />
                    <div className='markz'>
                        <h6 >  مركز دار الكتاب والسنة لتعليم اللغة العربية والعلوم الشرعية،تحت إشراف <br /> الشيخ سمير بن سعيد القاهري</h6>
                    </div>
                </div>

                <div className='m-auto '>
                    <ul>
                        <Link><li>من نحن؟</li></Link>
                        <Link><li>سياسة الخصوصية</li></Link>
                        <Link><li>التسجيل في البرنامج الدراسي</li></Link>
                    </ul>
                </div>
                <div className='m-auto '>
                    <ul>
                        <Link><li>من نحن؟</li></Link>
                        <Link><li>سياسة الخصوصية</li></Link>
                        <Link><li>التسجيل في البرنامج الدراسي</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
