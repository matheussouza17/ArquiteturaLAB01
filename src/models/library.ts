import Livro from './book';

class Library {
    private collection: Livro[] = [];

    public adicionarLivro(book: Livro): void {
        this.collection.push(book);
    }

    public registarEmprestimo(code: number): void {
        const book = this.collection.find(b => b.getCodigo() === code);
        if (book && book.isDisponivel()) {
            book.setDisponivel(false);
            console.log(`Empréstimo realizado para o livro: ${book.getTitulo()}`);
        } else {
            console.log("Livro não disponível para empréstimo ou não encontrado.");
        }
    }

    public consultarDisponibilidade(code: number): boolean {
        const book = this.collection.find(b => b.getCodigo() === code);
        if (book) return book.isDisponivel();
        else {
            console.log("Livro não encontrado.");
            return false;
        }
    }
}

export default Library;
