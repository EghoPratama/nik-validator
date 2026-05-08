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

    console.log(`📦 Province: ${provName}`);

    const regencyRes = await fetchJSON(
      `${BASE_URL}/regencies/${provCode}.json`
    );

    const regencies = regencyRes.data;

    for (const reg of regencies) {
      const regCode = reg.code;
      const regName = reg.name;

      console.log(`  └─ Fetching districts: ${regName}`);

      const districtRes = await fetchJSON(
        `${BASE_URL}/districts/${regCode}.json`
      );

      const districts = districtRes.data;

      districts.forEach((district) => {
        // district code example:
        // 32.03.01
        // NIK only uses first 6 digits:
        // 320301

        const nikRegionCode = district.code.replace(/\./g, "").slice(0, 6);

        result[nikRegionCode] = {
          province: provName,
          city: regName,
          district: district.name,
        };
      });
    }
  }

  await fs.writeFile(
    "./src/region-data.json",
    JSON.stringify(result, null, 2)
  );

  console.log("✅ region-data.json generated!");
}

main();