import { ProcessManager } from "./ProcessManager.class";

export const insert = (params) => new ProcessManager().insert(params);
export const update = (params) => new ProcessManager().update(params);
