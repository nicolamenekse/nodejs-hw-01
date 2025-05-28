import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    try{
        await fs.writeFile(PATH_DB,JSON.stringify(updatedContacts,null,2));
        console.log("veriler basarıyla yazıldı");
    }catch(err){
        console.log("Error message:",err.message);
    }
};

writeContacts();
