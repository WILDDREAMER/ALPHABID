import Button from 'react-bootstrap/Button';
export default function ContactUs(params) {
    return (
        <section id="contact" className='contactUs container'>
            <div>
                <div className="title">For your assistance, contact us</div>
                <h5>we are available 24/7 feel free to contact us</h5>
            </div>
            <div className='content'>
                <div className='findUs'>
                    <div className='text'>
                        <div className="title">How to find us</div>
                        <div className="findus">If you have any questions, just fill the contact form and we will answer you shortly. If you are living nearby, ome visit us.</div>
                    </div>
                    <div className='text'>
                        <div className="title">Contact us</div>
                        <div className="findus">
                            983-2566 Mill Road, Cambridge <br />
                            Telephone: +1 800 630 6025 <br />
                            Email: alphabid@gmail.com
                        </div>
                    </div>
                    <div className="icons">
                        <div className="facebook icon"></div>
                        <div className="instagram icon"></div>
                        <div className="twitter icon"></div>
                        <div className="youtube icon"></div>
                    </div>
                </div>
                <div className="inTouch">
                    <div className="title">GET IN TOUCH</div>
                    <div className="inputs">
                        <input type="text" placeholder='Name:'/>
                        <input type="text"  placeholder='Email:'/>
                        <input type="text"  placeholder='Adress:'/>
                        <input type="text"  placeholder='Phone:'/>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                        <Button>SEND</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}