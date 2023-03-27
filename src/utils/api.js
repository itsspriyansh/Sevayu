
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
