import Axios from "axios";
import { BASE_URL, SESSIONSTORAGE } from "../constances/const";
export class Http {
    constructor() { }

    static _getHeader() {
        if(typeof window !== "undefined") {
            return {
                "Authorization": `Bearer ${window.sessionStorage.getItem(SESSIONSTORAGE.TOKEN) || ''}`,
            }
        }
        return {
            "Authorization": "Bearer"
        }
    }

    static get = (endPoint : string) => {
        const options = {
            headers: this._getHeader(),
        };
        return Axios.get(BASE_URL + endPoint, options);
    };

    static post = (endPoint : string, payload : object) => {
        return Axios.post(BASE_URL + endPoint, payload, {
            headers: this._getHeader(),
        });
    };

    static put = (endPoint : string, payload : any) => {
        return Axios.put(BASE_URL + endPoint, payload, {
            headers: this._getHeader(),
        });
    };

    static patch = (endPoint : string, payload : object) => {
        return Axios.patch(BASE_URL + endPoint, payload, {
            headers: this._getHeader(),
        });
    };

    static delete = (endPoint : string, id : string) => {
        return Axios.delete(BASE_URL + endPoint + "/" + id, {
            headers: this._getHeader(),
        });
    };
}
