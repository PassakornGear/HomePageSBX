/* eslint-disable no-unused-vars */
import '../css/SearchCourses.css';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

export default function Search(hostname) {
    // useState
    const [searchText, setSearchText] = useState('');

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            try {
                const urlSearchs = `${hostname.data}/app/catalog/search?selectedTab=LEARNINGEVENT&searchText="${searchText}"`
                window.open(urlSearchs, '_blank');
                setSearchText('')
            } catch (error) {
                console.log(error)
            }
        }
    };

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h4>Search Courses</h4>
                        <div className='d-flex justify-content-center'>
                            <div className='box-Input'>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={searchText}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                    placeholder="What do want to learn ?"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}