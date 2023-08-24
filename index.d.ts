/** EXT timers module. */

/**
 * Schedules execution of a one-time callback after delay milliseconds.
 * @param callback The function to call when the timer elapses.
 * @param delay The number of milliseconds to wait before calling the callback. Default: 1.
 * @param arguments Optional arguments to pass when the callback is called.
 * @returns Positive integer value which identifies the timer.
 */
declare function setTimeout(callback: (...args: any) => void, delay?: number, ...arguments: any[]): number

/**
 * Schedules repeated execution of callback every delay milliseconds.
 * @param callback The function to call when the timer elapses.
 * @param delay The number of milliseconds to wait before calling the callback. Default: 1.
 * @param arguments Optional arguments to pass when the callback is called.
 * @returns Positive integer value which identifies the timer.
 */
declare function setInterval(callback: (...args: any) => void, delay?: number, ...arguments: any[]): number

/**
 * Cancels a timeout previously established by calling setTimeout.
 * @param id The identifier of the timeout to cancel.
 */
declare function clearTimeout(id: number): void

/**
 * Cancels a timeout previously established by calling setInterval.
 * @param id The identifier of the timeout to cancel.
 */
declare function clearInterval(id: number): void
