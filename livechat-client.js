import axios from "axios"

const {
    LC_CLIENTID,
    LC_PAT
} = process.env;

export const client = axios.create({
    auth: {
        username: LC_CLIENTID,
        password: LC_PAT
    },
    headers: {
        'X-Region': LC_PAT.split(':')[0],
        'content-type': 'application/json'
    },
    baseURL: 'https://api.livechatinc.com/v3.3/'
})
