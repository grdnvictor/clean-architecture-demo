import { BookEntity } from "../../domain/entities/book";
import { Isbn } from "../../domain/value-objects/isbn";
import { BookRepositoryInterface } from "../repositories/book";
import { EmailServiceInterface } from "../services/email";

export class AddBookUsecase {
  public constructor(
    private readonly bookRepository: BookRepositoryInterface,
    private readonly emailService: EmailServiceInterface
  ) {}

  public async execute(title: string, isbn: string, availableCopies: number) {
    const book = new BookEntity(new Isbn(isbn), title, availableCopies);

    await this.bookRepository.add(book);
    await this.emailService.sendMail("client@domain.com", "noreply@domain.com", "Livre ajouté", `Un livre vient d'être ajouté:  ${book.title}`);
  }
}