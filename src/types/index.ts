export const currencies = [
  { label: 'Russian Ruble', symbol: '₽' },
  { label: 'US Dollar', symbol: '$' },
  { label: 'Euro', symbol: '€' },
  { label: 'British Pound', symbol: '£' },
  { label: 'Japanese Yen', symbol: '¥' },
];

export const periods = [
  { label: 'Hour', value: 'hour' },
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
];

export const months = [
  { label: 'January', value: 'january', hours: 136 },
  { label: 'February', value: 'february', hours: 159 },
  { label: 'March', value: 'march', hours: 159 },
  { label: 'April', value: 'april', hours: 168 },
  { label: 'May', value: 'may', hours: 159 },
  { label: 'June', value: 'june', hours: 151 },
  { label: 'July', value: 'july', hours: 184 },
  { label: 'August', value: 'august', hours: 176 },
  { label: 'September', value: 'september', hours: 168 },
  { label: 'October', value: 'october', hours: 184 },
  { label: 'November', value: 'november', hours: 167 },
  { label: 'December', value: 'december', hours: 168 },
];

export interface FirebaseError {
  code: string;
  message: string;
}
