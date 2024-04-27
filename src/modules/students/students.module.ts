import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { Classes } from '../classes/entities/classes';

@Module({
  imports: [Classes],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentsModule {}
