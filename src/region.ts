import regionData from './region-data.json';

export function getRegion(nik: string) {
  const code = nik.slice(0, 4) as keyof typeof regionData;
  return regionData[code] || null;
}