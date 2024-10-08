import { BookRepositoryInterface } from "../../../application/repositories/book";
import { BookEntity } from "../../../domain/entities/book";

export class BookRepositoryInMemory implements BookRepositoryInterface {
  public constructor(private readonly books: Array<BookEntity> = []) {}

  public async findAll(): Promise<BookEntity[]> {
    return this.books;
  }

  public async add(book: BookEntity): Promise<void> {
    this.books.push(book);
  }
}