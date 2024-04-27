import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateStudentInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  age?: number;
}
