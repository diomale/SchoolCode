let contacts = [
  {
  name: "Maxwell Wright",
  phone: "(0191) 719 6495",
  email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  }, 
  {
  name: "Raja Villarreal",
  phone: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
  }, 
  {
  name: "Helen Richards",
  phone: "0800 1111",
  email: "libero@convallis.edu"
  }
];

let new_contact = {
  name: "Maisie Haley",
  phone: "0913 531 3030",
  email: "lrisus.Quisque@urna.ca."
}
contacts.push(new_contact)

let first_contact = contacts[0].name + ' / ' + contacts[0].phone + ' / ' + contacts[0].email;
let last_contact = `${contacts[contacts.length-1].name} / ${contacts[contacts.length-1].phone} / ${contacts[contacts.length-1].email}`;


console.log(`total contacts: ${contacts.length}`)
console.log(`contact no1: ${first_contact}`)
console.log(`last contact: ${last_contact}`)



let summer = ["June", "July", "August"];
let index = summer.indexOf("June");
 console.log(index)