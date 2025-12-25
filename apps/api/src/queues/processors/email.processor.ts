import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('email-notifications')
export class EmailProcessor {
  @Process('send-welcome')
  async handleWelcomeEmail(job: Job) {
    console.log('Sending welcome email:', job.data);
    // Add email sending logic here
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true };
  }

  @Process('send-notification')
  async handleNotification(job: Job) {
    console.log('Sending notification email:', job.data);
    // Add email sending logic here
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true };
  }
}
