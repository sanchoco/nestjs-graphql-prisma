import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core';
import { UsersModule } from './users/users.module';

@Module({
  providers: [],
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
      plugins: [ApolloServerPluginInlineTraceDisabled()],
    }),
    UsersModule,
  ],
  controllers: [],
})
export class AppModule {}
