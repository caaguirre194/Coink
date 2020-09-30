import { LimitsByOp } from "./LimitsByOp";

export interface RequestLimitsByOp {
    operations_limits: Array<LimitsByOp>;
}