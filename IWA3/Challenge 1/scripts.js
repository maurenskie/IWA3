// configuration.js

export const company = 'ACME Inc.';
export const year = 2022;

// scripts.js

import { company, year } from './configuration';

const message = © ${company} (${year});
document.querySelector('footer').innerText = message;