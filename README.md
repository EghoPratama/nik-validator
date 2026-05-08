# 🇮🇩 nik-validator ID

Simple and lightweight utility to validate and parse Indonesian **NIK (Nomor Induk Kependudukan)**.

## ✨ Features

- ✅ Validate Indonesian NIK format
- 🎂 Parse birth date
- 👨 Detect gender
- 🗺️ Detect province, city and district
- ⚡ Fast and lightweight
- 🖥️ CLI support
- 📦 TypeScript support

---

## 📦 Installation

Using npm:

```bash
npm install @egho_pratama/nik-validator
```
---

## 🚀 Usage

```ts
import { parseNIK } from '@egho_pratama/nik-validator';

const result = parseNIK('3203015509980001');

console.log(result);
```

### Output

```json
{
  "isValid": true,
  "nik": "3203015509980001",
  "gender": "female",
  "birthDate": "1998-09-15",
  "region": {
    "province": "Jawa Barat",
    "city": "Kabupaten Cianjur",
    "district": "Cianjur"
  },
}
```

---

## 🖥️ CLI Usage

```bash
npx @egho_pratama/nik-validator 3203015509980001
```

Example output:

```bash
✔ Valid NIK
Gender     : female
Birth Date : 1998-09-15
Province   : Jawa Barat
City       : Kabupaten Cianjur
District   : Cianjur
```

---

## 📚 API Reference

### `parseNIK(nik)`

Parse Indonesian NIK information.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `nik` | `string` | Indonesian NIK number |

#### Returns

```ts
{
  isValid: boolean;
  nik: string;
  gender?: string;
  birthDate?: string;
  region: {
    province?: string;
    city?: string;
    district?: string;
  }
}
```

---

### `validateNIK(nik)`

Validate NIK format only.

#### Example

```ts
import { validateNIK } from '@egho_pratama/nik-validator';

console.log(validateNIK('3203015509980001'));
// true
```

---

## 🧪 Test Coverage

| Type | Coverage |
|------|----------|
| Statements | 95%+ |
| Functions | 100% |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to fork this repository and submit a pull request.

---

## License

MIT

![npm version](https://img.shields.io/npm/v/@egho_pratama/nik-validator)
![npm downloads](https://img.shields.io/npm/dm/@egho_pratama/nik-validator)
![license](https://img.shields.io/npm/l/@egho_pratama/nik-validator)