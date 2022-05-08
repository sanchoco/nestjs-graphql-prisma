import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserCreateInput } from 'src/@prisma-class/user/user-create.input';
import { User } from 'src/@prisma-class/user/user.model';
import { UpdateUserInput } from './dto/update-user-input';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: UserCreateInput) {
    return await this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  async findAll() {
    return await this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return await this.usersService.update(
      updateUserInput.id,
      updateUserInput.data,
    );
  }

  @Mutation(() => User)
  async removeUser(@Args('id') id: string) {
    return await this.usersService.remove(id);
  }
}
