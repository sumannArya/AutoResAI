import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtsController } from './ats.controller';
import { AtsService } from './ats.service';
import { AtsScore } from './entities/ats-score.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AtsScore])],
  controllers: [AtsController],
  providers: [AtsService],
  exports: [AtsService],
})
export class AtsModule {}
