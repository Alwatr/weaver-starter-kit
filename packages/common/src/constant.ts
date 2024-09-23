import type {ProvinceItem} from './types/main.js';

export const monthOptions = [
  { label: 'فروردین', value: 1 },
  { label: 'اردیبهشت', value: 2 },
  { label: 'خرداد', value: 3 },
  { label: 'تیر', value: 4 },
  { label: 'مرداد', value: 5 },
  { label: 'شهریور', value: 6 },
  { label: 'مهر', value: 7 },
  { label: 'آبان', value: 8 },
  { label: 'آذر', value: 9 },
  { label: 'دی', value: 10 },
  { label: 'بهمن', value: 11 },
  { label: 'اسفند', value: 12 }
];

export const dayOptions: string[] = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

export const yearOptions: string[] = [];
for (let i = 1300; i <= 1403; i++) {
  yearOptions.push(i.toString());
}

export const provinceOptions: Record<string, ProvinceItem> = {
  '1': { label: 'خراسان رضوی', provinceId: '1', cities: [ {label: 'مشهد', cityId: '1'} ] },
  '2': { label: 'تهران', provinceId: '2', cities: [ {label: 'تهران', cityId: '1'} ] },
};
