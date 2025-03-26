

import Link from 'next/link';
import React from 'react';

const ServiceAreaHomeTwo = () => {
    return (
        <>
            <section className="service_area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                            <div className="section-title">
                                <span>Бидний үйлчилгээ</span>
                                <h2>What we do for your  <br />Cyber security solutions</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                            <div className="ser_btn">
                                <Link href="/service" className="btn_two">View all services <i className="ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div className="single_service">
                                <img src="assets/img/service5.png" className="img-fluid" alt="image" />
                                <h2>CCNA онлайн сургалт</h2>
                                <p>Cisco Certified Network Associate (CCNA) сургалтанд хамрагдсанаар байгууллагын дотоод болон гадаад сүлжээ зохион байгуулах, дотоод сүлжээний аюулгүй байдалыг хангах, найдвартай сүлжээ бий болгох ...</p>
                                <Link href="/service">Read More <i className="ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div className="single_service">
                                <img src="assets/img/service6.png" className="img-fluid" alt="image" />
                                <h2>CCNA танхим сургалтын хөтөлбөр</h2>
                                <p>Cisco Certified Network Associate (CCNA) сургалтанд хамрагдсанаар байгууллагын дотоод болон гадаад сүлжээ зохион байгуулах, дотоод сүлжээний аюулгүй байдалыг хангах, найдвартай сүлжээ бий болгох ...</p>
                                <Link href="/service">Read More <i className="ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div className="single_service">
                                <img src="assets/img/service10.png" className="img-fluid" alt="image" />
                                <h2>CCNP ENARSI сургалт</h2>
                                <p>CCNP ENARSI сургалт нь Cisco -ийн ахисан түвшиний сургалт бөгөөд байгууллагын дотоод сүлжээ зохион байгуулах сайжруулах, асуудлыг илрүүлэх (troubleshooting) мэдлэг чадварыг онол практик хосолсон хэлбэрээр олгоно.</p>
                                <Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceAreaHomeTwo;
