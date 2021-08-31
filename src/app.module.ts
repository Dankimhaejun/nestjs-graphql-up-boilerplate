import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloServerPluginInlineTrace } from "apollo-server-core";

import { isDevelopmentMode } from "./common/constants";

import { HLBrandModule } from "./hl-brand/hl-brand.module";
import { HlUserModule } from "./hl-user/hl-user.module";

const plugins = [ApolloServerPluginInlineTrace()];

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      plugins,
      playground: isDevelopmentMode,
    }),
    HLBrandModule,
    HlUserModule,
  ],
})
export class AppModule {}
