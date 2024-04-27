import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherInput } from './dto/create-teacher.input';
import { UpdateTeacherInput } from './dto/update-teacher.input';
import { TeacherService } from './teacher.service';

@Resolver(() => Teacher)
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Query(() => [Teacher])
  async getAllTeachers(): Promise<Teacher[]> {
    return this.teacherService.getAllTeachers();
  }

  @Mutation(() => Teacher)
  async createTeacher(
    @Args('teacherInput') teacherInput: CreateTeacherInput,
  ): Promise<Teacher> {
    return this.teacherService.createTeacher(teacherInput);
  }

  @Mutation(() => Teacher)
  async updateTeacher(
    @Args('id') id: string,
    @Args('teacherInput') teacherInput: UpdateTeacherInput,
  ): Promise<Teacher> {
    return this.teacherService.updateTeacher(id, teacherInput);
  }

  @Mutation(() => Teacher)
  async deleteTeacher(@Args('id') id: string): Promise<Teacher> {
    return this.teacherService.deleteTeacher(id);
  }
}
