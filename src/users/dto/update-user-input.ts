import { Field, InputType } from '@nestjs/graphql';
import { UserUpdateInput } from 'src/@prisma-class/user/user-update.input';

@InputType()
export class UpdateUserInput {
  @Field(() => String, { nullable: true })
  id!: string;

  @Field(() => UserUpdateInput, { nullable: true })
  data: UserUpdateInput;
}
