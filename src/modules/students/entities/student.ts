import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Classes } from '../../classes/entities/classes';

@ObjectType()
export class Student {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  age?: number;

  @Field(() => Float, { nullable: true })
  grade?: number;

  @Field(() => Classes, { nullable: true })
  studentClass?: Classes;
}
