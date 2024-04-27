import { InputType, Field, ID, Float } from '@nestjs/graphql';

@InputType()
export class AddGradeInput {
  @Field(() => ID)
  studentId: string;

  @Field(() => Float)
  grade: number;
}
