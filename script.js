'use strict';

function daysInYear(year) {
  try {
    if (!Number.isInteger(year)) {
      throw new Error("exception");
    }

    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
      return 366;
    }
  
    return 365;
  }

  catch(error) {
    return error.message;
  }
}