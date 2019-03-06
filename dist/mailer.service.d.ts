/** Interfaces **/
import { MailerOptions } from './interfaces/mailer-options.interface';
import { MailData } from 'interfaces/mailer-mail-data.interface';
export declare class MailerService {
    private readonly mailerOptions;
    private mailService;
    constructor(mailerOptions: MailerOptions);
    sendMail(mailData: MailData): Promise<any>;
}
