/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

// Call Service API
import { getDataInterestingCourse, getDataMostCategories } from '../Service/Services'

// Reused
import Buttons from './Block/Button';
import RatingStars from './Block/Rating';
import Found from './Block/NotFound';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// MUI
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

// Css
import '../css/InterestingCategories.css';
import ArrowUp from '../assets/ArrowUpBlack.svg'

export default function InterestingCategories(urlList) {
    // MockData
    const MockdataInteresting = [
        {
            "courseTitle": "Edutainment Micro Learning (Guru)",
            "image": "https://vlink.sabacloud.com/content/prodencryption/kTsSkiXTX5St81d_HftG9Q/1695351883/0120VkVhRHhKVUh5M2QzYXdZRnRnTGR6VmhHSENZSndwekVTSTRnQzkrOFV5UXcyejlTTWVJOXN1RWVXM1c0eVcvZmd4bjlYNEN3ajRIVVc5bWV3MWpjM2c9PQ==VGh1IFNlcCAyMSAyMzowNDoyOCBFRFQgMjAyMw==/eot/cours000000000011619-110820-015657-557.mp4",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013859",
            "status": "Not Registered",
            "rating": 0.5
        },
        {
            "courseTitle": "หลักสูตร Changing for Growth",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013862",
            "status": "Overdue",
            "rating": 1
        },
        {
            "courseTitle": "Edutainment Micro Learning (Guru)",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013859",
            "status": "Re-Assigned",
            "rating": 1.5
        },
        {
            "courseTitle": "หลักสูตร Changing for Growth",
            "image": "https://vlink.sabacloud.com/content/prodencryption/kTsSkiXTX5St81d_HftG9Q/1695351883/0120VkVhRHhKVUh5M2QzYXdZRnRnTGR6VmhHSENZSndwekVTSTRnQzkrOFV5UXcyejlTTWVJOXN1RWVXM1c0eVcvZmd4bjlYNEN3ajRIVVc5bWV3MWpjM2c9PQ==VGh1IFNlcCAyMSAyMzowNDoyOCBFRFQgMjAyMw==/eot/cours000000000011619-110820-015657-557.mp4",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013862",
            "status": "Successful",
            "rating": 2
        },
        {
            "courseTitle": "Edutainment Micro Learning (Guru)",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "video": "https://vlink.sabacloud.com/content/prodencryption/kTsSkiXTX5St81d_HftG9Q/1695351883/0120VkVhRHhKVUh5M2QzYXdZRnRnTGR6VmhHSENZSndwekVTSTRnQzkrOFV5UXcyejlTTWVJOXN1RWVXM1c0eVcvZmd4bjlYNEN3ajRIVVc5bWV3MWpjM2c9PQ==VGh1IFNlcCAyMSAyMzowNDoyOCBFRFQgMjAyMw==/eot/cours000000000011619-110820-015657-557.mp4",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013859",
            "status": "Not Registered",
            "rating": 2.5
        },
        {
            "courseTitle": "หลักสูตร Changing for Growth",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "video": "https://vlink.sabacloud.com/content/prodencryption/7_nHeM5AXewUEog-Ql_auw/1695612552/0120VkVhRHhKVUh5M2QzYXdZRnRnTGR6VmhHSENZSndwekVTSTRnQzkrOFV5UXcyejlTTWVJOXN1RWVXM1c0eVcvZmd4bjlYNEN3ajRIVVc5bWV3MWpjM2c9PQ==U3VuIFNlcCAyNCAyMzoyODo1NyBFRFQgMjAyMw==/eot/cours000000000011619-110820-015657-557.mp4",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013862",
            "status": "Not Evaluated",
            "rating": 3
        },
        {
            "courseTitle": "Edutainment Micro Learning (Guru)",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013859",
            "video": "https://vlink.sabacloud.com/content/prodencryption/7_nHeM5AXewUEog-Ql_auw/1695612552/0120VkVhRHhKVUh5M2QzYXdZRnRnTGR6VmhHSENZSndwekVTSTRnQzkrOFV5UXcyejlTTWVJOXN1RWVXM1c0eVcvZmd4bjlYNEN3ajRIVVc5bWV3MWpjM2c9PQ==U3VuIFNlcCAyNCAyMzoyODo1NyBFRFQgMjAyMw==/eot/cours000000000011619-110820-015657-557.mp4",
            "status": "Re-Assigned",
            "rating": 3.5
        },
        {
            "courseTitle": "หลักสูตร Changing for Growth",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "video": "https://vlink.sabacloud.com/content/prodencryption/7_nHeM5AXewUEog-Ql_auw/1695612552/0120VkVhRHhKVUh5M2QzYXdZRnRnTGR6VmhHSENZSndwekVTSTRnQzkrOFV5UXcyejlTTWVJOXN1RWVXM1c0eVcvZmd4bjlYNEN3ajRIVVc5bWV3MWpjM2c9PQ==U3VuIFNlcCAyNCAyMzoyODo1NyBFRFQgMjAyMw==/eot/cours000000000011619-110820-015657-557.mp4",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013862",
            "status": "Successful",
            "rating": 4
        },
        {
            "courseTitle": "Edutainment Micro Learning (Guru)",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "video": "https://vlink.sabacloud.com/content/prodencryption/kTsSkiXTX5St81d_HftG9Q/1695351883/0120VkVhRHhKVUh5M2QzYXdZRnRnTGR6VmhHSENZSndwekVTSTRnQzkrOFV5UXcyejlTTWVJOXN1RWVXM1c0eVcvZmd4bjlYNEN3ajRIVVc5bWV3MWpjM2c9PQ==VGh1IFNlcCAyMSAyMzowNDoyOCBFRFQgMjAyMw==/eot/cours000000000011619-110820-015657-557.mp4",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013859",
            "status": "Not Registered",
            "rating": 4.5
        },
        {
            "courseTitle": "หลักสูตร Changing for Growth",
            "image": "https://vlink-tbac.sabacloud.com/content/prodencryption/y_JpO_1Q6vAKP_r90Ej7Kg/1620619138/0060VkVhRHhKVUh5M2QzYXdZRnRnTGR6WHFETWtIM09UdXhGM251RWx5NGNRVT0=U3VuIE1heSAwOSAyMzo1ODo0MyBFRFQgMjAyMQ==/eot/CwlQBwxTCVQJWjUtdmEtZlIDAlNVAgBaDQAGD11cVhZSUgUABVUGAFEHVVIGVAAACGYBW0AUEl0bMSh3.PNG",
            "video": "https://vlink.sabacloud.com/content/prodencryption/7_nHeM5AXewUEog-Ql_auw/1695612552/0120VkVhRHhKVUh5M2QzYXdZRnRnTGR6VmhHSENZSndwekVTSTRnQzkrOFV5UXcyejlTTWVJOXN1RWVXM1c0eVcvZmd4bjlYNEN3ajRIVVc5bWV3MWpjM2c9PQ==U3VuIFNlcCAyNCAyMzoyODo1NyBFRFQgMjAyMw==/eot/cours000000000011619-110820-015657-557.mp4",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/common/ledetail/cours000000000013862",
            "status": "Not Evaluated",
            "rating": 5
        },


    ]
    const MockDataCategories = [
        {
            "categoryName": "Inhouse Training",
            "image": "https://csapp-tst.cloud.vlink.co.th/resources/image/categories/fluent-mdl2_learning-tools.png",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/app/catalog/browse/categ000000000012120"
        },
        {
            "categoryName": "Onboarding",
            "image": "https://csapp-tst.cloud.vlink.co.th/resources/image/categories/partner_exchange.svg",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/app/catalog/browse/categ000000000001660"
        },
        {
            "categoryName": "Customer Service",
            "image": "https://csapp-tst.cloud.vlink.co.th/resources/image/categories/bx_support.png",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/app/catalog/browse/categ000000000001680"
        },
        {
            "categoryName": "Public Training",
            "image": "https://csapp-tst.cloud.vlink.co.th/resources/image/categories/fluent-mdl2_learning-tools.png",
            "link": "https://vlink.sabacloud.com/Saba/Web_spf/TNBTNT002/app/catalog/browse/categ000000000012121"
        }
    ]

    // Variable 
    const setDataNotfoundInteresting = {
        wording: "Interesting Categories,",
        hostname: urlList.data.hostname
    }
    const setDataNotfoundCategories = {
        wording: "Other courses, Click below,",
        hostname: urlList.data.hostname
    }

    // useState
    const [interrestingEmty, setInterrestingEmty] = useState(false)
    const [interrestingList, setInterrestingList] = useState([])

    const [CategoriesEmty, setCategoriesEmty] = useState(false)
    const [categoriesList, setCategoriesList] = useState([])

    // Function
    async function getInterresting(interresting) {
        try {
            let responseInterresting = await getDataInterestingCourse(interresting)
            if (responseInterresting === "") {
                setInterrestingEmty(true)
            } else {
                setInterrestingList(await responseInterresting)
                setInterrestingEmty(false)
            }

        } catch (error) {
            setInterrestingEmty(true)
            console.log(error)
        }
    }

    async function getCategories(Categories) {
        try {
            let responseCategories = await getDataMostCategories(Categories)
            if (responseCategories === "") {
                setCategoriesEmty(true)
            } else {
                setCategoriesList(await responseCategories)
                setCategoriesEmty(false)
            }
        } catch (error) {
            setCategoriesEmty(true)
            console.log(error)
        }
    }

    // useEffect
    useEffect(() => {
        // getInterresting(urlList.data.username)
        // getCategories(urlList.data.username)
    }, [])

    return (
        <>
            <div className="box-Categories mb-4">
                <div className="container">
                    <div className='row'>
                        <div className="text-start">
                            <h2>Courses in Interesting Categories</h2>
                        </div>
                        {interrestingEmty ? (<Found data={setDataNotfoundInteresting}></Found>) :
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
                                    {MockdataInteresting && MockdataInteresting.length > 0 ? MockdataInteresting.map((item) => (
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
                    </div>
                    <div className="row">
                        <div className="text-start mt-2">
                            <h5>Other categories, Click below.</h5>
                        </div>
                        {CategoriesEmty ? (<Found data={setDataNotfoundCategories}></Found>) :
                            (
                                <div className="grid-Categoies">
                                    {MockDataCategories && MockDataCategories.length > 0 ? MockDataCategories.map((items) => (
                                        <>
                                            <div key={items.id} className="box">
                                                <a href={items.link} target='blank'>
                                                    <div className="item-Box">
                                                        <div className="grid-Categoies-Content">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="icon-Box">
                                                                    <img src={items.image} />
                                                                </div>
                                                                <div className="text-start cut-text-multi-1-line">
                                                                    <small className="h6">{items.categoryName}</small>
                                                                </div>
                                                                <div className="icon-Box">
                                                                    <img src={ArrowUp} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </>
                                    )) : []}
                                </div>
                            )}
                    </div>
                </div>
            </div >
        </>
    )
}