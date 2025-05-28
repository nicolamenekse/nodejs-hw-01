import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try{
        const contacts = await readContacts();
        if(contacts.length ===0){
            console.log("Dizi bos");
            return;
        }

        const removeLastContact = contacts.pop();
        await writeContacts(contacts);
        console.log(removeLastContact);
    }catch(err){
        console.log(err);
    }
};

removeLastContact();
