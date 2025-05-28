import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try{
        const contacts = await readContacts();

        if(contacts.length > 0){
            await writeContacts([]);
            console.log("hepsi silindi");
        }else{
            console.log("zaten booos");
        }
    }catch(err){
        console.log(err);
    }
};

removeAllContacts();
