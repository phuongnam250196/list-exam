import { Http } from "./../commons/http";
import { AuthNS } from "./../models/Auth";
import { SESSIONSTORAGE } from "./../constances/const";

const API_ENPOINT = {
    AUTH: 'auth/login'
}

async function Login(username: string, password: string): Promise<AuthNS.UserSession> {
    const res = await Http.post(API_ENPOINT.AUTH, { username, password });
    console.log('res', res)
    return res.data;
}

export const AuthAPi = {
    Login
}