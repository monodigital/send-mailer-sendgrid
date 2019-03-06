/** Dependencies **/
import { CustomValue } from '@nestjs/core/injector/module';
import { DynamicModule, Module, Global } from '@nestjs/common';

/** Constants **/
import { MAILER_OPTIONS } from './constants/mailer-options.constant';

/** Interfaces **/
import { MailerOptions } from './interfaces/mailer-options.interface';

/** Services **/
import { MailerService } from './mailer.service';

@Global()
@Module({})
export class MailerCoreModule {
  public static forRoot(options: MailerOptions): DynamicModule {
    const MailerOptionsProvider: CustomValue = {
      name: MAILER_OPTIONS,
      provide: MAILER_OPTIONS,
      useValue: options,
    };

    return {
      module: MailerCoreModule,
      providers: [
        /** Options **/
        MailerOptionsProvider,

        /** Services **/
        MailerService,
      ],
      exports: [
        /** Services **/
        MailerService,
      ],
    };
  }
}
