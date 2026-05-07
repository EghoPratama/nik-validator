import fs from "fs/promises";

const BASE_URL = "https://wilayah.id/api";

async function fetchJSON(url) {
  const res = await fetch(url);
  return res.json();
}

async function main() {
  const provinceRes = await fetchJSON(`${BASE_URL}/provinces.json`);
  const provinces = provinceRes.data;

  const result = {};

  for (const prov of provinces) {
    const provCode = prov.code;
    const provName = prov.name;

    console.log(`Fetching ${provName}...`);

    const regencyRes = await fetchJSON(
      `${BASE_URL}/regencies/${provCode}.json`
    );

    const regencies = regencyRes.data;

    regencies.forEach((reg) => {
      const code = reg.code.replace('.', ''); // PP + KK

      result[code] = {
        province: provName,
        city: reg.name
      };
    });
  }

  await fs.writeFile(
    "./src/region-data.json",
    JSON.stringify(result, null, 2)
  );

  console.log("✅ region-data.json generated!");
}

main();