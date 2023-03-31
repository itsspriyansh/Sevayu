
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

export const getHospitalData = async userId => {
    const res = await fetch(`https://sevayu-server.onrender.com/api/hospital/hospital/${userId}`)
    const data = await res.json()
    return data
}

export const getDoctors = async hospitalId => {
    const res = await fetch(`https://sevayu-server.onrender.com/api/doctor/getAll`, {
        method : "GET",
        body : JSON.stringify({hospitalid : hospitalId}),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    const data = await res.json()
    console.log(data)
    return data
}
