import fs from 'fs';
import { argv } from 'yargs';

import parse from './parser';
import { stringify } from './regfile-output';

const [inFile] = argv._;

const obj = JSON.parse(fs.readFileSync(inFile, { encoding: 'utf-8' }));

console.log(stringify(parse(obj)));
