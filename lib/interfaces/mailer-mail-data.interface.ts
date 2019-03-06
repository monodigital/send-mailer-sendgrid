import { MailContent, ASMOptions, TrackingSettings, MailSettings } from '@sendgrid/helpers/classes/mail';
import {EmailData} from '@sendgrid/helpers/classes/email-address';
import {AttachmentData} from '@sendgrid/helpers/classes/attachment';
import {PersonalizationData} from '@sendgrid/helpers/classes/personalization';

export interface MailData {
    to?: EmailData|EmailData[];
    cc?: EmailData|EmailData[];
    bcc?: EmailData|EmailData[];
    
    from?: EmailData;
    replyTo?: EmailData;
    
    sendAt?: number;
    
    subject?: string;
    text?: string;
    html?: string;
    content?: MailContent[];
    context: { [key: string]: string };
    templateId?: string;
    
    personalizations?: PersonalizationData[];
    attachments?: AttachmentData[];
    
    ipPoolName?: string;
    batchId?: string;
    
    sections?: { [key: string]: string };
    headers?: { [key: string]: string };
    
    categories?: string[];
    category?: string;
    
    customArgs?: { [key: string]: any };
    asm?: ASMOptions;
    
    mailSettings?: MailSettings;
    trackingSettings?: TrackingSettings;
    
    substitutions?: { [key: string]: string };
    substitutionWrappers?: string[];
    
    isMultiple?: boolean;
    
    template: string;
}
