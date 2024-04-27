import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Classes } from './entities/classes';
import { ClassService } from './class.service';
import { CreateClassInput } from './dto/create-class.input';
import { UpdateClassInput } from './dto/update-class.input';

@Resolver(() => Classes)
export class ClassResolver {
  constructor(private readonly classService: ClassService) {}

  @Query(() => [Classes])
  getAllClasses(): Classes[] {
    return this.classService.getAllClasses();
  }

  @Mutation(() => Classes)
  createClass(
    @Args('createClassInput') createClassInput: CreateClassInput,
  ): Classes {
    return this.classService.createClass(createClassInput);
  }

  @Mutation(() => Classes)
  updateClass(
    @Args('id') id: string,
    @Args('updateClassInput') updateClassInput: UpdateClassInput,
  ): Classes {
    return this.classService.updateClass(id, updateClassInput);
  }
}
