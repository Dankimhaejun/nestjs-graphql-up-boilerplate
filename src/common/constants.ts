export const isDevelopmentMode = process.env.NODE_ENV === "development";

export const enum TableNames {
  HL_BRAND = "HLBrand",
  HL_BRAND_PAYMENT = "HLBrandPayment",
  HL_BRAND_PAYMENT_HISTORY = "HLBrandPaymentHistory",
  HL_BRAND_PAYMENT_LOG = "HLBrandPaymentLog",
  HL_BRAND_PAYMENT_METHOD = "HLBrandPaymentMethod",
  HL_BRAND_PAYMENT_OVERDUE = "HLBrandPaymentOverdue",
  HL_BRAND_PAYMENT_OVERDUE_HISTORY = "HLBrandPaymentOverdueHistory",
  HL_BRAND_PIXEL = "HLBrandPixel",
  HL_BRAND_PIXEL_HISTORY = "HLBrandPixelHistory",
  HL_BRAND_PLAN = "HLBrandPlan",
  HL_BRAND_TAG = "HLBrandTag",
  HL_BRAND_TAG_HISTORY = "HLBrandTagHistory",
  HL_CACHE = "HLCache",
  HL_CACHE_COUNT = "HLCacheCount",
  HL_CLIENT = "HLClient",
  HL_LINK = "HLLink",
  HL_LOG = "HLLog",
  HL_USER = "HLUser",
  HL_USER_BRAND = "HLUserBrand",
  HL_USER_BRAND_SUBSCRIPTION = "HLUserBrandSubscription",
  HL_USER_BRAND_SUBSCRIPTION_HISTORY = "HLUserBrandSubscriptionHistory",
}

export const enum IndexNames {
  BRANDID_GENERATEDKEY_ONLY = "index-brandID-generatedKey-only",
  BRANDID_LATESTVISITEDAT = "index-brandID-latestVisitedAt",
  BRANDID_PLATFORM = "index-brandID-platform",
  BRANDID_UPDATEDAT = "index-brandID-updatedAt",
  EMAIL = "index-email",
  GENERATEDKEY_CREATEDAT = "index-generatedKey-createdAt",
  GENERATEDKEY_MIDNIGHTSTAMPKR_ONLY = "index-generatedKey-midnightStampKR-only",
  GENERATEDKEY_MIDNIGHTSTAMPKR_WITH_CLIENTID = "index-generatedKey-midnightStampKR-with-clientID",
  GENERATEDKEY_MIDNIGHTSTAMPKR_WITH_REFERER = "index-generatedKey-midnightStampKR-with-referer",
  GENERATEDKEY_ONLY = "index-generatedKey-only",
  GENERATEDKEY_UPDATEDAT = "index-generatedKey-updatedAt",
  STATUS_UPDATEDAT = "index-status-updatedAt",
  USERID_BRANDID = "index-userID-brandID",
  USERID_LATESTVISITEDAT = "index-userID-latestVisitedAt",
  USERID_UPDATEDAT = "index-userID-updatedAt",
}