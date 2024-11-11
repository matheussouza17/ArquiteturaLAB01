import Book from './models/book';
import Library from './models/library';

function registerBooks(library: Library) {
    const book1 = new Book(1, "Entrevista com o Diabo", "Karl Peter Leihs");
    const book2 = new Book(2, "O Gladiador", "1984");
    const book3 = new Book(3, "Bible", "Bible");

    library.adicionarLivro(book1);
    library.adicionarLivro(book2);
    library.adicionarLivro(book3);

    console.log("Livros registrados na coleção.");
}

function makeLoan(library: Library, code: number) {
    library.registarEmprestimo(code);
}

function checkAvailability(library: Library, code: number) {
    const available = library.consultarDisponibilidade(code);
    console.log(`O livro com código ${code} está ${available ? "disponível" : "indisponível"}.`);
}

function main(){
    const library = new Library();
    registerBooks(library);
    makeLoan(library, 1);
    checkAvailability(library, 1);
    checkAvailability(library, 2);
}

main();
