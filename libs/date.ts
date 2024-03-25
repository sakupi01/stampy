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

export function calculateDaysFromToday(isoStartDateString: string): number {
  // 現在の日付を取得
  const today: Date = new Date();
  // 時間を00:00:00に設定して日付のみの比較を行う
  today.setHours(0, 0, 0, 0);

  // ISO8601形式の日付をDateオブジェクトに変換
  const targetDate: Date = new Date(isoStartDateString);
  targetDate.setHours(0, 0, 0, 0);

  // 両日付の差をミリ秒で計算
  const diff: number = targetDate.getTime() - today.getTime();

  // ミリ秒を日数に変換 (1日 = 24時間 = 1440分 = 86400秒 = 86400000ミリ秒)
  const days: number = diff / (1000 * 60 * 60 * 24);

  return days;
}
