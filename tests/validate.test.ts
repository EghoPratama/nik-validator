import { describe, it, expect } from 'vitest';
import { isValidNIK } from '../src/validate';

describe('isValidNIK', () => {
  it('should return true for valid NIK', () => {
    expect(isValidNIK('3203011509980001')).toBe(true);
  });

  it('should return false for invalid length', () => {
    expect(isValidNIK('123')).toBe(false);
  });

  it('should return false for invalid date', () => {
    expect(isValidNIK('3203019909980001')).toBe(false);
  });
  
  it('should return false for invalid month', () => {
    expect(isValidNIK('3203011599980001')).toBe(false);
  });
});