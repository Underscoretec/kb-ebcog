import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

/**
 * Create a UTC date from an ISO string.
 */
// export function createUTCDate(dateString: string): Date {
//     console.log(dateString,'dateString ####');
//     console.log(dayjs.utc(dateString).toDate(),'createUTCDate ###');
//   return dayjs.utc(dateString).toDate();
// }

export function createUTCDate(dateString: string): Date | null {
    // Create a Date object using the input date string
    const date = new Date(dateString);
  
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      console.error('Invalid date string:', dateString);
      return null; // Return null if the date is invalid
    }
  
    console.log(date, 'createUTCDate ###');
    return date; // Return the native Date object
  }
  

/**
 * Check if the current date is within the discount period.
 */
export function isValidPeriod(startDate: Date, endDate: Date): boolean {
  const now = dayjs.utc();
  return now.isAfter(dayjs.utc(startDate)) && now.isBefore(dayjs.utc(endDate));
}
