import { ViewCountry } from "./Country.model";

export type ViewUser = {
    id: string;
    name: string;
    email:string;
    img?: string;
    country: ViewCountry;
    roles?: Roles[];
};

export type CreateUser = {
    name: string;
    email: string;
    password: string;
    img?: string;
    country: string;
    roles?: Roles[];
};

type Roles = 'BUYER_ROLE' | 'ADMIN_ROLE'