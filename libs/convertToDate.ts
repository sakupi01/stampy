/**
 * 日付の時刻を切り捨てる(00:00:00にする)
 * @param date 対象日付
 */
export function convertToDate(date: Date): Date {
  if (date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
  return date;
}
