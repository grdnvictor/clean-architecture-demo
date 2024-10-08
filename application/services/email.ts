export interface EmailServiceInterface {
  sendMail(recipient: string, expeditor: string, subject: string, text: string): Promise<void>
}