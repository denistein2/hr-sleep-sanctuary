import fs from 'fs';

const content = fs.readFileSync('src/data/products.ts', 'utf8');

// Regex to extract the products array content
const productsMatch = content.match(/export const products: Product\[\] = \[([\s\S]*?)\];\n\nexport function/);
let productsStr = productsMatch[1];

// A bit risky to parse, let's use a dynamic approach.
// We can transpile the TS to JS, or just use `ts-node` or `vite-node`.
