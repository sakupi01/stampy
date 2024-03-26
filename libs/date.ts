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

export function calculateDaysFromToday(isoDateStr: string): number {
  const dateObj = new Date(isoDateStr);
  const today = new Date();
  const timeDiff = Math.abs(dateObj.getTime() - today.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return today > dateObj ? diffDays : -diffDays;
}
