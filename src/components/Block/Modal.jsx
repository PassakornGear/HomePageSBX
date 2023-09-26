/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import img from '../../assets/Popup/annouce.png'

// css
import './css/Modal.css'

export default function Modal(username) {

    async function handleCloseModal(username) {
        const now = new Date();
        // Calculate the expiration time for midnight of the next day
        // const expirationDate = new Date(now);
        // expirationDate.setHours(0, 0, 0, 0); // Set the time to midnight
        // expirationDate.setDate(expirationDate.getDate() + 1); // Move to the next day
        // const cookieValue = username + `=${username.trim()}; expires=${expirationDate.toUTCString()}; path=/; secure; SameSite=None`;
        // document.cookie = cookieValue;
        const myModal = document.getElementById("myModal")
        myModal.style.display = "none"
    }

    // Get Cookie ครั้งเดียว
    async function getCookie(Username) {
        const cookies = document.cookie.split(';')
        const myModalId = document.getElementById("myModal")
        if (cookies && cookies.length > 0) {
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.startsWith(Username + '=')) {
                    myModalId.style.display = "none";
                } else {
                    myModalId.style.display = "block";
                }
            }
        } else {
            myModalId.style.display = "block";
            console.log('Cookie not found.');
        }
    }

    const getScreenHeight = () => {
        window.addEventListener('resize', function () {
            // Get the screen height
            let screenHeight = window.screen.height;
            // Set the element's height to match the screen height
            let element = document.getElementById('modal-content');
            element.style.height = screenHeight;
        });

        // Trigger the event on initial load
        window.dispatchEvent(new Event('resize'));
    }

    useEffect(() => {
        // getScreenHeight()
        getCookie(username.data)
    }, [])

    return (
        <>
            <div id="myModal" className="modal">
                <div id='modal-content'>
                    <div className='modal-image'>
                        <div className='text-end'><i className="fas fa-times" onClick={() => handleCloseModal(username.data)}></i></div>
                        <img src={img} />
                    </div>
                </div>
            </div>
        </>
    )
}