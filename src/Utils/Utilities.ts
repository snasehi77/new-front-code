export function getMonths() {
  return [
    {abbreviation: 'Jan', month: 'January'},
    {abbreviation: 'Feb', month: 'February'},
    {abbreviation: 'Mar', month: 'March'},
    {abbreviation: 'Apr', month: 'April'},
    {abbreviation: 'May', month: 'May'},
    {abbreviation: 'Jun', month: 'June'},
    {abbreviation: 'Jul', month: 'July'},
    {abbreviation: 'Aug', month: 'August'},
    {abbreviation: 'Sep', month: 'September'},
    {abbreviation: 'Oct', month: 'October'},
    {abbreviation: 'Nov', month: 'November'},
    {abbreviation: 'Dec', month: 'December'},
  ]
}

export function toMap(list: Array<any>, key: string) {
  return list.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});
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

export const checkMail = (mail: string) => {
  return mail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
};