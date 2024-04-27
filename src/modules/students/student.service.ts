import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './entities/student';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StudentService {
  private students: Student[] = []; // This will be your in-memory storage for now

  getAllStudents(): Student[] {
    // Ideally, you would fetch this from a database
    return this.students;
  }

  getStudentById(id: string): Student {
    // Ideally, you would fetch this from a database
    const found = this.students.find((student) => student.id === id);
    if (!found) {
      throw new NotFoundException(`Student with ID "${id}" not found`);
    }
    return found;
  }

  createStudent(studentInput: Partial<Student>): Student {
    // In a real scenario, you would insert this into a database
    const newStudent = {
      id: uuidv4(), // Use UUID to generate a unique identifier
      ...studentInput,
    } as Student;

    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: string, studentInput: Partial<Student>): Student {
    // In a real scenario, you would update this in a database
    const student = this.getStudentById(id);
    Object.assign(student, studentInput);
    return student;
  }

  deleteStudent(id: string): void {
    // In a real scenario, you would delete this from a database
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) {
      throw new NotFoundException(`Student with ID "${id}" not found`);
    }
    this.students.splice(index, 1);
  }

  addGrade(studentId: string, grade: number): Student {
    const student = this.getStudentById(studentId);
    if (!student) {
      throw new NotFoundException(`Student with ID "${studentId}" not found`);
    }
    // Update the student's grade
    student.grade = grade;
    return student;
  }
}
