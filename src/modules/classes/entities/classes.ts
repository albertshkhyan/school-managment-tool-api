import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Classes {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
