

import Link from 'next/link';
import React from 'react';

const ServiceArea = () => {
    return (
        <>
            <section className="service_area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div className="single_service">
                                <img src="assets/img/service5.png" className="img-fluid" alt="image" />
                                <h2>CCNA онлайн сургалт</h2>
                                <p>Cisco Certified Network Associate (CCNA) сургалтанд хамрагдсанаар байгууллагын дотоод болон гадаад сүлжээ зохион байгуулах, дотоод сүлжээний аюулгүй байдалыг хангах, найдвартай сүлжээ бий болгох ...</p>
                                <Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div className="single_service">
                                <img src="assets/img/service6.png" className="img-fluid" alt="image" />
                                <h2>CCNA танхим сургалтын хөтөлбөр</h2>
                                <p>Cisco Certified Network Associate (CCNA) сургалтанд хамрагдсанаар байгууллагын дотоод болон гадаад сүлжээ зохион байгуулах, дотоод сүлжээний аюулгүй байдалыг хангах, найдвартай сүлжээ бий болгох ...</p>
                                <Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div className="single_service">
                                <img src="assets/img/service10.png" className="img-fluid" alt="image" />
                                <h2>CCNP ENARSI сургалт</h2>
                                <p>CNP ENARSI сургалт нь Cisco -ийн ахисан түвшиний сургалт бөгөөд байгууллагын дотоод сүлжээ зохион байгуулах сайжруулах, асуудлыг илрүүлэх (troubleshooting) мэдлэг чадварыг онол практик хосолсон хэлбэрээр олгоно.</p>
                                <Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div className="single_service">
                                <img src="assets/img/service8.png" className="img-fluid" alt="image" />
                                <h2>CCNP ENCOR Сургалт</h2>
                                <p>CCNP ENCOR (Implementing and Operating Cisco Enterprise Network Core Technologies) сургалт нь CCNA -ийн дараагийн шатны сургалт бөгөөд байгууллагын дотоод болон гадаад сүлжээг зохион байгуулах, удирдах, сайжруулахад шаардлагатай ахисан түвшний мэдлэг, чадварыг олгох зорилготой.</p>
                                <Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div className="single_service">
                                <img src="assets/img/service9.png" className="img-fluid" alt="image" />
                                <h2>Cisco Devnet</h2>
                                <p>Cisco Devnet сургалт нь сүлжээний инженерт software developer-ийн чадварыг олгох зорилготой ба сүлжээний автоматжуулалт хэрэгжүүлэхэд ерөнхий ойлголт өгөх зорилготой. Энэхүү сургалтаар Linux basic, Python basic, Docker, container, REST API болон сүлжээний автоматжуулалт гэсэн сэдэвүүдийг үзэж онол болон практикийн чадвартай болно.</p>
                                <Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceArea;
