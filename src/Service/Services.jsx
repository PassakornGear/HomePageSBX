/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import axios from "axios";

// Call Service 
const urlService = import.meta.env.VITE_API_SERVICE
const configAuth = {
    auth: {
        username: import.meta.env.VITE_USERNAME_BASIC_AUTH,
        password: import.meta.env.VITE_PASSWORD_BASIC_AUTH
    }
}

// getDataBanner
export async function getDataBanner() {
    let response = await axios.get(`${urlService}/banners`, configAuth)
    try {
        if (response.status === 200) {
            if (response.data === "") {
                console.log("Data not found...")
            } else {
                console.log(response.data)
            }
        } else {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }
    return (response.data)
}

// getDataExternal
export async function getDataExternal() {
    let response = await axios.get(`${urlService}/externalLearning`, configAuth)
    try {
        if (response.status === 200) {
            if (response.data === "") {
                console.log("Data not found...")
            } else {
                console.log(response.data)
            }
        } else {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }

    return (response.data)
}

// getDataHighlightedCourse
export async function getDataHighlightedCourse() {
    let response = await axios.get(`${urlService}/highlightedCourses`, configAuth)
    try {
        if (response.status === 200) {
            if (response.data === "") {
                console.log("Data not found...")
            } else {
                console.log(response.data)
            }
        } else {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }

    return (response.data)
}

// getDataTopCoures
export async function getDataTopCoures() {
    let response = await axios.get(`${urlService}/top10Courses`, configAuth)
    try {
        if (response.status === 200) {
            if (response.data === "") {
                console.log("Data not found...")
            } else {
                console.log(response.data)
            }
        } else {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }

    return (response.data)
}

// getDataCategories
export async function getDataInterestingCourse(username) {
    let response = await axios.get(`${urlService}/interestingCategories?username=${username}`, configAuth)
    try {
        if (response.status === 200) {
            if (response.data === "") {
                console.log("Data not found...")
            } else {
                console.log("interestingCategories")
            }
        } else {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }
    return (response.data)
}

export async function getDataMostCategories(username) {
    let response = await axios.get(`${urlService}/mostCategories?username=${username}`, configAuth)
    try {
        if (response.status === 200) {
            if (response.data === "") {
                console.log("Data not found...")
            } else {
                console.log("Most Categories")
            }
        } else {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }

    return (response.data)
}

// getDataOtherSources 
export async function getDataOtherSources() {
    let response = await axios.get(`${urlService}/otherSources`, configAuth)
    try {
        if (response.status === 200) {
            if (response.data === "") {
                console.log("Data not found...")
            } else {
                console.log(response.data)
            }
        } else {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }

    return (response.data)
}

// getDataRecommend
export async function getDataRecommed(username) {
    let response = await axios.get(`${urlService}/courseRecommend?username=${username}`, configAuth)
    try {
        if (response.status === 200) {
            if (response.data === "") {
                console.log("getDataRecommed Data not found...")
            } else {
                console.log(response.data)
            }
        } else {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }

    return (response.data)
}

// getDataMyLearning
export async function getDataMyLearning(usesrname, type) {
    let response = await axios.get(`https://csapp-tst.cloud.vlink.co.th/SBXHomepageServices/myLearning?username=${usesrname}&type=${type}`, configAuth)
    try {
        if (response.status === 200) {
            if (response.data === "") {
                console.log("getDataMyLearning Data not found...")
            } else {
                console.log(response.data)
            }
        } else {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }

    return (response.data)
}