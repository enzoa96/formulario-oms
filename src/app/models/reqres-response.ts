import { Usuario } from '.';

export interface ReqResResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Usuario[];
  support: Support;
}

export interface ReqUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}
