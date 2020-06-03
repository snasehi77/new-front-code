import {Field, Option} from "../Models";

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

export function eventClick(id: string) {
  const event = document.getElementById(id);
  if (event) {
    setTimeout(() => {
      event.click();
    }, 100)
  }
}

export function arrayToStringValue(array: Array<any>, key: string) {
  let chain = "";
  array.forEach((a, i) => {
    chain += (i ? "," : "") + a[key];
  });
  return chain;
}

export function getValueField(type: string, value: any, sg: boolean) {
  switch (type) {
    case "SMALL_TEXT":
    case "LARGE_TEXT":
    case "NUMBER":
    case "TIME":
      return value;
    case "SCHEDULE":
      return new Date(value).toISOString();
    case "SELECT":
      return sg ? value.label : value.map((e: any) => e.label);
    case "RADIO_BUTTON":
    case "BUTTON":
    case "RADIO_BUTTON_DESCRIPTION":
    case "RADIO_BUTTON_IMAGE":
      return sg ? value.value : Object.keys(value).map(a => value[a].value);
    case "DATE":
      return value;
    case "DATE_RANGE":
      return `${value.from} , ${value.to}`;
    default:
      return ""
  }
}

export const classNames: any = {
  HELP_TEXT: "hm-view-p-1",
  HEADER_1: "hm-view-header-1",
  HEADER_2: "hm-view-header-2",
  HEADER_3: "hm-view-header-3",
  SUBHEAD: "hm-view-header-custom-1",
  DESCRIPTIVE_TEXT: "hm-view-p-2",
  CONTACT_FOOTER: "hm-view-footer-1",
  TERMS_CONDITIONS: "hm-view-terms"
};

export function getOptions(cp: Option[]) {
  return cp.map((c: any) => {
    return {id: c.value, value: c.value, data: c, label: c.label};
  })
}

export function setDefaultValues(C: any, A: Array<Field>) {
  let obj: any = {};
  A.forEach((f: Field) => {
    if (f.field_type === "SMALL_TEXT" || f.field_type === "LARGE_TEXT") {
      obj[f.id] = C[f.id];
    }
    if (f.format === "SELECT") {
      obj[f.id] = f.single_value ?
        {value: C[f.id], label: C[f.id]} :
        C[f.id].map((a: any) => {
          return {label: a, value: a}
        })
    }
    if (f.format === "RADIO_BUTTON") {
      let opt: any = toMap(getOptions(f.options), "value");
      if (f.single_value) {
        obj[f.id] = opt[C[f.id]]
      } else {
        let temp: any = {};
        C[f.id].forEach((a: string) => {
          temp[a] = opt[a];
        });
        obj[f.id] = temp;
      }
    }
    if (f.field_type === "DATE" && C[f.id]) {
      obj[f.id] = C[f.id];
    }
    if (f.field_type === "DATE_RANGE" && C[f.id]) {
      const range = C[f.id].split(" , ");
      obj[f.id] = {from: range[0], to: range[1]};
    }
    if (f.field_type === "SCHEDULE") {
      obj[f.id] = C[f.id];
    }
  });

  return obj;
}

export function getTag(value: string, cp: any[]) {
  const groupTag = cp.find(a => a.id === value)
  return groupTag ? groupTag.group_tag : "";
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


