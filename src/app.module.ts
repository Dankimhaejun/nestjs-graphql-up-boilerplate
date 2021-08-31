import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HlUserModule } from './hl-user/hl-user.module';

@Module({
  imports: [
    HlUserModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
