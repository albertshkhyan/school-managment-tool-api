import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';
import { CreateSubjectInput } from './create-subject.input';

@InputType()
export class UpdateSubjectInput extends PartialType(CreateSubjectInput) {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;
}
