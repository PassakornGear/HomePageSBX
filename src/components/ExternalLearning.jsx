/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

// Call service API 
import { getDataExternal } from '../Service/Services'

// Image
import Udemy from '../assets/ExternalLearning/Udemy.png'

// Call CSS
import '../css/ExternalLearning.css'

export default function ExternalLearning() {
    // MockData
    const MockLearning = [
        {
            "image": "https://csapp-tst.cloud.vlink.co.th/resources/image/extlearning/SkillLane.png",
            "url": "https://www.skilllane.com/",
            "order": 1
        },
        {
            "image": "https://csapp-tst.cloud.vlink.co.th/resources/image/extlearning/BrighterBee.png",
            "url": "https://brighterbee.co/",
            "order": 2
        },
        {
            "image": "https://csapp-tst.cloud.vlink.co.th/resources/image/extlearning/Coursera.png",
            "url": "https://www.coursera.org/",
            "order": 3
        },
        {
            "image": `${Udemy}`,
            "url": "https://business.udemy.com/",
            "order": 4
        },
        {
            "image": "https://csapp-tst.cloud.vlink.co.th/resources/image/extlearning/TBAC.png",
            "url": "https://www.tbac.or.th/",
            "order": 5
        },
        {
            "image": "https://csapp-tst.cloud.vlink.co.th/resources/image/extlearning/chula.png",
            "url": "https://mooc.chula.ac.th/",
            "order": 6
        }
    ]

    // UseState
    const [learningList, setLearningList] = useState([])

    // Function
    async function Learning() {
        try {
            let data = await getDataExternal()
            setLearningList(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        Learning()
    }, []);


    return (
        <>
            <div className="container">
                <div className='row mb-4'>
                    <div className='grid-Learning con-transition'>
                        {MockLearning && MockLearning.length > 0 ? MockLearning.map((items) => (
                            <>
                                <div className='item transition' key={items.order}>
                                    <a href={items.url} target='blank'>
                                        <div className='grid-Content-Learning'>
                                            <div className='img-contatiner'>
                                                <img src={items.image} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </>
                        )) : []}
                    </div>
                </div>
            </div>
        </>
    )
}