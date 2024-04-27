import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class Subject {
  @Field(() => ID)
  id: string;

  @Field()
  @IsString()
  name: string;
}
