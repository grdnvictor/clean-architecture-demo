import { NotEnoughAvailableCopiesError } from "../errors/not-enough-available-copies";
import { Isbn } from "../value-objects/isbn";

export class BookEntity {
  public constructor(
    public isbn: Isbn,
    public title: string,
    public availableCopies: number
  ) {}

  public increaseAvailableCopyBy(availableCopyCount: number): void {
    this.availableCopies += availableCopyCount;
  }

  public decreaseAvailableCopiesByOne() {
    if (this.availableCopies === 0) {
      throw new NotEnoughAvailableCopiesError();
    }

    this.availableCopies--;
  }
}

new BookEntity(
  new Isbn("hello, world!"),
  "Learn you a Haskell",
  0
);