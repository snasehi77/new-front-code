import icon_accidents_and_injuries from "../Assets/icons/accident 1.png";
import icon_health_and_medical_issues from "../Assets/icons/health_medical 2.png";
import icon_labor_work_place_issues from "../Assets/icons/labor_workplace 2.png";
import icon_sexual_harassment from "../Assets/icons/sexual_harassment 2.png";
import icon_sexual_abuse from "../Assets/icons/sexual_abuse 2.png";
import icon_elder_abuse from "../Assets/icons/elder 2.png";

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


export function ToArray(map: any) {
  let temp:any = [];
  Object.keys(map).forEach(c => {
    if (map[c]) {
      temp.push(map[c]);
    }
  });
  return temp;
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


export const cases = [
  {
    id: 1,
    routeUrl: '/accidents_and_injuries/24',
    label: 'Accidents & Injuries',
    icon: icon_accidents_and_injuries
  },
  {
    id: 2,
    routeUrl: '/health_and_medical_issues/24',
    label: 'Health & Medical Issues',
    icon: icon_health_and_medical_issues
  },
  {
    id: 3,
    routeUrl: '/labor_work_place_issues/24',
    label: 'Labor & WorkPlace Issues',
    mobileLabel: 'Labor & WorkPlace',
    icon: icon_labor_work_place_issues
  },
  {
    id: 4,
    routeUrl: 'sexual_harassment/24',
    label: 'Sexual Harassment',
    icon: icon_sexual_harassment
  },
  {
    id: 5,
    routeUrl: 'sexual_abuse/24',
    label: 'Sexual Abuse',
    icon: icon_sexual_abuse
  },
  {
    id: 6,
    routeUrl: 'elder_abuse/24',
    label: 'Elder Abuse',
    icon: icon_elder_abuse
  }
];

export const steps = [
  {
    num: '1',
    title: 'Tell us what happened.',
    p1: "Answer a few simple questions",
    p2: " about your case."
  },
  {
    num: '2',
    title: 'We make an introduction.',
    p1: "Based on your answers,",
    p2: " we find an attorney for you."
  },
  {
    num: '3',
    title: 'They get in touch.',
    p1: "Within minutes, you'll be introduced to an attorney interested in representing you."
    // p2: " attorney interested in representing you."
  }
];