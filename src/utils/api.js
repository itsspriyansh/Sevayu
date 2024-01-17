
export const register = async data => {
    const res = await fetch("https://sevayu-server.onrender.com/api/auth/hospital/register", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        },
    })
    const token = await res.json()
    return token.accessToken
}

export const login = async data => {
    const res = await fetch("https://sevayu-server.onrender.com/api/auth/hospital/login", {
        method: "POST",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    const token = await res.json()
    return token.accessToken
}

export const getHospitalData = async (hospitalId, jwt) => {
    const res = await fetch(`https://sevayu-server.onrender.com/api/hospital/${hospitalId}`, {
        method : "GET",
        headers : {
            "Authorization" : `Bearer ${jwt}`
        }
    })
    const data = await res.json()   
    return data
}

export const getDoctors = async (hospitalId, jwt) => {
    const res = await fetch(`https://sevayu-server.onrender.com/api/doctor/${hospitalId}`, {
        method : "GET",
        headers : {
            "Authorization" : `Bearer ${jwt}`
        }
    })
    const data = await res.json()
    return data
}

export const registerDoctor = async (doctorData, jwt) => {
    try {
        const res = await fetch(`https://sevayu-server.onrender.com/api/doctor/`, {
            method : "POST",
            body : JSON.stringify(doctorData),
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${jwt}`
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
