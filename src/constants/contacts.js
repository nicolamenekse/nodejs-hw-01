import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

export const PATH_DB = path.join(dirName,"../db/db.json");


