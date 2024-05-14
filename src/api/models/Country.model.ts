export type ViewCountry = {
    id: string;
    currency: string;
    area?: string;
    locale?: string;
}

export type CreateCountry = {
    currency: string;
    area?: string;
    locale?: string;
}

export type UpdateCountry = {
    id: string;
    currency: string;
    area?: string;
    locale?: string;
}