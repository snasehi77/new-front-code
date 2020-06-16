declare var document: Document;

export function toMap(list: Array<any>, key: string) {
  return list.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});
}


export function ToArray(map: any) {
  let temp: any = [];
  Object.keys(map).forEach(c => {
    if (map[c]) {
      temp.push(map[c]);
    }
  });
  return temp;
}

export function goToElement(ar: boolean) {
  const element = document.getElementById("scroll_detail");
  if (element) {
    element.scrollLeft += ar ? 200 : -200;
  }
}

export const getDaysOfWeek = (day: number) => {
  const days: any = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  };
  return days[day];
};

export const compareDates = (d1?: Date, d2?: Date) => {
  if (!d1 || !d2) {
    return false
  } else {
    const date1 = d1.getDate(), month1 = d1.getMonth(), year1 = d1.getFullYear();
    const date2 = d2.getDate(), month2 = d2.getMonth(), year2 = d2.getFullYear();
    return `${year1}${month1}${date1}` === `${year2}${month2}${date2}`;
  }
};

export function getSchedule(hour: number) {
  if (hour >= 8 && hour <= 11) {
    return "Morning";
  } else if (hour >= 12 && hour <= 16) {
    return "Afternoon";
  } else if (hour >= 17 && hour <= 21) {
    return "Evening";
  } else {
    return false
  }
}

export const getHoursSchedule = (type: "Morning" | "Afternoon" | "Evening" | null) => {
  let start = 0, finish = 0, startMin = 0, finishMin = 60, increment = 15;
  switch (type) {
    case "Morning":
      start = 8;
      finish = 12;
      break;
    case "Afternoon":
      start = 12;
      finish = 17;
      break;
    case "Evening":
      start = 17;
      finish = 22;
      break;
    default:
      return [];
  }
  const range = {
    getStart: () => start,
    getFinish: () => finish,
    startMin: () => startMin,
    finisMin: () => finishMin,
    increment: () => increment
  };
  let array: Array<{ hour: number, minutes: number }> = [];
  for (let i = range.getStart(); i < range.getFinish(); i++) {
    for (let y = range.startMin(); y < range.finisMin(); y = y + range.increment()) {
      array.push({hour: i, minutes: y});
      if ((y + range.increment()) >= range.finisMin() && (i + 1) >= range.getFinish()) {
        array.push({hour: i, minutes: 59})
      }
    }
  }
  return array
};

export const checkMail = (mail: string) => {
  return mail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
};

export function cleanValue(value: string) {
  return value.replace(" ", "")
    .replace("(", "")
    .replace(")", "")
    .replace("-", "")
}

export function checkValue(type: string, value: string) {
  switch (type) {

    case 'SSN':
      return cleanValue(value).length > 10 ? 'is-invalid' : value && cleanValue(value).length < 11 ? 'is-valid' : '';

    case 'PHONE':
      return cleanValue(value).length > 10 ? 'is-invalid' : value && cleanValue(value).length < 11 ? 'is-valid' : '';

    case 'EMAIL':
      return checkMail(value) && value ? 'is-valid' : value ? 'is-invalid' : '';

    default:
      return '';
  }
}

export function getWithFormat(type: string, value: string) {
  switch (type) {
    case 'PHONE':
      return value ? formatPhoneNumber(value, value) : value;
    case 'SSN':
      return value ? formatSSN(value) : value;
    default:
      return value
  }
}

export const sliceArray = (array: Array<any>, index: number, count: number) => {
  return array.slice(index, index + count)
};

export function formatSSN(SSN: string) {
  let phone = SSN.replace(/\D/g, "");
  const match = phone.match(/^(\d{1,3})(\d{0,2})(\d{0,4})$/);
  if (match) {
    phone = `${match[1]}${match[2] ? "-" : ""}${match[2]}${
      match[3] ? "-" : ""
    }${match[3]}`;
  }
  return phone;
}

export function formatPhoneNumber(phoneNumberString: string, oldValue: string) {
  if (
    oldValue.length > phoneNumberString.length &&
    phoneNumberString.length <= 4
  ) {
    if (phoneNumberString.length === 4 || phoneNumberString.length === 1) {
      return phoneNumberString.slice(0, phoneNumberString.length - 1);
    } else {
      return phoneNumberString;
    }
  }
  let phone = phoneNumberString.replace(/\D/g, "");
  const match = phone.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
  if (match) {
    phone = `(${match[1]})${match[2] ? " " : ""}${match[2]}${
      match[3] ? "-" : ""
    }${match[3]}`;
  }
  return phone;
}
