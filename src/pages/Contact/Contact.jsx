import './Contact.css'
import Icons from '../../img/Home/Team/Icons.svg'
import Contact_left_div_img_on from '../../img/Home/Team/Contact_left_div_img_on.png'
import Contact_left_div_img_tu from '../../img/Home/Team/Contact_left_div_img_tu.png'
import Contact_left_div_img_tr from '../../img/Home/Team/Contact_left_div_img_tr.png'

export const Contact = () => {
    return (
        <div>
            <section class="Contact_one">
                <div class="container">
                    <div class="block_one">
                        <div class="one_block">
                            <h1 class="one_h1">
                                Contact Us
                            </h1>
                            <p class="one_p">
                                Home / Contact
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ marginTop: '150px' }}>
                <div className="container">
                    <div className="contact_div_h1">
                        <h1 className='contact_h1'>
                            We love meeting new people and helping them.
                        </h1>
                    </div>
                    <div className="contact_block_dad">
                        <div className="contact_left">
                            <div className="cantact_left_div">
                                <ul className='contact_left_div_ul'>
                                    <li className='contact_li_img' >
                                        <img className='contact_li_img' src={Contact_left_div_img_on} alt="" />
                                    </li>
                                    <li className='contact_left_div_li'>
                                        info@yourdomain.com
                                    </li>
                                </ul>
                                <ul className='contact_left_div_ul'>
                                    <li className='contact_li_img' >
                                        <img className='contact_li_img' src={Contact_left_div_img_tu} alt="" />
                                    </li>
                                    <li className='contact_left_div_li'>
                                        +1 (378) 400-1234
                                    </li>
                                </ul>
                                <ul className='contact_left_div_ul'>
                                    <li className='contact_li_img' >
                                        <img className='contact_li_img' src={Contact_left_div_img_tr} alt="" />
                                    </li>
                                    <li className='contact_left_div_li'>
                                        www.yourdomain.com
                                    </li>
                                </ul>
                                <li style={{ height: '60px' }}><img style={{ width: '146px', height: '50px' }} src={Icons} alt="" /></li>
                            </div>
                        </div>

                        <div className="contact_right" >
                            <ul style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <li>
                                    <input style={{ width: '378px', height: '45px', border: 'none' }} placeholder="Name" type="text" />
                                    <hr />
                                </li>
                                <li>
                                    <input style={{ width: '378px', height: '45px', border: 'none' }} placeholder="Email" type="text" />
                                    <hr />
                                </li>
                            </ul>
                            <ul style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <li>
                                    <input style={{ width: '378px', height: '45px', border: 'none' }} placeholder="Subject" type="text" />
                                    <hr />
                                </li>
                                <li>
                                    <input style={{ width: '378px', height: '45px', border: 'none' }} placeholder="Phone" type="text" />
                                    <hr />
                                </li>
                            </ul>

                            <ul style={{ width: '100%' }}>
                                <input
                                    style={{
                                        width: '100%',
                                        height: '175px',
                                        border: 'none',
                                        boxSizing: 'border-box',
                                        padding: '10px',
                                        textAlign: 'left'
                                    }}
                                    placeholder="Hello, I am interested in..."
                                    type="text"
                                />
                                <hr />
                            </ul>

                            <ul style={{ width: '100%' }}>
                                <a href="">
                                    <button
                                        style={{ marginLeft: '577px', fontFamily: 'Jost, sans-serif', width: '220px', height: '75px', borderRadius: '20px', backgroundColor: '#292F36', color: '#fff' }}
                                        className='cntact_button'>
                                        Send Now →
                                    </button>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5514.573440496705!2d74.66546652415234!3d42.860114762705585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb6c33563bccd%3A0x1593cbbd433b5ba8!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdGL0Lkg0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQmNC90L3QvtCy0LDRhtC40L7QvdC90YvRhSDRgtC10YXQvdC-0LvQvtCz0LjQuQ!5e0!3m2!1sru!2skg!4v1732353374316!5m2!1sru!2skg" width="100%" height="501px" style={{ borderRadius: '50px', marginTop: '150px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>


        </div>
    );
}

