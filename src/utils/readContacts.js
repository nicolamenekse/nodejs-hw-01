import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try{
        const data = await fs.readFile(PATH_DB,"utf-8");
        return JSON.parse(data);
    }catch(err){
        console.log("Error Message:",err.message);
        return [];
    }
};
