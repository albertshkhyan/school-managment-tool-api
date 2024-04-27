import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StudentResolver } from '../modules/students/student.resolver';
import { StudentService } from '../modules/students/student.service';
import { TeacherResolver } from '../modules/teachers/teacher.resolver';
import { TeacherService } from '../modules/teachers/teacher.service';
import { SubjectResolver } from '../modules/subjects/subject.resolver';
import { SubjectService } from '../modules/subjects/subject.service';
import { ClassResolver } from '../modules/classes/class.resolver';
import { ClassService } from '../modules/classes/class.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphqlService } from './graphql.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // Alternatively, you can use autoSchemaFile if you're using SDL-first approach
      // resolvers: [HelloResolver],
      // typeDefs, // Include your type definitions
      introspection: true, // Enable introspection

      // cors: {
      //   origin: 'http://localhost:3000',
      //   credentials: true,
      // },
    }),
  ],
  providers: [
    GraphqlService,
    StudentResolver,
    StudentService,
    TeacherResolver,
    TeacherService,
    SubjectResolver,
    SubjectService,
    ClassResolver,
    ClassService,
  ],
})
export class GraphqlModule {}
