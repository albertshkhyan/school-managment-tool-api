import { Injectable, NotFoundException } from '@nestjs/common';
import { Classes } from './entities/classes';
import { v4 as uuidv4 } from 'uuid';
import { CreateClassInput } from './dto/create-class.input';
import { UpdateClassInput } from './dto/update-class.input';

@Injectable()
export class ClassService {
  private classes: Classes[] = []; // This will be your in-memory storage for now

  getAllClasses(): Classes[] {
    // Ideally, you would fetch this from a database
    return this.classes;
  }

  createClass(createClassInput: CreateClassInput): Classes {
    // In a real scenario, you would insert this into a database
    const newClass = {
      id: uuidv4(), // Use UUID to generate a unique identifier
      ...createClassInput,
    } as Classes;

    this.classes.push(newClass);
    return newClass;
  }

  updateClass(id: string, updateClassInput: UpdateClassInput): Classes {
    // In a real scenario, you would update this in a database
    const classObj = this.getClassById(id);
    Object.assign(classObj, updateClassInput);
    return classObj;
  }

  private getClassById(id: string): Classes {
    // Ideally, you would fetch this from a database
    const found = this.classes.find((classObj) => classObj.id === id);
    if (!found) {
      throw new NotFoundException(`Class with ID "${id}" not found`);
    }
    return found;
  }
}
