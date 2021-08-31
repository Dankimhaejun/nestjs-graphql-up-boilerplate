import { Field, InputType } from "@nestjs/graphql/dist";

@InputType()
export class HLBrandInput {
  @Field()
  ID: string;
}
