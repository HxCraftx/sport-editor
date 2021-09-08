import { run } from "./src/main.js";

const DEFAULT_STEP_SIZE = "18000-20000";

// 获取环境变量
const config = {
  username: process.env.13471004073,
  password: process.env.llkst4499.,
  user_id: process.env.XIAOMI_AMAZFIT_USER_ID,
  app_token: process.env.XIAOMI_AMAZFIT_APP_TOKEN,
  step_size: process.env.STED_SIZE_RANGE ?? DEFAULT_STEP_SIZE,
};

await run(config);
