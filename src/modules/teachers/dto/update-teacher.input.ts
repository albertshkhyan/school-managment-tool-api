import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateTeacherInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
