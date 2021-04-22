import { readFileSync } from 'fs';

export default (path) => readFileSync('./schemas/' + path, 'utf-8');
