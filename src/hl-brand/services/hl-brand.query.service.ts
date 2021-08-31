import { Injectable } from "@nestjs/common";

import { HLBrand } from "../hl-brand.entity";

import { HLBrandInput } from "../dtos/queries/hl-brand";

import { TableNames } from "../../common/constants";
import { getItem } from "../../common/dynamo-db-modules/get-item";

@Injectable()
export class HLBrandQueryService {
  async findOne(input: HLBrandInput) {
    const { ID } = input;

    const hlBrand = await getItem<HLBrand>({
      tableName: TableNames.HL_BRAND,
      key: { ID },
    });

    if (!hlBrand) {
      throw Error("브랜드가 없습니다");
    }

    return hlBrand;
  }
}
