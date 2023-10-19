/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"

// Call Service API
import { getDataRecommed } from "../Service/Services";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// CSS
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/Recommend.css'

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

// Reused
import RatingStars from './Block/Rating';
import Buttons from './Block/Button';
import Found from './Block/NotFound';


export default function Recommend(urlList) {
    // MockData
    const MockDataRecomment = [
        {
            "courseId": "HR-9001",
            "courseTitle": "Stress Management in the Workplace",
            "detail": "This course helps identify the causes of stress, recognize the different types of stress, understand how stress affects them, and manage stress effectively both on and off the job. The benefits to you, the employer, are numerous, from lower healthcare costs to increased employee productivity.",
            "image": "https://vlink.sabacloud.com/content/prodencryption/kTsSkiXTX5St81d_HftG9Q/1695351883/0120VkVhRHhKVUh5M2QzYXdZRnRnTGR6VmhHSENZSndwekVTSTRnQzkrOFV5UXcyejlTTWVJOXN1RWVXM1c0eVcvZmd4bjlYNEN3ajRIVVc5bWV3MWpjM2c9PQ==VGh1IFNlcCAyMSAyMzowNDoyOCBFRFQgMjAyMw==/eot/cours000000000011619-110820-015657-557.mp4",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000011480",
            "status": "Not Registered",
            "rating": 3.5
        },
        {
            "courseId": "HR-4050",
            "courseTitle": "Approaches to Successful Public Speaking",
            "detail": "This course will examine the sources and role of anxiety in public speaking and, more importantly, how to manage it. Work will include practical exercises and speaking assignments designed to increase your confidence and build your skills as a speaker. We will also focus on managing nerves, voice, and body movement during speaking. This course is designed for professionals seeking effective approaches to public speaking and methods to manage the anxiety of communicating with groups of any size.",
            "image": "https://na1t1.sabacloud.com/content/prodencryption/7Mw8rgd0F1vq4pO-HM5xeQ/1688378877/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=TW9uIEp1bCAwMyAwNjowNzo0MiBFRFQgMjAyMw==/eot/CApRBwZQClAEVjUtdmEtZlIDAlBWAwBQDgMCAlFcVhZSUgUABVUGAFEHVVIFVgEFAWYBW0AUEl0bKzZ1Iw.JPEG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000011579",
            "status": "Not Registered",
            "rating": 3
        },
        {
            "courseId": "NH-500",
            "courseTitle": "Interpersonal Communication",
            "detail": "This course will help develop greater interpersonal communication skills by providing insights into communication skills, negotiation techniques, tips on making an impact and advice on getting the most from your conversations and meetings with others.",
            "image": "https://vlink.sabacloud.com/content/prodencryption/kTsSkiXTX5St81d_HftG9Q/1695351883/0120VkVhRHhKVUh5M2QzYXdZRnRnTGR6VmhHSENZSndwekVTSTRnQzkrOFV5UXcyejlTTWVJOXN1RWVXM1c0eVcvZmd4bjlYNEN3ajRIVVc5bWV3MWpjM2c9PQ==VGh1IFNlcCAyMSAyMzowNDoyOCBFRFQgMjAyMw==/eot/cours000000000011619-110820-015657-557.mp4",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000001683",
            "status": "Not Registered",
            "rating": 2
        }
    ]

    // Variable
    const setDataNotfoundRecommended = {
        wording: "Recommended Courses for You,",
        hostname: urlList.data.hostname
    }

    // UseState 
    const [recommendEmty, setRecommendEmty] = useState(false)
    const [recommendList, setRecommendList] = useState([])

    // Function
    async function getRecommended(username) {
        try {
            let responseRecommended = await getDataRecommed(username)
            if (responseRecommended === "") {
                setRecommendEmty(true)
            } else {
                setRecommendList(responseRecommended)
                setRecommendEmty(false)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRecommended(urlList.data.username)
    }, [])

    return (
        <>
            <div className="container mb-4">
                <div className='row'>
                    <div className='text-start'>
                        <h2>Recommended Courses for You</h2>
                    </div>
                    {recommendEmty ? (<Found data={setDataNotfoundRecommended}></Found>) : (
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
                            {MockDataRecomment && MockDataRecomment.length > 0 ? MockDataRecomment.map((item) => (
                                <div key={item.courseId}>
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
                </div>
            </div >
        </>
    )
}