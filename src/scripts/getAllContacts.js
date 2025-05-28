import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        if (contacts.length === 0) {
            console.log("Kisi listeniz boş!");
            return;
        } else {
            console.log(contacts);
            return contacts;
        }
    } catch (err) {
        console.log(err);
    }
};
getAllContacts();
// console.log(await getAllContacts());
