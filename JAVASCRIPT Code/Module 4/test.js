let contacts = [{
  name: "Maxwell Wright",
  phone: "(0191) 719 6495",
  email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  }, {
  name: "Raja Villarreal",
  phone: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
  }, {
  name: "Helen Richards",
  phone: "0800 1111",
  email: "libero@convallis.edu"
}];



let text = prompt("display the first contact (first)\n display the last contact (last)\n display all contacts (all)\n add a new contact (new)\n exit the program (quit) ");

let command = text.toLowerCase();

switch(command){
  case "first": alert( `${contacts[0].name}\n ${contacts[0].phone}\n ${contacts[0].email}`); break;

  case "last": alert(contacts[contacts.length - 1].name); break;
}

