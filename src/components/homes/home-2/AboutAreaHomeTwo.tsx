
import Link from 'next/link';
import React from 'react';

const AboutAreaHomeTwo = () => {
    return (
        <>
            <section className="ab_one section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                            <div className="ab_content">
                                <span>Бидний тухай</span>
                                <h2>Манай компани нь мэдээллийн аюулгүй байдлын сургалт үйлчилгээ, аудит, зөвлөх чиглэлээр үйл ажиллагаа явуулдаг.</h2>
                            </div>
                            <div className="abmv_list">
                                <ul>
                                    <li><img src="assets/img/check.png" alt="" /> Мэдээллийн сүлжээ: дэд бүтэц, зохион байгуулалт, төлөвлөлт, сайжруулалт, асуудал илрүүлэх, зөвлөх үйлчилгээ.
                                    </li>
                                    <li><img src="assets/img/check.png" alt="" /> Мэдээллийн систем: систем архитектур гаргах, шийдэл боловсруулах.</li>
                                    <li><img src="assets/img/check.png" alt="" /> Мэдээллийн аюулгүй байдал зөвлөх үйлчилгээ.</li>
                                    <li><img src="assets/img/check.png" alt="" /> Мэдээллийн аюулгүй байдлын аудит.</li>
                                    <li><img src="assets/img/check.png" alt="" /> Кибер аюулгүй байдлын эрсдэлийн үнэлгээ.</li>
                                    <li><img src="assets/img/check.png" alt="" /> Мэдээлэл технологийн сургалт: CCNA, CCNP ENCOR, CCNP ENARSI, CCIE Enterprise Infrastructure, Network Automation (DEVNET), Network Security.</li>
                                </ul>
                            </div>
                            <div className="skill_btn">
                                {/* <Link href="/service" className="btn_one">Get your services <i className="ti-arrow-top-right"></i></Link> */}
                                <a href="/contact" className="btn_two">Contact with us <i className="ti-arrow-top-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div className="ab_img ai_top">
                                <p></p>
                                <img src="assets/img/about3.png" className="img-fluid" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutAreaHomeTwo;
