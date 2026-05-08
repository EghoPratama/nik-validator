# nik-validator ID

Simple utility to validate and parse Indonesian NIK (Nomor Induk Kependudukan).

## Features

- Validate NIK format
- Parse birth date
- Detect gender
- Detect province & city
- CLI support
- TypeScript support

---

## Installation

npm install @egho_pratama/nik-validator

---

## Usage

import { parseNIK } from '@egho_pratama/nik-validator';

const result = parseNIK('3203015509980001');

console.log(result);

---

## Example Output

{
  "isValid": true,
  "gender": "female",
  "birthDate": "1998-09-15",
  "province": "Jawa Barat",
  "city": "Kabupaten Cianjur"
}

---

## CLI Usage

npx @egho_pratama/nik-validator 3203015509980001

---

## API

### parseNIK(nik)

Parse Indonesian NIK information.

### validateNIK(nik)

Validate NIK format only.

---

## Coverage

- Statements: 95%+
- Functions: 100%

---

## License

MIT

![npm version](https://img.shields.io/npm/v/@egho_pratama/nik-validator)
![npm downloads](https://img.shields.io/npm/dm/@egho_pratama/nik-validator)
![license](https://img.shields.io/npm/l/@egho_pratama/nik-validator)