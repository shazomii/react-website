import API from "../../components/utils/api"

export const login = (email, pass) => {
    return (dispatch) => {
        API.login(email, pass, res => {
            console.log("Result is ", res.data);
            dispatch({
                type: 'LOGIN',
                payload: {email,
                token: res.data.id,
            userId: res.data.userId}
            })
        })
    }
    // return {
    //     type: 'LOGIN',
    //     payload: {email, pass}
    // }
}

// export const register = (email, pass) => {
//     return {
//         type: 'REGISTER',
//         payload: {email, pass}
//     }
// }