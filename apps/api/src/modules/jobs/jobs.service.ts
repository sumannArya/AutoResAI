import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepository: Repository<Job>,
  ) {}

  async create(createData: Partial<Job>) {
    const job = this.jobsRepository.create(createData);
    return this.jobsRepository.save(job);
  }

  async findAll(search?: string) {
    if (search) {
      return this.jobsRepository.find({
        where: [
          { title: Like(`%${search}%`) },
          { company: Like(`%${search}%`) },
        ],
      });
    }
    return this.jobsRepository.find();
  }

  async findOne(id: number) {
    return this.jobsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateData: Partial<Job>) {
    await this.jobsRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.jobsRepository.delete(id);
    return { message: 'Job deleted successfully' };
  }
}
