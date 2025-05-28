import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try{
        const contacts =  await readContacts();
        console.log(contacts);
    }catch(err){
        console.log(err);
    }
};
getAllContacts();
// console.log(await getAllContacts());
