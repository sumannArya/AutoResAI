import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resume } from './entities/resume.entity';

@Injectable()
export class ResumesService {
  constructor(
    @InjectRepository(Resume)
    private resumesRepository: Repository<Resume>,
  ) {}

  async create(createData: Partial<Resume>) {
    const resume = this.resumesRepository.create(createData);
    return this.resumesRepository.save(resume);
  }

  async findAll() {
    return this.resumesRepository.find();
  }

  async findOne(id: number) {
    return this.resumesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateData: Partial<Resume>) {
    await this.resumesRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.resumesRepository.delete(id);
    return { message: 'Resume deleted successfully' };
  }
}
