export function decimalPlaces(number, decimalPlaces) {
  let factor = 1;
  switch (decimalPlaces) {
    case 2:
      factor = 100;
      break;
    case 3:
      factor = 1000;
  }

  return Math.round(factor * number) / factor;
}

export function getMonthName(monthNumber) {
  switch (parseInt(monthNumber)) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "April";
    case 4:
      return "March";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
}

export function getCountryCode(nationality) {
  switch (nationality) {
    case "ITA":
      return "fi-it";
    case "GER":
      return "fi-de";
    case "FRA":
      return "fi-fr";
    case "ESP":
      return "fi-es";
    case "USA":
      return "fi-us";
    case "DEN":
      return "fi-dk";
    case "SUI":
      return "fi-sa";
    case "POR":
      return "fi-pt";
    case "RUS":
      return "fi-ru";
    case "COL":
      return "fi-co";
    case "UKR":
      return "fi-ua";
  }
}

export function getQuarterOfYearDate(date) {
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();

  let quarter = "";
  if (month <= 2) {
    quarter = "Q1";
  } else if (month <= 5) {
    quarter = "Q2";
  } else if (month <= 8) {
    quarter = "Q3";
  } else {
    quarter = "Q4";
  }

  return `${year} ${quarter}`;
}

export default {
  decimalPlaces,
  getMonthName,
  getCountryCode,
  getQuarterOfYearDate,
};
