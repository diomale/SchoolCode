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

let choose = Number(
  prompt(
    "Choose an option:\n" +
    "(1) Show the FIRST contact\n" +
    "(2) Show the LAST contact\n" +
    "(3) Add a NEW contact"
  )
);

let result;

switch (choose) {
  case 1:
    let first = contacts[0];
    result = `Name: ${first.name}\nPhone: ${first.phone}\nEmail: ${first.email}`;
    break;

  case 2:
    let last = contacts[contacts.length - 1];
    result = `Name: ${last.name}\nPhone: ${last.phone}\nEmail: ${last.email}`;
    break;

  case 3:
    let newName = prompt("Enter the name:");
    let newPhone = prompt("Enter the phone number:");
    let newEmail = prompt("Enter the email address:");

    if (newName && newPhone && newEmail) {
      contacts.push({
        name: newName,
        phone: newPhone,
        email: newEmail
      });

      result = "New contact added successfully!\n\nUpdated last contact:\n" +
        `Name: ${contacts[contacts.length - 1].name}\n` +
        `Phone: ${contacts[contacts.length - 1].phone}\n` +
        `Email: ${contacts[contacts.length - 1].email}`;
    } else {
      result = "All fields are required to add a new contact.";
    }
    break;

  default:
    result = "Invalid choice. Please select 1, 2, or 3.";
}

alert(result);
