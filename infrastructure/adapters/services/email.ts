import { EmailServiceInterface } from "../../../application/services/email";

export class EmailServiceFake implements EmailServiceInterface {
  public async sendMail(recipient: string, expeditor: string, subject: string, text: string): Promise<void> {
    console.log(`Email sent for ${recipient} from ${expeditor} with subject ${subject} and text ${text}`);
  }
}