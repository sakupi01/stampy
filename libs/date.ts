/**
 * 与えられた日付文字列から日付部分のみを抽出し、時刻部分は "00:00:00.000" に変更した文字列を返す
 * @param {string} dateString - 日付文字列 (例: "2024-03-29T12:36:00.000Z")
 * @returns {string} - 変更後の日付文字列 (例: "2024-03-29T00:00:00.000Z")
 */
export function getDateStringWithZeroTime(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const zeroTime = "T00:00:00.000Z";
  return `${year}-${month}-${day}${zeroTime}`;
}

export function calculateDaysFromToday(isoDateStr: string): number {
  const dateObj = new Date(isoDateStr);
  const today = new Date();
  const timeDiff = Math.abs(dateObj.getTime() - today.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return today > dateObj ? diffDays : -diffDays;
}
