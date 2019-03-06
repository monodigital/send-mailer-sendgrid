"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MailerCoreModule_1;
const common_1 = require("@nestjs/common");
/** Constants **/
const mailer_options_constant_1 = require("./constants/mailer-options.constant");
/** Services **/
const mailer_service_1 = require("./mailer.service");
let MailerCoreModule = MailerCoreModule_1 = class MailerCoreModule {
    static forRoot(options) {
        const MailerOptionsProvider = {
            name: mailer_options_constant_1.MAILER_OPTIONS,
            provide: mailer_options_constant_1.MAILER_OPTIONS,
            useValue: options,
        };
        return {
            module: MailerCoreModule_1,
            providers: [
                /** Options **/
                MailerOptionsProvider,
                /** Services **/
                mailer_service_1.MailerService,
            ],
            exports: [
                /** Services **/
                mailer_service_1.MailerService,
            ],
        };
    }
};
MailerCoreModule = MailerCoreModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], MailerCoreModule);
exports.MailerCoreModule = MailerCoreModule;
//# sourceMappingURL=mailer-core.module.js.map