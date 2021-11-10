import { UserNS } from "./User";

export namespace AuthNS {
    export interface UserSession {
        id: string;
        user_id: string;
        status : "active" | "deactive";
    }

    export interface UserData {
        session : UserSession;
        user : UserNS.User;
    }
}    