import { ViewCountry } from "./Country.model";

export type ViewUser = {
    id: string;
    name: string;
    img?: string;
    country: ViewCountry;
    roles?: Roles[];
};

export type CreateUser = {
    name: string;
    img?: string;
    country: ViewCountry;
    roles?: Roles[];
};

type Roles = 'BUYER_ROLE' | 'ADMIN_ROLE'