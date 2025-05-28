import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    try{
        const availableContacts = await readContacts();

        const newContacts = Array.from({length:number},()=>createFakeContact());

        const updatedContacts = [...availableContacts,...newContacts];

        await writeContacts(updatedContacts);

        console.log(`${number} kadar kisi eklendi`);

    }catch(err){
        console.log("Error Message: ",err.message);
    }
};

generateContacts(5);
