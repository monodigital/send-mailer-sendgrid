/** Dependencies **/
import { Injectable, Inject } from '@nestjs/common';
import * as MailService from '@sendgrid/mail';
import * as pug from 'pug';

/** Constants **/
import { MAILER_OPTIONS } from './constants/mailer-options.constant';

/** Interfaces **/
import { MailerOptions } from './interfaces/mailer-options.interface';
import { MailData } from 'interfaces/mailer-mail-data.interface';

@Injectable()
export class MailerService {
  private mailService: any;

  constructor(@Inject(MAILER_OPTIONS) private readonly mailerOptions: MailerOptions) {
    if (!mailerOptions.apiKey) {
      throw new Error('Api key sendgrid not found');
    }
    
    this.mailService = MailService;
  }

  public async sendMail(mailData: MailData): Promise<any> {
    mailData.html = pug.renderFile(
        __dirname + '/../' + this.mailerOptions.template.dir + mailData.template + '.pug',
        mailData.context
    );
    if (!mailData.from) {
      mailData.from = this.mailerOptions.defaults.from;
    }
    return await this.mailService.sendMail(mailData);
  }
}
