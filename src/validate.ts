export function isValidNIK(nik: string): boolean {
  if (!/^\d{16}$/.test(nik)) return false;

  const day = parseInt(nik.slice(6, 8));
  const month = parseInt(nik.slice(8, 10));
  const year = parseInt(nik.slice(10, 12));

  if (month < 1 || month > 12) return false;

  const realDay = day > 40 ? day - 40 : day;
  if (realDay < 1 || realDay > 31) return false;

  return true;
}