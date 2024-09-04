// Task 1
// A client contacts the freelancer to enquire about their rates. The freelancer explains that they work 8 hours a day. However, the freelancer knows only their hourly rates for the project. Help them estimate a day rate given an hourly rate.

// dayRate(89);
// // => 712
// The day rate does not need to be rounded or changed to a "fixed" precision.

// Task 2
// Another day, a project manager offers the freelancer to work on a project with a fixed budget. Given the fixed budget and the freelancer's hourly rate, help them calculate the number of days they would work until the budget is exhausted. The result must be rounded down to the nearest whole number.

// daysInBudget(20000, 89);

// Task 3
// Often, the freelancer's clients hire them for projects spanning over multiple months. In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate. Every month has 22 billable days. Help them estimate their cost for such projects, given an hourly rate, the number of days the project spans, and a monthly discount rate. The discount is always passed as a number, where 42% becomes 0.42. The result must be rounded up to the nearest whole number.

// priceWithMonthlyDiscount(89, 230, 0.42);
// // => 97972

// * The day rate, given a rate per hour
//  *
//  * @param {number} ratePerHour
//  * @returns {number} the rate per day
//  *
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
 let ratePerDay = ratePerHour * 8;
 return Math.floor(budget / ratePerDay);
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const ratePerDay = ratePerHour * 8;
  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;
  const discountedCost = fullMonths * 22 * ratePerDay * (1 - discount);
  const fullCost = remainingDays * ratePerDay;
  
  return Math.ceil(discountedCost + fullCost);
}