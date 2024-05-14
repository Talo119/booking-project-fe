export type ViewCountry = {
    id: string;
    name: string;
    currency: string;
    area?: string;
    locale?: string;
}

export type CreateCountry = {
    name: string;
    currency: string;
    area?: string;
    locale?: string;
}

export type UpdateCountry = {
    id: string;
    name: string;
    currency: string;
    area?: string;
    locale?: string;
}