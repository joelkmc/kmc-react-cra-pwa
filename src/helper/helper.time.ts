import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

/* Time from now
 *
 * @param time: string = any time string
 * @returns human time format = '2 hrs ago'
 */
export const timeFromNow = (time: string) => {
  return dayjs(time).fromNow();
};

/* Time from now
 *
 * @param time: string = any time string
 * @param format: string = 'YYYY-MM-DD'
 * @returns human time format = 'December, 00, 2021'
 */
export const timeToCustomFormat = (time: string, format: string) => {
  return dayjs(time).endOf('month').format(format);
};
