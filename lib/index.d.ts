/** Dependencies **/
import { DynamicModule, Type } from '@nestjs/common';
import { MailData } from "./interfaces/mailer-mail-data.interface";

declare class MailerModule {
  public static forRoot(config?: MailerOptions): DynamicModule;
}

declare class MailerService {
  public sendMail(mailData: MailData): Promise<any>;
}

declare interface MailerOptionsFactory {
  createMailerOptions(): Promise<MailerOptions> | MailerOptions;
}

declare interface MailerOptions {
  defaults?: MailData;
  apiKey: string;
  template?: {
    dir?: string;
  };
}
