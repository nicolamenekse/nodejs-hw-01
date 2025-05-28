import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try{
        const contacts = await readContacts();
        const index = contacts.length;
        console.log(index);

    }catch(err){
        console.log(err);
    }
};

countContacts();
// console.log(await countContacts());
