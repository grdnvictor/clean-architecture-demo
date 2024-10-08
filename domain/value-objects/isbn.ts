export class Isbn {
  public constructor(public readonly isbn: string) {
    if (isbn.length !== 13) {
      throw new Error("Book identifier incorrect");
    }
  }
}