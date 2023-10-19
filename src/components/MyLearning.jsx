/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Call Service API
import { getDataMyLearning } from "../Service/Services";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/MyLearning.css'

// reused
import RatingStars from './Block/Rating';
import Found from './Block/NotFound';
import Buttons from './Block/Button';

export default function MyLearning(urlList) {
    // MockUpdata
    const MockupLearningMandatory = [
        {
            "courseTitle": "Online Remote Content i want need re open close work Digutal mindset Systems Cloud All.",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000030123",
            "status": "Not Evaluated",
            "rating": 1
        },
        {
            "courseTitle": "Reshaping the future of work Digital Mindset",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000030123",
            "status": "Suspended",
            "rating": 2
        },
        {
            "courseTitle": "System Cloud Learning",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000030143",
            "status": "Suspended",
            "rating": 3
        },
        {
            "courseTitle": "ต่ออายุใบอนุญาตครั้งที่ 1 มีอายุ 1 ปี",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/iVGojrKXObjmzY-wlS-fiw/1688379865/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjoyNDoxMCBFRFQgMjAyMw==/eot/CAFRAg1TDlUHVTUtdmEtZlIDAlBdAwVbDQcHAVJcVhZSUgUABVUGAFEHVVIBUwEAAGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000030124",
            "status": "Suspended",
            "rating": 4
        },
        {
            "courseTitle": "หลักสูตร Systematic Problem Solving",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013860",
            "status": "Not Evaluated",
            "rating": 5
        }
    ]

    const setDataNotfound = {
        wording: "Congratulations, you have no outstanding courses. If you wish to go over the lessons,",
        hostname: urlList.data.hostname
    }

    let mandatory = 'mandatory'
    let selfregister = 'selfregis'

    // UseState
    const [emty, setEmty] = useState(false);
    const [mandatoryList, setMandatoryList] = useState([])

    // Function
    async function getDataMylearning(username, type) {
        try {
            let res = await getDataMyLearning(username, type)
            if (res === "") {
                console.log("Data not found...")
                document.getElementById(mandatory).style.backgroundColor = '#4263EB';
                document.getElementById(mandatory).style.color = '#ffffff';
                setEmty(true)
            } else {
                document.getElementById(mandatory).style.backgroundColor = '#4263EB';
                document.getElementById(mandatory).style.color = '#ffffff';
                setMandatoryList(res)
                setEmty(false)
            }
        } catch (error) {
            document.getElementById(mandatory).style.backgroundColor = '#4263EB';
            document.getElementById(mandatory).style.color = '#ffffff';
            setEmty(true)
            console.log(error)
        }
    }

    async function getFilter(username, type) {
        if (type == selfregister) {
            document.getElementById(selfregister).style.backgroundColor = '#4263EB';
            document.getElementById(selfregister).style.color = '#ffffff';
            document.getElementById(mandatory).style.backgroundColor = '#ffffff';
            document.getElementById(mandatory).style.color = '#000000';
        } else if (type == mandatory) {
            document.getElementById(selfregister).style.backgroundColor = '#ffffff';
            document.getElementById(selfregister).style.color = '#000000';
            document.getElementById(mandatory).style.backgroundColor = '#4263EB';
            document.getElementById(mandatory).style.color = '#ffffff';
        } else {
            document.getElementById(mandatory).style.backgroundColor = '#4263EB';
            document.getElementById(mandatory).style.color = '#ffffff';
        }
        try {
            let res = await getDataMyLearning(username, type)
            if (res === "") {
                setEmty(true);
            } else {
                setEmty(false);
                setMandatoryList(res)
            }
        } catch (error) {
            setEmty(true);
            console.log(error)
        }
    }

    // useEffect
    useEffect(() => {
        // Mock up
        document.getElementById(mandatory).style.backgroundColor = '#4263EB';
        document.getElementById(mandatory).style.color = '#ffffff';

        document.getElementById(selfregister).style.background = '#ffffff';
        // getDataMylearning(urlList.data.username, mandatory)
    }, [])

    return (
        <>
            <div className="container">
                <div className='row mb-4'>
                    <div className='text-start'>
                        <h2>My Learning</h2>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-8 d-flex align-items-center'>
                            <button id={mandatory} className='btn-Default' onClick={() => getFilter(urlList.data.username, mandatory)}><small>Mandatory</small></button>
                            <button id={selfregister} className='btn-Default' onClick={() => getFilter(urlList.data.username, selfregister)}><small>Self-Register</small></button>
                        </div>
                        <div className='col-sm-12 col-md-4 d-flex align-items-center justify-content-end'>
                            <div className='text-end '>
                                <a className="goToPlan" href={`${urlList.data.hostname}/app/me/plans`} target='blank'><u><h5>Go to plan</h5></u></a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        {emty ? (<Found data={setDataNotfound}></Found>) :
                            (
                                <Swiper
                                    pagination={{
                                        dynamicBullets: false,
                                        clickable: true
                                    }}
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
                                        1440: {
                                            slidesPerView: 4,
                                            spaceBetween: 20,
                                        }
                                    }}
                                    modules={[Autoplay, Pagination]}
                                    className="mySwiper"
                                >
                                    {MockupLearningMandatory && MockupLearningMandatory.length > 0 ? MockupLearningMandatory.map((item) => (
                                        <div key={item.id}>
                                            <SwiperSlide className='mb-5'>
                                                <a href={item.link} target='blank'>
                                                    <Card variant="outlined" className="card">
                                                        <CardOverflow>
                                                            {item.image.substring(item.image.length - 3) === "mp4" ? (
                                                                <AspectRatio ratio="2">
                                                                    <CardCover>
                                                                        <video
                                                                            autoPlay
                                                                            loop
                                                                            muted
                                                                            poster={item.image}
                                                                        >
                                                                            <source
                                                                                src={item.image}
                                                                                type="video/mp4"
                                                                            />
                                                                        </video>
                                                                    </CardCover>
                                                                </AspectRatio>
                                                            ) : (
                                                                <AspectRatio ratio="2">
                                                                    <CardCover>
                                                                        <img
                                                                            src={item.image}
                                                                            className="card-img-top"
                                                                            alt={item.courseTitle}
                                                                        />
                                                                    </CardCover>
                                                                </AspectRatio>
                                                            )}
                                                        </CardOverflow>
                                                        <CardContent>
                                                            <Typography level="title-md"> <p className="cut-text-multi-1-line h6" alt="{item.courseTitle}">
                                                                {item.courseTitle}
                                                            </p></Typography>
                                                        </CardContent>
                                                        <CardOverflow variant="plain">
                                                            <Divider inset="context" />
                                                            <div className="card-Footer">
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className="rating">
                                                                        <RatingStars data={item.rating} />
                                                                    </div>
                                                                    <Buttons data={item.status} />
                                                                </div>
                                                            </div>
                                                        </CardOverflow>
                                                    </Card>
                                                </a>
                                            </SwiperSlide>
                                        </div>
                                    )) : []}
                                </Swiper>
                            )}
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}