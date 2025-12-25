import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ResumeProcessor } from './processors/resume.processor';
import { EmailProcessor } from './processors/email.processor';

@Module({
  imports: [
    BullModule.registerQueue(
      {
        name: 'resume-processing',
      },
      {
        name: 'email-notifications',
      },
    ),
  ],
  providers: [ResumeProcessor, EmailProcessor],
  exports: [BullModule],
})
export class QueuesModule {}
