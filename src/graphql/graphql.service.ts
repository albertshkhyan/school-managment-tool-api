import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class GraphqlService {
  @Query(() => String)
  welcomeMessage(): string {
    return 'Welcome to the school management tool!';
  }
}
