import { getRegion } from './region';
import { isValidNIK } from './validate';
import type { NIKResult } from './types';

export function parseNIK(nik: string): NIKResult {
  const valid = isValidNIK(nik);

  if (!valid) {
    return {
      isValid: false,
      nik
    };
  }

  const dayRaw = parseInt(nik.slice(6, 8));
  const month = nik.slice(8, 10);
  const year = nik.slice(10, 12);

  const gender = dayRaw > 40 ? 'female' : 'male';
  const day = dayRaw > 40 ? dayRaw - 40 : dayRaw;

  const fullYear = parseInt(year) > 30 ? `19${year}` : `20${year}`;

  const region = getRegion(nik);

  return {
    isValid: true,
    nik,
    gender,
    birthDate: `${fullYear}-${month}-${String(day).padStart(2, '0')}`,
    region
  };
}