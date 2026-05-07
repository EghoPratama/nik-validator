#!/usr/bin/env node

import { parseNIK } from './parse';

const args = process.argv.slice(2);

const nik = args[0];

if (!nik) {
  console.log("❌ Please provide NIK");
  console.log("Example:");
  console.log("npx nik-id-validator 3203011509980001");
  process.exit(1);
}

const result = parseNIK(nik);

console.log(JSON.stringify(result, null, 2));