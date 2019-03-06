import { DynamicModule } from '@nestjs/common';
/** Interfaces **/
import { MailerOptions } from './interfaces/mailer-options.interface';
export declare class MailerCoreModule {
    static forRoot(options: MailerOptions): DynamicModule;
}
