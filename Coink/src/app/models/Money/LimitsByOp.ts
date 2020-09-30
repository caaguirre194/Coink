/**
 * User limits by operation
 */
export interface LimitsByOp {
  min_amount_per_op?: number;
  max_amount_per_op?: number;
  max_times_in_interval?: number;
  in_interval?: string;
  operation_id?: number;
  cash_direction?: number;
  cash_direction_id?: number;
  operation_description?: string;
}

/**
 * User limits list by operation
 */
export type ListLimitsByOp = Array<LimitsByOp>;
