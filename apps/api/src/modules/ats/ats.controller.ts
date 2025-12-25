import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { AtsService } from './ats.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('ats')
@UseGuards(JwtAuthGuard)
export class AtsController {
  constructor(private atsService: AtsService) {}

  @Post('analyze')
  analyzeResume(@Body() data: { resumeId: number; jobDescription: string }) {
    return this.atsService.analyzeResume(data.resumeId, data.jobDescription);
  }

  @Get('scores/:resumeId')
  getScores(@Param('resumeId') resumeId: string) {
    return this.atsService.getScores(+resumeId);
  }
}
