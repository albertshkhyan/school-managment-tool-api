import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Teacher {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
