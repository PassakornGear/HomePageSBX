/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Banner.css'

import { useState, useEffect } from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Call Service API
import { getDataBanner } from '../Service/Services';

// Image Mock up
import Banner1 from '../assets/Banner/Banner-1.jpg'
import Banner2 from '../assets/Banner/Banner-2.png'
import Banner3 from '../assets/Banner/Banner-3.png'

export default function Banner() {
    // Mock Data
    const MockDataBanner = [
        {
            "image": `${Banner1}`,
            "url": "https://www.cornerstoneondemand.com/",
            "order": 1
        },
        {
            "image": `${Banner2}`,
            "url": "https://www.cornerstoneondemand.com/",
            "order": 2
        },
        {
            "image": `${Banner3}`,
            "url": "https://www.cornerstoneondemand.com/",
            "order": 3
        }
    ]

    // useState
    const [BannerList, SetBannerList] = useState([])

    // Function
    async function Banner() {
        try {
            let Data = await getDataBanner()
            // console.table(Data)
            SetBannerList(Data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        Banner()
    }, []);

    return (
        <>
            <div className='Banner'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{
                        dynamicBullets: false,
                        clickable: true
                    }}
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    className="mySwiper"
                >
                    {MockDataBanner && MockDataBanner.length > 0 ? MockDataBanner.map((item) => (
                        <div key={item.id}>
                            <SwiperSlide className='mb-5'>
                                <div className='Banner' key={item.order}>
                                    <a href={item.url} target='__blank'> <img src={item.image} className='img-fluid' /></a>
                                </div>
                            </SwiperSlide>
                        </div>
                    )) : []}
                </Swiper>
            </div>
        </>
    )
}