/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

// Call Serive API
import { getDataTopCoures } from "../Service/Services";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TopCoures() {
    // MockupData
    const MockDataTopCourse = [
        {
            "title": "Managing Diversity",
            "detail": "When people think of diversity, they may think first of ethnicity and race, and then gender. Diversity is much broader than that. It's important to understand how these dimensions affect: Performance, Motivation Success and Interactions with Others.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/frOaFrR9yURAbMIlRqfOow/1688379285/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjoxNDozMCBFRFQgMjAyMw==/eot/DQtVDQJVDVMGNi8hYHs3AlIBBFNSCQVRDQEHWApGXQEGAQUABVUGAFEHVFUAVQNrW1YXRkYDT3JlJCE.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000001665"
        },
        {
            "title": "Code of Conduct Policy",
            "detail": "In conducting its business, integrity must underlie all company relationships, including those with customers, suppliers, communities and among employees. The highest standards of ethical business conduct are required of all employees in the performance of their company responsibilities.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/RhJzQAC-GOfXnFAO5j8NWA/1688379191/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjoxMjo1NiBFRFQgMjAyMw==/eot/CAlUBw1VAFIBVjUtdmEtZlIDAlBVBgBbCwkAB1FcVhZSUgUABVUGAFEHVVIFVgEGDWYBW0AUEl0bKzZ1Iw.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000001664"
        },
        {
            "title": "Workplace Harassment Training",
            "detail": "This course contains a video training module and Saba Exam to test your knowledge. Both modules must be completed to receive course credit.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/IvV393D_fMYFk851eQkz0Q/1688380012/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjoyNjozNyBFRFQgMjAyMw==/eot/CwhUBQRQCVYCNi8hYHs3AlIBAlBTAQNUCQQDWApGXQEGAQUABVUGAFEHVFUAVgVrW1YXRkYDT3JlJCE.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000001666"
        },
        {
            "title": "CRM System Training",
            "detail": "This module has two requirements for completion which include successful completion of the online training and an OJT skills demonstration to your manager.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/PsuQdZDSURy4Jcj5PAF6_g/1688379219/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjoxMzoyNCBFRFQgMjAyMw==/eot/CA1TBA1eCVUCUDUtdmEtZlIDAlBRAQNbAAAHBFdcVhZSUgUABVUGAFEHVVIFVgEGC2YBW0AUEl0bKzZ1Iw.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000001660"
        },
        {
            "title": "Anti-Corruption Regulations",
            "detail": "This guide covers electronic and print resources on corruption law. Corruption law touches on a wide variety of issues including money laundering, government transparency, organized crime, trade and investment regulations",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/RZmb6ib2rUB5nY0hkOGKNw/1688379141/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjoxMjowNiBFRFQgMjAyMw==/eot/CApRDQBXAFACVTUtdmEtZlIDAlBWAwpWCQkCBFJcVhZSUgUABVUGAFEHVVIFVgEFAGYBW0AUEl0bKzZ1Iw.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000001650"
        },
        {
            "title": "Order Taking Basics",
            "detail": "Understand the customer order and entering it properly into the point of sale system.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/n2aNc8dbGwSq_iRVL8dX-A/1688378992/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjowOTozNyBFRFQgMjAyMw==/eot/CApQAANQC1YBNi8hYHs3AlIBAVJXBARUCwQAWApGXQEGAQUABVUGAFEHVFUAVARrW1YXRkYDT3JlJCE.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000007786"
        },
        {
            "title": "Team Member Conduct Policy",
            "detail": "Code of conduct policy document for all team members in our restaurant vertical.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/QRxUyO7TA3hmMQOcdoVytg/1688446308/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=VHVlIEp1bCAwNCAwMDo1MTozMyBFRFQgMjAyMw==/eot/CwFRAAxQAFpkLCM3emFTAlABCFJRCAVaAV9eQgFRCVIGAQUABVUGAFAAUVQGPlZbTUsRURssMX1y.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000008376"
        },
        {
            "title": "Point of Sale (POS) Training",
            "detail": "Understand how to clock in, clock out and handle customer orders through our point of sale system.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/t781qIS04L41s7e3U-kn2g/1688446311/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=VHVlIEp1bCAwNCAwMDo1MTozNiBFRFQgMjAyMw==/eot/CwlXBAxXAFQHUzUtdmEtZlIDAlNVBQNaCQkGAVRcVhZSUgUABVUGAFEHVVIFVgENAWYBW0AUEl0bKzZ1Iw.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000007788"
        },
        {
            "title": "Food Safety",
            "detail": "This module will cover the safe and proper methods to ensure food safety.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/ToWr5dpHGQ4SEvoAcKsdPQ/1688379024/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjoxMDowOSBFRFQgMjAyMw==/eot/AA5SAABSCVABNi8hYHs3AlIBCVZVBAdWCQIAWApGXQEGAQUABVUGAFEHVFUAUgJrW1YXRkYDT3JlJCE.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000007789"
        },
        {
            "title": "Packing Orders",
            "detail": "Learn the basics of proper packaging of an order in a safe and efficient method.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/H60ueBhbSGir4nmbMb_Qcw/1688446310/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=VHVlIEp1bCAwNCAwMDo1MTozNSBFRFQgMjAyMw==/eot/CAhSAQBTDlUENi8hYHs3AlIBAVBVBQdXDgcFWApGXQEGAQUABVUGAFEHVFUAVAdrW1YXRkYDT3JlJCE.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000007787"
        }
    ]

    // useState
    const [topCouresList, setTopCouresList] = useState([]);

    // Function
    async function TopCoures() {
        try {
            let data = await getDataTopCoures()
            setTopCouresList(data);
        } catch (error) {
            console.log(error)
        }
    }
    // useEffect
    useEffect(() => {
        TopCoures()
    }, [])
    return (
        <>
            <div className="box-Categories">
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-xxl-4 d-flex align-items-center">
                            <div className="text-start mb-3">
                                <h1 style={{ color: "#4263EB" }}>Top 10 Rating</h1> <br />
                            </div>
                        </div>
                        <div className="col-xxl-8">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={3}
                                pagination={{
                                    dynamicBullets: false,
                                    clickable: true
                                }}
                                modules={[Autoplay, Pagination]}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                className="mySwiper"
                            >
                                {topCouresList && topCouresList.length > 0 ? topCouresList.map((item) => (
                                    <div key={item.id}>
                                        <SwiperSlide className='mb-5'>
                                            <a href={item.link} target='blank'>
                                                <div className='card'>
                                                    <div className='card-img'>
                                                        {
                                                            item.image.substring(item.image.length - 3) === "mp4" ? (
                                                                <video autoPlay playsInline loop muted controls alt={item.courseTitle} src={item.image} />
                                                            ) : (
                                                                <img src={item.image} className="card-img-top" alt={item.courseTitle} />
                                                            )
                                                        }
                                                        {/* <img src={item.image} className="card-img-top" /> */}
                                                    </div>
                                                    <div className='card-body'>
                                                        <p className='cut-text-multi-1-line h6' alt={item.title}> {item.title} </p>
                                                        <p className="cut-text-multi-3-line" alt={item.detail}> {item.detail} </p>
                                                    </div>
                                                    <hr />
                                                    <div className='card-Footer'>
                                                        <div className="d-flex justify-content-end">
                                                            <a className="btn btn-secondary" href={item.link} target='blank'><small><i className="fas fa-external-link-alt"></i></small></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                    </div>
                                )) : []}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}