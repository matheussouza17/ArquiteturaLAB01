import Book from './book';

class Library {
    private collection: Book[] = [];

    adicionarLivro(book: Book): void {
        this.collection.push(book);
    }

    registarEmprestimo(code: number): void {
        const book = this.collection.find(b => b.codigo === code);
        if (book && book.disponivel) {
            book.disponivel = false;
            console.log(`Loan made for the book: ${book.titulo}`);
        } else {
            console.log("Book not available for loan or not found.");
        }
    }

    consultarDisponibilidade(code: number): boolean {
        const book = this.collection.find(b => b.codigo === code);
        if (book) return book.disponivel;
        else {
            console.log("Book not found.");
            return false;
        }
    }
}
export default Library;
