// teacher.service.ts
import { Injectable } from '@nestjs/common';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherInput } from './dto/create-teacher.input';
import { UpdateTeacherInput } from './dto/update-teacher.input';

@Injectable()
export class TeacherService {
  private teachers: Teacher[] = []; // This will be your in-memory storage for now

  getAllTeachers(): Teacher[] {
    // Ideally, you would fetch this from a database
    return this.teachers;
  }

  createTeacher(teacherInput: CreateTeacherInput): Teacher {
    // In a real scenario, you would insert this into a database
    const newTeacher = {
      id: '1', // Generate unique ID here
      ...teacherInput,
    };
    this.teachers.push(newTeacher);
    return newTeacher;
  }

  updateTeacher(id: string, teacherInput: UpdateTeacherInput): Teacher {
    // In a real scenario, you would update this in a database
    const teacherIndex = this.teachers.findIndex(
      (teacher) => teacher.id === id,
    );
    if (teacherIndex === -1) {
      throw new Error(`Teacher with ID "${id}" not found`);
    }
    this.teachers[teacherIndex] = {
      ...this.teachers[teacherIndex],
      ...teacherInput,
    };
    return this.teachers[teacherIndex];
  }

  deleteTeacher(id: string): Teacher {
    // In a real scenario, you would delete this from a database
    const teacherIndex = this.teachers.findIndex(
      (teacher) => teacher.id === id,
    );
    if (teacherIndex === -1) {
      throw new Error(`Teacher with ID "${id}" not found`);
    }
    const deletedTeacher = this.teachers.splice(teacherIndex, 1)[0];
    return deletedTeacher;
  }
}
