class Livro {
    codigo: number;
    titulo: string;
    autor: string;
    disponivel: boolean;

    constructor(code: number, title: string, author: string, available: boolean = true) {
        this.codigo = code;
        this.titulo = title;
        this.autor = author;
        this.disponivel = available;
    }
}
export default Livro;
