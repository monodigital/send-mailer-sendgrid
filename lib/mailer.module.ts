/** Dependencies **/
import { DynamicModule, Module } from '@nestjs/common';

/** Modules **/
import { MailerCoreModule } from './mailer-core.module';

/** Interfaces **/
import { MailerOptions } from './interfaces/mailer-options.interface';

@Module({})
export class MailerModule {
  public static forRoot(options?: MailerOptions): DynamicModule {
    return {
      module: MailerModule,
      modules: [
        /** Modules **/
        MailerCoreModule.forRoot(options),
      ],
    };
  }
}
