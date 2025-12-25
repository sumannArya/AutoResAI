import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AtsScore } from './entities/ats-score.entity';

@Injectable()
export class AtsService {
  constructor(
    @InjectRepository(AtsScore)
    private atsScoreRepository: Repository<AtsScore>,
  ) {}

  async analyzeResume(resumeId: number, jobDescription: string) {
    // Placeholder for ATS analysis logic
    // This would integrate with AI/ML services to analyze resume against job description
    const score = Math.floor(Math.random() * 100);
    
    const atsScore = this.atsScoreRepository.create({
      resumeId,
      score,
      jobDescription,
      suggestions: ['Improve keyword density', 'Add more relevant skills'],
    });

    return this.atsScoreRepository.save(atsScore);
  }

  async getScores(resumeId: number) {
    return this.atsScoreRepository.find({ where: { resumeId } });
  }
}
