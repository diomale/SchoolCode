//Question 1
let ticket = {
  from: "Sindol",
  to: "Olongapo",
  price: 97
};

console.log(`Ticket from: ${ticket.from}`)
console.log(`Ticket to: ${ticket.to}`)
console.log(`Ticket price: ${ticket.price}`)

//Question 2
let person = {}
person.name = "Diomale "
person.surname = "Romero";

let AllName = person.name + person.surname;
console.log(`Made by: ${AllName}`)

//Question 3
let books = [
  {
  title: "Speaking JavaScript" ,
  author: "Axel Rauschmayer",
  NoP: 460
  },

  {
  title: "Programming JavaScript Applications" ,
  author: "Eric Elliott",
  NoP: 254
  },

  {
  title: "Understanding ECMAScript 6" ,
  author: "Nicholas C. Zakas",
  NoP: 352
  }
]
//Question 4
let new_book = {
  title: "Learning JavaScript Design Patterns" ,
  author: "Addy Osmani",
  NoP: 252
}

books.push(new_book);

console.log(`Books total: ${books.length}`)
console.log(books)
console.log(`Book no.1 ${books[0].title}`)
console.log(`Book no.2 ${books[1].title}`)
console.log(`Book no.3 ${books[2].title}`)
console.log(`Book no.4 ${books[3].title}`)

//Question 5
let SelectedBooks = books.slice(-2)
console.log(SelectedBooks)

//Question 6
books.shift()
console.log(`total books: ${books.length}`)
console.log(`Book no.1 ${books[0].title}`)
console.log(`Book no.2 ${books[1].title}`)
console.log(`Book no.3 ${books[2].title}`)

//Question 7
let sum = books[0].NoP + books[1].NoP + books[2].NoP;

console.log(`pages sum: ${sum}`)
