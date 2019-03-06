/** Dependencies **/
import { DynamicModule } from '@nestjs/common';
/** Interfaces **/
import { MailerOptions } from './interfaces/mailer-options.interface';
export declare class MailerModule {
    static forRoot(options?: MailerOptions): DynamicModule;
}
