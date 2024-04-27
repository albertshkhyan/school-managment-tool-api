import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Student } from './entities/student';
import { StudentService } from './student.service';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { AddGradeInput } from './dto/add-grade.input';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [Student])
  getAllStudents(): Student[] {
    return this.studentService.getAllStudents();
  }

  @Query(() => Student)
  getStudentById(@Args('id') id: string): Student {
    return this.studentService.getStudentById(id);
  }

  @Mutation(() => Student)
  createStudent(
    @Args('studentInput', { type: () => CreateStudentInput })
    studentInput: CreateStudentInput,
  ): Student {
    return this.studentService.createStudent(studentInput);
  }

  @Mutation(() => Student)
  updateStudent(
    @Args('id') id: string,
    @Args('studentInput', { type: () => UpdateStudentInput })
    studentInput: UpdateStudentInput,
  ): Student {
    return this.studentService.updateStudent(id, studentInput);
  }

  @Mutation(() => Student)
  deleteStudent(@Args('id') id: string): void {
    return this.studentService.deleteStudent(id);
  }

  @Mutation(() => Student)
  addGrade(@Args('addGradeInput') addGradeInput: AddGradeInput): Student {
    const { studentId, grade } = addGradeInput;
    return this.studentService.addGrade(studentId, grade);
  }
}
