export type Gender = 'male' | 'female';

export interface Region {
  province: string;
  city: string;
}

export interface NIKResult {
  isValid: boolean;
  nik: string;
  gender?: Gender;
  birthDate?: string;
  regionCode?: string;
  region?: Region | null;
}