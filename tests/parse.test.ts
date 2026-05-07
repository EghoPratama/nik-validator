import { describe, it, expect } from 'vitest';
import { parseNIK } from '../src/parse';

describe('parseNIK', () => {
  it('should parse valid NIK correctly', () => {
    const result = parseNIK('3203011509980001');

    expect(result.isValid).toBe(true);
    expect(result.gender).toBe('male');
    expect(result.birthDate).toBe('1998-09-15');
  });

  it('should return invalid for wrong NIK', () => {
    const result = parseNIK('123');

    expect(result.isValid).toBe(false);
  });

  it('should return female gender correctly', () => {
    const result = parseNIK('3203015509980001');
    expect(result.gender).toBe('female');
  });

  it('should return null region if not found', () => {
    const result = parseNIK('9999991509980001');
    expect(result.region).toBeNull();
  });
});