/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

// Call Service API
import { getDataOtherSources } from "../Service/Services";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Image
import image1 from '../assets/RecommendByVlink/Recommend_1.png'
import image2 from '../assets/RecommendByVlink/Recommend_2.png'
import image3 from '../assets/RecommendByVlink/Recommend_3.png'
import image4 from '../assets/RecommendByVlink/Recommend_4.png'
import image5 from '../assets/RecommendByVlink/Recommend_5.png'

import image6 from '../assets/RecommendByVlink/1.png'
import image7 from '../assets/RecommendByVlink/2.png'
import image8 from '../assets/RecommendByVlink/3.png'
import image9 from '../assets/RecommendByVlink/4.png'
import image10 from '../assets/RecommendByVlink/5.png'
import image11 from '../assets/RecommendByVlink/6.png'

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/otherSources.css';

export default function other() {
    // MockData
    const MockupPillar = {
        "title": "Recommend by VLink",
        "order": 1,
        "items": [
            {
                "itemName": "Beyond Banking",
                "itemImg": `${image6}`,
                "itemOrder": 1,
                "itemUrl": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/app/workspace/detail/pgcnt000000000013559"
            },
            {
                "itemName": "Beyond Banking",
                "itemImg": `${image11}`,
                "itemOrder": 1,
                "itemUrl": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/app/me/playlist-detail/playl000000000001000"
            },
            {
                "itemName": "WBG",
                "itemImg": `${image7}`,
                "itemOrder": 2,
                "itemUrl": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/app/me/ledetail;spf-url=common%2Flearningeventdetail%2Fcurra000000000001660%3Freturnurl%3Dcatalog%252Fsearch%2526searchText%253DNew%252520Hire%252520Onboarding"
            },
            {
                "itemName": "KBAC",
                "itemImg": `${image8}`,
                "itemOrder": 3,
                "itemUrl": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/app/shared/calendar;spf-url=common%2Fcalendar%2F"
            },
            {
                "itemName": "Credit",
                "itemImg": `${image9}`,
                "itemOrder": 4,
                "itemUrl": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/app/me/reward/mywallet"
            },
            {
                "itemName": "Payment",
                "itemImg": `${image10}`,
                "itemOrder": 5,
                "itemUrl": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/app/shared;spf-url=common%2Fgroupdetail%2Fteams000000000003005"
            },
        ]
    }

    const MockupKlever = {
        "title": "Products by VLink",
        "order": 2,
        "items": [
            {
                "itemName": "Compulsory",
                "itemImg": `${image1}`,
                "itemOrder": 1,
                "itemUrl": "https://kdwise.sabacloud.com/Saba/Web_spf/A501PRD0036/app/workspace/detail/pgcnt000000000063131"
            },
            {
                "itemName": "รู้จักโครงสร้างธนาคาร",
                "itemImg": `${image2}`,
                "itemOrder": 2,
                "itemUrl": "https://kasikornbankgroup.sharepoint.com/sites/KBank/HRE/DocLib/Forms/AllItems.aspx?viewid=def67983%2D32a1%2D4e4d%2Dad1a%2D887fe3450ff2"
            },
            {
                "itemName": "Onward",
                "itemImg": `${image3}`,
                "itemOrder": 3,
                "itemUrl": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/learningeventdetail/curra000000000001660"
            },
            {
                "itemName": "Product Manager",
                "itemImg": `${image4}`,
                "itemOrder": 4,
                "itemUrl": "https://kdwise.sabacloud.com/Saba/Web_spf/A501PRD0036/app/workspace/detail/pgcnt000000000063041"
            },
            {
                "itemName": "Project Management",
                "itemImg": `${image5}`,
                "itemOrder": 5,
                "itemUrl": "https://kdwise.sabacloud.com/Saba/Web_spf/A501PRD0036/app/workspace/detail/pgcnt000000000055683"
            },
        ]
    }

    // State 
    const [PillarList, setPillarList] = useState({})
    const [KleverList, setKleverList] = useState({})

    // Function
    async function Other() {
        try {
            const res = await getDataOtherSources()
            setPillarList(res[0])
            setKleverList(res[1])
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        Other()
    }, []);

    return (
        <>
            <div className='container mt-4'>
                <div className='row'>
                    <div className="mb-2">
                        <div className='col-12'>
                            <div className='text-start'>
                                <h2>{MockupPillar.title}</h2>
                            </div>
                        </div>
                        <div className='col-12'>
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
                                        spaceBetween: 30,
                                    },
                                    1440: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    }
                                }}
                                className="mySwiper"
                            >
                                {MockupPillar.items && MockupPillar.items.map(itemsList => (
                                    <>
                                        <SwiperSlide className="mb-5">
                                            <div className='Pillar'>
                                                <div key={itemsList.order}>
                                                    <a href={itemsList.itemUrl} target='blank'>
                                                        <figure><img src={itemsList.itemImg} alt={itemsList.itemName} /></figure>

                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <div className='col-12'>
                        <div className='text-start'>
                            <h2>{MockupKlever.title}</h2>
                        </div>
                    </div>
                    <div className='col-12'>
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
                                    spaceBetween: 30,
                                },
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                }
                            }}
                            className="mySwiper"
                        >
                            {MockupKlever.items && MockupKlever.items.map(itemsList => (
                                <>
                                    <SwiperSlide className="mb-5">
                                        <div className='Pillar'>
                                            <div key={itemsList.order}>
                                                <a href={itemsList.itemUrl} target='blank'>
                                                    <figure><img src={itemsList.itemImg} alt={itemsList.itemName} /></figure>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}