import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})

export const herokuAPI = {
    authHeroku(checked: boolean) {
        instance.post('', {success: checked})
            .then(res => console.log(res))
            .catch(rej => console.warn(rej))
    }
}