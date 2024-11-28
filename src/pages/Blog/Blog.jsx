import './Blog.css'
import Blog_div from '../../img/Home/Team/Blog_div.png'
import image_cuca from '../../img/Home/Team/Image_cuca.png'
import Card_Blog_img_a from '../../img/Home/Team/Card_Blog_img_a.svg'
import Card_Blog_img_b from '../../img/Home/Team/Card_Blog_img_b.svg'
import Card_Blog_img_c from '../../img/Home/Team/Card_Blog_img_c.svg'
import Card_Blog_img_d from '../../img/Home/Team/Card_Blog_img_d.svg'
import Card_Blog_img_e from '../../img/Home/Team/Card_Blog_img_e.svg'
import Card_Blog_img_f from '../../img/Home/Team/Card_Blog_img_f.svg'

export const Blog = () => {
    return (
        <div>
            <section class="blog_one">
                <div class="container">
                    <div class="block_one">
                        <div class="one_block">
                            <h1 class="one_h1">
                            Articles & News
                            </h1>
                            <p class="one_p">
                            Home / Blog
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ marginTop: '200px' }}>
                <div className="container">
                    <h1 className='Blog_h1'>Latest Post</h1>
                    <div className="Blog_Block">
                        <div className="Blog_left">
                            <img src={image_cuca} alt="" />
                        </div>
                        <div className="Blog_right">
                            <h1 className='Blog_right_h1'>Low Cost Latest Invented Interior Designing Ideas</h1>
                            <p className='Blog_right_p'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                            <p className='Blog_right_p'>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                            <div className="Blog_div">
                                <p className='Blog_div_p'>26 December,2022 </p>
                                <img src={Blog_div} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ marginTop: '100px' }}>
                <div className="container">
                    <h1 className='Blog_h1' >Articles & News</h1>

                    <div className="block_Blog">
                        <div className="Blog_card">
                            <div className="Card_Blog">
                                <img className='Card_Blog_img' src={Card_Blog_img_a} alt="" />
                                <h1 className='Card_Blog_h1'>
                                    Let’s Get Solution For <br /> 
                                    Building Construction <br />
                                    Work
                                </h1>
                                <div className="Blog_div">
                                    <p className='Blog_div_p'>26 December,2022 </p>
                                    <img src={Blog_div} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="Blog_card">
                            <div className="Card_Blog">
                                <img className='Card_Blog_img' src={Card_Blog_img_b} alt="" />
                                <h1 className='Card_Blog_h1'>
                                    Let’s Get Solution For <br /> 
                                    Building Construction <br />
                                    Work
                                </h1>
                                <div className="Blog_div">
                                    <p className='Blog_div_p'>26 December,2022 </p>
                                    <img src={Blog_div} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="Blog_card">
                            <div className="Card_Blog">
                                <img className='Card_Blog_img' src={Card_Blog_img_c} alt="" />
                                <h1 className='Card_Blog_h1'>
                                    Let’s Get Solution For <br /> 
                                    Building Construction <br />
                                    Work
                                </h1>
                                <div className="Blog_div">
                                    <p className='Blog_div_p'>26 December,2022 </p>
                                    <img src={Blog_div} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block_Blog">
                        <div className="Blog_card">
                            <div className="Card_Blog">
                                <img className='Card_Blog_img' src={Card_Blog_img_d} alt="" />
                                <h1 className='Card_Blog_h1'>
                                    Let’s Get Solution For <br /> 
                                    Building Construction <br />
                                    Work
                                </h1>
                                <div className="Blog_div">
                                    <p className='Blog_div_p'>26 December,2022 </p>
                                    <img src={Blog_div} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="Blog_card">
                            <div className="Card_Blog">
                                <img className='Card_Blog_img' src={Card_Blog_img_e} alt="" />
                                <h1 className='Card_Blog_h1'>
                                    Let’s Get Solution For <br /> 
                                    Building Construction <br />
                                    Work
                                </h1>
                                <div className="Blog_div">
                                    <p className='Blog_div_p'>26 December,2022 </p>
                                    <img src={Blog_div} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="Blog_card">
                            <div className="Card_Blog">
                                <img className='Card_Blog_img' src={Card_Blog_img_f} alt="" />
                                <h1 className='Card_Blog_h1'>
                                    Let’s Get Solution For <br /> 
                                    Building Construction <br />
                                    Work
                                </h1>
                                <div className="Blog_div">
                                    <p className='Blog_div_p'>26 December,2022 </p>
                                    <img src={Blog_div} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='page_div'>
                        <ul className='page_ul'>
                            <a href=""><li className='page_li'>01</li></a>
                            <a href=""><li className='page_li'>02</li></a>
                            <a href=""><li className='page_li'>03</li></a>
                            <a href=""><li className='page_li' style={{ fontSize: '20px' }} >→</li></a>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
}