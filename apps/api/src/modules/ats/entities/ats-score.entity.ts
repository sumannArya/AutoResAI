import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('ats_scores')
export class AtsScore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resumeId: number;

  @Column()
  score: number;

  @Column('text')
  jobDescription: string;

  @Column('jsonb', { nullable: true })
  suggestions: string[];

  @CreateDateColumn()
  createdAt: Date;
}
