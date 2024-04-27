import { Injectable } from '@nestjs/common';
import { Subject } from './entities/subject.entity';
import { v4 as uuidv4 } from 'uuid';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';

@Injectable()
export class SubjectService {
  private subjects: Subject[] = [];

  getAllSubjects(): Subject[] {
    return this.subjects;
  }

  getSubjectById(id: string): Subject {
    return this.subjects.find((subject) => subject.id === id);
  }

  createSubject(createSubjectInput: CreateSubjectInput): Subject {
    const newSubject: Subject = {
      id: uuidv4(),
      ...createSubjectInput,
    };
    this.subjects.push(newSubject);
    return newSubject;
  }

  updateSubject(id: string, updateSubjectInput: UpdateSubjectInput): Subject {
    const subjectIndex = this.subjects.findIndex(
      (subject) => subject.id === id,
    );
    if (subjectIndex === -1) {
      throw new Error('Subject not found');
    }
    this.subjects[subjectIndex] = {
      ...this.subjects[subjectIndex],
      ...updateSubjectInput,
    };
    return this.subjects[subjectIndex];
  }
}
