import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
const testReadWrite = async()=>{
    console.log("test baslıyor");
    const contacts = await readContacts();
    console.log("Okunan kisiler:",contacts);

    console.log("write fonksiyonu test ediliyor");
    const newContacts = [...contacts,{name:"Cırte",email:"cıtte@cırte.com",phone:"1111"}];
    await writeContacts(newContacts);
    console.log("yeni kisi eklendi");
    const updateContacts = await readContacts();
    console.log("güncellenmis kisiler: ",updateContacts);
};

testReadWrite();
