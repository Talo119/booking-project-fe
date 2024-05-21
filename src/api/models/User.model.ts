import { ViewCountry } from "./Country.model";

export type ViewUser = {
  id: string;
  name: string;
  email: string;
  img?: string;
  country: ViewCountry;
  roles?: Roles[];
};

export type CreateUser = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  img?: string;
  country: string;
  roles?: Roles[];
};

export type LoginUser = {
  email: string;
  password: string;
};

export type AuthenticatedUser = {
  ok:boolean;
  id: string;
  email: string;
  name: string;
  roles: Roles[];
  token: string;
}

export type Roles = "BUYER_ROLE" | "ADMIN_ROLE";
