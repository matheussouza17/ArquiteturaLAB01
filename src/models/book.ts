class Livro {
    private codigo: number;
    private titulo: string;
    private autor: string;
    private disponivel: boolean;

    constructor(code: number, title: string, author: string, available: boolean = true) {
        this.codigo = code;
        this.titulo = title;
        this.autor = author;
        this.disponivel = available;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public isDisponivel(): boolean {
        return this.disponivel;
    }

    public setDisponivel(status: boolean): void {
        this.disponivel = status;
    }
}

export default Livro;
