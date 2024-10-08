import { AddBookUsecase } from "../../../application/usecases/add-book";
import { ListBooksUsecase } from "../../../application/usecases/list-books";
import { BookRepositoryInMemory } from "../../adapters/repositories/book";
import { EmailServiceFake } from "../../adapters/services/email";
import { select, input } from "@inquirer/prompts";
import { printTable } from "console-table-printer";

const bookRepository = new BookRepositoryInMemory();
const emailService = new EmailServiceFake();

const addBookUsecase = new AddBookUsecase(
  bookRepository,
  emailService
);

const listBooksUsecase = new ListBooksUsecase(
  bookRepository
);

const main = async () => {
  const choice = await select({
    message: "Choisissez une option",
    choices: [
      {
        value: 1,
        name: "Ajouter un livre"
      },
      {
        value: 2,
        name: "Lister les livres"
      }
    ]
  });

  if (choice === 1) {
    const title = await input({
      message: "Nom du livre"
    });

    const isbn = await input({
      message: "ISBN pour ce livre"
    });

    const availableCopies = Number(await input({
      message: "Nombre de copies disponibles pour ce livre",
    }));

    await addBookUsecase.execute(title, isbn, availableCopies);
  } else {
    const books = await listBooksUsecase.execute();

    printTable(books);
  }

  await main();
};

main();