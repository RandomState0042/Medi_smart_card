import React from 'react'
import drbanner from '../../images/hero-bg.png'
import bn_1 from '../../images/design_1.png'
import bn_2 from '../../images/design_2.png'
import bn_3 from '../../images/design_3.png'
import dn from '../../images/Download_logo.png'
import scan from "../../images/about_logo.png"
import google from "../../images/google_bg.png"
import apple from "../../images/apple-bg.png"
import mail from "../../images/mail-bg.png"
import phone from "../../images/phone-bg.png"
import location from "../../images/locationbg.png"

export const Home = () => {
  return (
    <div>   
{/* banner-1 */}
        <div className='banner-1'>
        <img src={drbanner}/>
        </div>
{/* banner-2 */}
        <div className='banner-2'>
            <div className='heading'>
            <strong>What's MediCart</strong>
            <p>Instant access to your Medical record through QR codes</p>
            </div>

            <div className='image-3'>
                <img src={bn_1} alt="" />
                <img src={bn_2} alt="" />
                <img src={bn_3} alt="" />
            </div>
        </div>
{/* banner-3 */}
        <div className='banner-3'>
        <img src={dn} />
        <div>
        <div>
            <h1>Download Now</h1>
            <strong>Get the app</strong>
            <p>Simplifying healthcare through accessible, efficient, and secure solutions. Transforming how you manage your health records with innovative technology.</p>
        </div>
        <div className="icon">
            <img src={google}/>
            <img src={apple}/>
        </div>
        </div>
        </div>
{/* banner-4 */}
        <div className='banner-4'>
            <div className='info'>
            <strong>
            Information
            </strong>
            <p>
            We as MediCard try to revolutionize healthcare in a world where technology has transformed countless industries. Our journey began with a vision—to simplify the healthcare experience and make it more patient-centric. Today, we're proud to introduce MediCard, an innovative solution that leverages the power of technology to transform how we manage our health and medical records. With a commitment to accessibility, efficiency, and security, we empower individuals to take control of their health journeys in a streamlined and secure manner. Join us in this exciting endeavor to shape a future where healthcare works seamlessly for everyone. 
            </p>
            </div>
            <div className='scan_img'>
                <img src={scan}/>
            </div>

        </div>
{/*  contact */}
        <div className='contact'>
            <div className='container-1'>
                <h1>Contact</h1>
                <div>
                    <div>
                        <h4>Leave a Message</h4>
                        <p>Name</p>
                        <input type="text" placeholder='Your Name' />
                        <p>Email Address</p>
                        <input type="text" placeholder='Email Address' />
                        <p>Your Message</p>
                        <textarea name="Your Message" id="" cols="25" rows="10" placeholder=' write your message'></textarea>
                        <button>submit</button>
                    </div>

                    <div className="container-4">
                        <div className="mail">
                            <img src={mail} alt="" />
                            <p>workwithkalam@gmail.com</p>
                        </div>
                        <div className="phone">
                            <img src={phone} alt="" />
                            <p>+917982015467</p>
                        </div>
                        <div className="location">
                            <img src={location} alt="" />
                            <p>Galgotias University</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
