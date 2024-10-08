import { BookRepositoryInterface } from "../repositories/book";

export class ListBooksUsecase {
  public constructor(private readonly bookRepository: BookRepositoryInterface) { }

  public async execute() {
    const books = await this.bookRepository.findAll();

    return books;
  }
}