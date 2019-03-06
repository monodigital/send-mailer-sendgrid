/** Interfaces **/
import {MailData} from "./mailer-mail-data.interface";

export interface MailerOptions {
  defaults?: MailData;
  apiKey: string;
  template?: {
    dir?: string;
  };
}
