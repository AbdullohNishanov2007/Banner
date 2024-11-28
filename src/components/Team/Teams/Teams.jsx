import './Teams.css'
import Imagea from '../../../img/Home/Team/Imagea.svg'
import Icon from '../../../img/Home/Team/Icon.svg'
import IconA from '../../../img/Home/Team/IconA.svg'
import Imageb from '../../../img/Home/Team/Imageb.svg'

import Imagec from '../../../img/Home/Team/Imagec.svg'
import Imaged from '../../../img/Home/Team/Imaged.svg'
import Imagee from '../../../img/Home/Team/Imagee.svg'
import Imagef from '../../../img/Home/Team/Imagef.svg'
import Imageg from '../../../img/Home/Team/Imageg.svg'
import Imageh from '../../../img/Home/Team/Imageh.svg'

export const Teams = () => {
    return (
        <div>
            <section class="two">
                <div class="container">
                    <div class="cat">
                        <div class="two_block">
                            <img src={Imagea} alt="" />
                            <h1 class="two_h1">Charlotte Levi</h1>
                            <p class="two_p">Design, Australia</p>
                            <img src={Icon} alt="" />
                        </div>
                        <div class="two_block">
                            <img src={Imageb} alt="" />
                            <h1 class="two_h1">Charlotte Levi</h1>
                            <p class="two_p">Design, Australia</p>
                            <img src={IconA} alt="" />
                        </div>
                        <div class="two_block">
                            <img src={Imagec} alt="" />
                            <h1 class="two_h1">Charlotte Levi</h1>
                            <p class="two_p">Design, Australia</p>
                            <img src={Icon} alt="" />
                        </div>
                        <div class="two_block">
                        <img src={Imagef} alt="" />
                            <h1 class="two_h1">Charlotte Levi</h1>
                            <p class="two_p">Design, Australia</p>
                            <img src={Icon} alt="" />
                        </div>
                    </div>

                    <div style={{ marginTop: '60px' }} class="cat">
                        <div class="two_block">
                        <img src={Imaged} alt="" />
                            <h1 class="two_h1">Charlotte Levi</h1>
                            <p class="two_p">Design, Australia</p>
                            <img src={Icon} alt="" />
                        </div>
                        <div class="two_block">
                        <img src={Imagee} alt="" />
                            <h1 class="two_h1">Charlotte Levi</h1>
                            <p class="two_p">Design, Australia</p>
                            <img src={IconA} alt="" />
                        </div>
                        <div class="two_block">
                        <img src={Imageg} alt="" />
                            <h1 class="two_h1">Charlotte Levi</h1>
                            <p class="two_p">Design, Australia</p>
                            <img src={Icon} alt="" />
                        </div>
                        <div class="two_block">
                        <img src={Imageh} alt="" />
                            <h1 class="two_h1">Charlotte Levi</h1>
                            <p class="two_p">Design, Australia</p>
                            <img src={Icon} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}