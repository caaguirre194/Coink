/**
 * User notification
 */
export interface Notification {
  NotificationTitle: string;
  NotificationTypeDescription: string;
  NotificationValue?: number;
  NotificationStatus: boolean;
  NotificationStatusId: string;
  NotificationTypeId: number;
  NotificationDate?: string;
  NotificationSubject?: string;
}
