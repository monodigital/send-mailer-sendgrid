"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Dependencies **/
const common_1 = require("@nestjs/common");
const MailService = require("@sendgrid/mail");
const pug = require("pug");
/** Constants **/
const mailer_options_constant_1 = require("./constants/mailer-options.constant");
let MailerService = class MailerService {
    constructor(mailerOptions) {
        this.mailerOptions = mailerOptions;
        if (!mailerOptions.apiKey) {
            throw new Error('Api key sendgrid not found');
        }
        this.mailService = MailService;
        this.mailService.setApiKey(mailerOptions.apiKey);
    }
    sendMail(mailData) {
        return __awaiter(this, void 0, void 0, function* () {
            mailData.html = pug.renderFile(this.mailerOptions.template.dir + mailData.template + '.pug', mailData.context);
            if (!mailData.from) {
                mailData.from = this.mailerOptions.defaults.from;
            }
            return yield this.mailService.send(mailData);
        });
    }
};
MailerService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(mailer_options_constant_1.MAILER_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], MailerService);
exports.MailerService = MailerService;
//# sourceMappingURL=mailer.service.js.map