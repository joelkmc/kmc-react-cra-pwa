// Number formats helpers

/* Convert tin number into formatted tin
 *
 * @param tin = string: 'xxxxxxxxx'
 * expecterd return : 'xxx-xx-xxxx'
 */
export const tinFormat = (tin: string): string =>
  tin.replace(/^(.{3})(.{2})(.{4})$/, '$1-$2-$3');

/* Convert sss number into formatted sss
 *
 * @param sss = string: 'xxxxxxxxxxx'
 * expecterd return : 'xx-xxxxxxx-x'
 */
export const sssFormat = (sss: string): string =>
  sss.replace(/^(.{2})(.{7})(.{1})$/, '$1-$2-$3');

/* Convert philhealth number into formatted philhealth number
 *
 * @param philhealth = string: 'xxxxxxxxxxxx'
 * expecterd return : 'xx-xxxxxxxxx-x'
 */
export const philhealthFormat = (philhealth: string): string =>
  philhealth.replace(/^(.{2})(.{9})(.{1})$/, '$1-$2-$3');

/* Convert hdmf number into formatted hdmf
 *
 * @param hdmf = string: 'xxxxxxxxxxxx'
 * expecterd return : 'xxxx-xxxx-xxxx'
 */
export const hdmfFormat = (hdmf: string): string =>
  hdmf.replace(/^(.{4})(.{4})(.{4})$/, '$1-$2-$3');

/* Convert sss number into formatted sss
 *
 * @param hdmf = string: 'xxxxxxxxxxx'
 * expecterd return : 'xxxx-xxx-xxxx'
 */
export const phoneNumberFormat = (phoneNumber: string): string =>
  phoneNumber.replace(/^(.{4})(.{3})(.{4})$/, '$1 $2 $3');
