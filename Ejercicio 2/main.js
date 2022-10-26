const user = {
    name: "Cristina",
    lasName: "La Veneno",
    id: 69,
}

const user2 = {
    name: "Paca",
    lasName: "La Piraña",
    id: 96,
}

const book1 = {
    title: "Digo! Ni puta Ni santa",
    author: "Valeria Vegas",
    isbn: "123123123",
    category: "Obligatory literature",
}

const book2 = {
    title: "Veneno. De Adra a las estrellas",
    author: "Valeria Vegas",
    isbn: "456456456",
    category: "Optional literature",
}


user.books = [book1, book2]
// console.log(user);


const library = [user, user2]
// console.log(library);


const book3 = {
    title: "Efecto Mariposa",
    author: "La Jedet",
    isbn: "789789879",
    category: "Poesía",
}

user.books.push(book3)

// console.log(user.books);





