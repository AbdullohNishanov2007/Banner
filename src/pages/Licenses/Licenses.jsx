import React from "react";
import "./Licenses.css";
import Licon_a from '../../img/Home/Team/Liconses_a.png'
import Licon_b from '../../img/Home/Team/Liconses_b.png'
import Licon_c from '../../img/Home/Team/Liconses_c.png'
import Licon_d from '../../img/Home/Team/Liconses_d.png'
import Licon_e from '../../img/Home/Team/Liconses_e.png'
import Licon_f from '../../img/Home/Team/Liconses_f.png'

const Licenses = () => {
  return (
    <div>

      <section class="Licenses">
        <div class="container">
          <div class="block_one">
            <div class="one_block">
              <h1 class="one_h1">
                Licenses
              </h1>
              <p class="one_p">
                Home / Contact
              </p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ marginTop: '150px' }} className="container">
        <div className="licen">
          <h1 style={{ fontSize: '50px', color: '#292F36' }} >Photography</h1>
          <p style={{ fontSize: '22px' }}>
            All images used in the <span style={{ color: '#CDA274', fontSize: '22px ' }}>Interno</span> Commerce Template are licensed. You
            have personal and commercial rights to use them. If you want to use
            them for your own clients, please double-check their respective
            licenses for use <b>Unsplash, Pexels</b>.
          </p>
        </div>
      </div>

      <section style={{ marginTop:'100px' }}>
        <div className="container">
          <div style={{ backgroundColor: '#F4F0EC', borderRadius: '70px', width: '100%', height: '671px' }}>
            <div style={{ width: '1105px', padding: '47px' }}>
              <h1 style={{ fontSize: '35px', fontFamily: 'DM Serif Display, serif', color: '#292F36', fontWeight: '400' }}>Unsplash</h1>
              <p style={{ fontSize: '22px', fontFamily: 'Jost', color: '#292F36', fontWeight: '400' }}>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17.</p>
              <div className="Licen_img">
                <img style={{ width: '341px', height: '339px' }} src={Licon_a} alt="" />
                <img style={{ width: '341px', height: '339px' }} src={Licon_b} alt="" />
                <img style={{ width: '341px', height: '339px' }} src={Licon_c} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop:'100px' }}>
        <div className="container">
          <div style={{ backgroundColor: '#F4F0EC', borderRadius: '70px', width: '100%', height: '671px' }}>
            <div style={{ width: '1105px', padding: '47px' }}>
              <h1 style={{ fontSize: '35px', fontFamily: 'DM Serif Display, serif', color: '#292F36', fontWeight: '400' }}>Pexels</h1>
              <p style={{ fontSize: '22px', fontFamily: 'Jost', color: '#292F36', fontWeight: '400' }}>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image <br /> 10, Image 11, Image 12.</p>
              <div className="Licen_img">
                <img style={{ width: '341px', height: '339px' }} src={Licon_d} alt="" />
                <img style={{ width: '341px', height: '339px' }} src={Licon_e} alt="" />
                <img style={{ width: '341px', height: '339px' }} src={Licon_f} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Licenses;
