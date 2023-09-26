/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

// Call Serveice API
import { getDataHighlightedCourse } from "../Service/Services";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HighlightedCourse() {
    // MockData 
    const MockDataHighilgh = [
        {
            "title": "Edutainment Micro Learning (Guru)",
            "detail": "",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013859"
        },
        {
            "title": "Health & Wellness",
            "detail": "We’re committed to creating a work environment that promotes employee health and wellness. This course is the first step in raising awareness and roll out of our new workplace health program, which includes promoting activities or policies that encourage and support healthy behaviors in the workplace.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/edpTUJ0p8QLgLlmDVWbeMg/1688379640/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjoyMDoyNSBFRFQgMjAyMw==/eot/CAxaBgBRClAGUDUtdmEtZlIDAlBQCAFWDwMCAFdcVhZSUgUABVUGAFEHVVIFVgEND2YBW0AUEl0bKzZ1Iw.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000011599"
        },
        {
            "title": "Managing Diversity",
            "detail": "When people think of diversity, they may think first of ethnicity and race, and then gender. Diversity is much broader than that. It's important to understand how these dimensions affect: Performance, Motivation Success and Interactions with Others.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/frOaFrR9yURAbMIlRqfOow/1688379285/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjoxNDozMCBFRFQgMjAyMw==/eot/DQtVDQJVDVMGNi8hYHs3AlIBBFNSCQVRDQEHWApGXQEGAQUABVUGAFEHVFUAVQNrW1YXRkYDT3JlJCE.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000001665"
        },
        {
            "title": "Online Remote Content",
            "detail": "ตัวอย่างวิชาที่มีการ Verify face ก่อนเข้าเรียน และระหว่างเรียน",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000030123"
        },
        {
            "title": "Systematic Problem Solving",
            "detail": "Below are the six steps: Recognize that a problem exists Analyze the problem - Collect information Identify possible causes (solutions) to the problem Evaluate the possible causes (solutions) Develop an action plan to correct the problem and take action Verify that the problem has been corrected.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/TivWhyMDCmXLdLx-f-np7g/1688379899/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjoyNDo0NCBFRFQgMjAyMw==/eot/CA1RDQJTAFEAUzUtdmEtZlIDAlBRAwpUDQkDBlRcVhZSUgUABVUGAFEHVVIAVwwBCGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000029944"
        },
        {
            "title": "ต่ออายุใบอนุญาตครั้งที่ 1 มีอายุ 1 ปี",
            "detail": "",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/iVGojrKXObjmzY-wlS-fiw/1688379865/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjoyNDoxMCBFRFQgMjAyMw==/eot/CAFRAg1TDlUHVTUtdmEtZlIDAlBdAwVbDQcHAVJcVhZSUgUABVUGAFEHVVIBUwEAAGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000030124"
        },
        {
            "title": "หลักสูตร Changing for Growth",
            "detail": "",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013862"
        },
        {
            "title": "หลักสูตร Reshaping the future of work Digital Mindset",
            "detail": "",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013861"
        },
        {
            "title": "หลักสูตร Systematic Problem Solving",
            "detail": "",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013860"
        }
    ]

    // useState
    const [highlightedCourseList, setHighlightedCourseList] = useState([]);

    // Function
    async function HighlightedCourseList() {
        try {
            let data = await getDataHighlightedCourse()
            setHighlightedCourseList(data);
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect
    useEffect(() => {
        HighlightedCourseList()
    }, [])

    return (
        <>
            <div className="container mb-2">
                <div className="row">
                    <div className="col-xxl-4 d-flex align-items-center">
                        <h2 className="mb-3">Highlighted Courses</h2>
                    </div>
                    <div className="col-xxl-8">
                        <Swiper
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
                                    spaceBetween: 15,
                                },
                            }}
                            className="mySwiper"
                        >
                            {highlightedCourseList && highlightedCourseList.length > 0 ? highlightedCourseList.map((item) => (
                                <div key={item.id}>
                                    <SwiperSlide className='mb-5'>
                                        <a href={item.link} target='blank' >
                                            <div className='opacityCard'>
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
                                                        <p className='cut-text-multi-2-line h6' alt={item.title}> {item.title} </p>
                                                        <p className="cut-text-multi-3-line" alt={item.detail}> {item.detail} </p>
                                                    </div>
                                                    <hr />
                                                    <div className='card-Footer'>
                                                        <div className="d-flex justify-content-end">
                                                            <a className="btn btn-secondary" href={item.link} target='blank'><small><i className="fas fa-external-link-alt"></i></small></a>
                                                        </div>
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
        </>
    )
}