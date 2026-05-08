export type Gender = 'male' | 'female';

export interface Region {
  province: string;
  city: string;
  district: string;
}

export interface NIKResult {
  isValid: boolean;
  nik: string;
  gender?: Gender;
  birthDate?: string;
  region?: Region | null;
}