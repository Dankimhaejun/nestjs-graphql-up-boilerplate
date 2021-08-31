import { Field, ObjectType } from "@nestjs/graphql/dist";

@ObjectType()
export class HLBrand {
  @Field()
  ID!: string;

  @Field()
  officialName!: string;

  @Field()
  createdAt!: string;

  @Field()
  updatedAt!: string;

  @Field({ nullable: true, description: "트라이얼 시작시점 자정 타임스탬프" })
  trialStartAt?: string;

  @Field({ nullable: true, description: "트라이얼 종료시점 자정 타임스탬프" })
  trialFinishAt?: string;

  @Field(() => Boolean, {
    defaultValue: false,
    description: "트라이얼을 사용했고 기간이 종료되었으면 true",
  })
  isPassedTrial?: boolean;

  @Field({ nullable: true })
  nameKR?: string;

  // 필드 구현
  planID!: string;
  createdBy?: string;
  trialStartBy?: string; // 트라이얼 신청한 유저 아이디
  trialFinishBy?: string; // 트라이얼 강제 종료한 유저 아이디
}
