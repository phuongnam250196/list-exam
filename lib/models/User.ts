export namespace UserNS {
    export enum Gender {
        Male = "male",
        Female = "female"
    }

    export enum Role {
        Admin = "admin",
        Operator = "operator",
        Rider = "rider"
    }

    export interface Address {
        street: string,
        ward: string,
        district: string,
        province: string
    }


    export interface User {
        id: string;
        full_name: string;
        user_name: string;
        code: string;
        org_id: string;
        role: Role;
        gender: Gender;
        birthday: string;
        address: Address;
        email: string;
        phone: string;
        ctime: number;
        mtime: number;
        dtime?: number;
        modified_by?: string;
    }

    export interface CreateUserParams {
        full_name: string;
        user_name: string;
        code: string;
        role: Role;
        org_id: string;
        gender: Gender;
        birthday: string;
        address: Address;
        email: string;
        phone: string;
    }

    export interface UpdateUserParams {
        full_name?: string;
        code?: string;
        role?: Role;
        org_id?: string;
        gender?: Gender;
        birthday?: string;
        address?: Address;
        email?: string;
        phone?: string;
    }
}    