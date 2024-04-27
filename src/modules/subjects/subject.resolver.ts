import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Subject } from './entities/subject.entity';
import { SubjectService } from './subject.service';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => Subject)
export class SubjectResolver {
  constructor(private readonly subjectService: SubjectService) {}

  @Query(() => Subject)
  async getSubjectById(@Args('id') id: string) {
    const subject = this.subjectService.getSubjectById(id);
    if (!subject) {
      throw new NotFoundException(`Subject with ID "${id}" not found`);
    }
    return subject;
  }

  @Query(() => [Subject])
  async getAllSubjects() {
    return this.subjectService.getAllSubjects();
  }

  @Mutation(() => Subject)
  async createSubject(
    @Args('createSubjectInput') createSubjectInput: CreateSubjectInput,
  ) {
    return this.subjectService.createSubject(createSubjectInput);
  }

  @Mutation(() => Subject)
  async updateSubject(
    @Args('id') id: string,
    @Args('updateSubjectInput') updateSubjectInput: UpdateSubjectInput,
  ) {
    return this.subjectService.updateSubject(id, updateSubjectInput);
  }
}
