import { BookEntity } from "../../domain/entities/book";

export interface BookRepositoryInterface {
  findAll(): Promise<Array<BookEntity>>;
  add(book: BookEntity): Promise<void>;
}