import icon_accidents_and_injuries from '../Assets/icons/YC_Icon_Auto_Accidents_Green@2x.png';
import icon_health_and_medical_issues from '../Assets/icons/YC_Icon_Health_Medical_Green@2x.png';
import icon_labor_work_place_issues from '../Assets/icons/YC_Icon_Workplace_Injuries_Green@2x.png';
import icon_sexual_harassment from '../Assets/icons/YC_Icon_Sexual_Harassment_Green@2x.png';
import icon_workplace_discrimination from '../Assets/icons/YC_Icon_Workplace_Discrimination_Green@2x.png';
import icon_elder_abuse from '../Assets/icons/YC_Icon_Elder_Care_Green@2x.png';

export function getMonths() {
	return [
		{ abbreviation: 'Jan', month: 'January' },
		{ abbreviation: 'Feb', month: 'February' },
		{ abbreviation: 'Mar', month: 'March' },
		{ abbreviation: 'Apr', month: 'April' },
		{ abbreviation: 'May', month: 'May' },
		{ abbreviation: 'Jun', month: 'June' },
		{ abbreviation: 'Jul', month: 'July' },
		{ abbreviation: 'Aug', month: 'August' },
		{ abbreviation: 'Sep', month: 'September' },
		{ abbreviation: 'Oct', month: 'October' },
		{ abbreviation: 'Nov', month: 'November' },
		{ abbreviation: 'Dec', month: 'December' }
	];
}

export function eventClick(id: string) {
	const event = document.getElementById(id);
	if (event) {
		setTimeout(() => {
			event.click();
		}, 100);
	}
}

export function getValueField(type: string, value: any, sg: boolean) {
	switch (type) {
		case 'SMALL_TEXT':
		case 'LARGE_TEXT':
		case 'NUMBER':
		case 'TIME':
			return value;
		case 'SELECT':
			return sg ? value.label : value.map((e: any) => e.label);
		case 'RADIO_BUTTON':
			return sg ? value.value : Object.keys(value).map(a => value[a].value);
		case 'DATE':
			return value._d;
		case 'DATE_RANGE':
			return `${value.from} , ${value.to}`;
		default:
			return '';
	}
}

export function getOptions(id: string, cp: any) {
	return cp[id]
		? cp[id].values.map((c: any) => {
				return { id: c.value, value: c.value, data: c };
		  })
		: [];
}

export function setDefaultValues(C: any, A: Array<any>, cp: any) {
	let obj: any = {};
	A.forEach((f: any) => {
		if (f.field_type === 'SMALL_TEXT' || f.field_type === 'LARGE_TEXT') {
			obj[f.id] = C[f.id];
		}
		if (f.format === 'SELECT') {
			obj[f.id] = f.single_value
				? { value: C[f.id], label: C[f.id] }
				: C[f.id].map((a: any) => {
						return { label: a, value: a };
				  });
		}
		if (f.format === 'RADIO_BUTTON') {
			let opt: any = toMap(getOptions(f.choice_list_id, cp), 'value');
			if (f.single_value) {
				obj[f.id] = opt[C[f.id]];
			} else {
				let temp: any = {};
				C[f.id].forEach((a: string) => {
					temp[a] = opt[a];
				});
				obj[f.id] = temp;
			}
		}
		if (f.field_type === 'DATE' && C[f.id]) {
			obj[f.id] = new Date(C[f.id]);
		}
		if (f.field_type === 'DATE_RANGE' && C[f.id]) {
			const range = C[f.id].split(' , ');
			obj[f.id] = { from: range[0], to: range[1] };
		}
	});
	return obj;
}

export function getTag(value: string, cp: any) {
	return cp[value] ? cp[value].values[0].group_tag : '';
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
	if (oldValue.length > phoneNumberString.length && phoneNumberString.length <= 4) {
		if (phoneNumberString.length === 4 || phoneNumberString.length === 1) {
			return phoneNumberString.slice(0, phoneNumberString.length - 1);
		} else {
			return phoneNumberString;
		}
	}
	let phone = phoneNumberString.replace(/\D/g, '');
	const match = phone.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
	if (match) {
		phone = `(${match[1]})${match[2] ? ' ' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`;
	}
	return phone;
}

export function formatSSN(SSN: string) {
	let phone = SSN.replace(/\D/g, '');
	const match = phone.match(/^(\d{1,3})(\d{0,2})(\d{0,4})$/);
	if (match) {
		phone = `${match[1]}${match[2] ? '-' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`;
	}
	return phone;
}

export const checkMail = (mail: string) => {
	return mail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
};

enum casesId {
	elder_abuse = 47,
	accidents_and_injuries = 45,
	health_and_medical_issues = 49,
	labor_work_place_issues = 50,
	sexual_harassment = 51,
	workplace_discrimination = 52
}

export const cases = [
	{
		id: 1,
		routeUrl: '/execute_flow/' + casesId.accidents_and_injuries,
		label: 'Accidents & Injuries',
		icon: icon_accidents_and_injuries
	},
	{
		id: 2,
		routeUrl: '/execute_flow/' + casesId.accidents_and_injuries,
		label: 'Health & Medical Issues',
		icon: icon_health_and_medical_issues
	},
	{
		id: 3,
		routeUrl: '/execute_flow/' + casesId.accidents_and_injuries,
		label: 'Labor & Workplace Issues',
		mobileLabel: 'Labor & Workplace',
		icon: icon_labor_work_place_issues
	},
	{
		id: 4,
		routeUrl: 'execute_flow/' + casesId.accidents_and_injuries,
		label: 'Sexual Harassment',
		icon: icon_sexual_harassment
	},
	{
		id: 5,
		routeUrl: 'execute_flow/' + casesId.accidents_and_injuries,
		label: 'Workplace Discrimination',
		icon: icon_workplace_discrimination
	},
	{
		id: 6,
		routeUrl: 'execute_flow/' + casesId.accidents_and_injuries,
		label: 'Elder Abuse',
		icon: icon_elder_abuse
	}
];

export const linkCases = {
	'/personal-injury/': '/#/execution/48',
	'/health_and_medical/': '/#/execution/49',
	'/workplace-injuries/': '/#/execution/52',
	'/elder-abuse/': '/#/execution/47',
	'/employment-isues/': '/#/execution/50',
	'/harassment-sexual-abuse/': '/#/execution/51'
};

export const steps = [
	{
		num: '1',
		title: 'Tell us what happened.',
		p1: 'Answer a few simple questions about your case.'
	},
	{
		num: '2',
		title: 'We make an introduction.',
		p1: 'Based on your answers, ',
		p2: ' we find an attorney for you.'
	},
	{
		num: '3',
		title: 'They get in touch.',
		p1: 'Within minutes, you’ll be introduced to an attorney interested in representing you.'
	}
];

// export const steps = [
//   {
//     num: '1',
//     title: 'Tell us what happened.',
//     p1: "Answer a few simple questions",
//     p2: " about your case."
//   },
//   {
//     num: '2',
//     title: 'We make an introduction.',
//     p1: "Based on your answers,",
//     p2: " we find an attorney for you."
//   },
//   {
//     num: '3',
//     title: 'They get in touch.',
//     p1: "Within minutes, you'll be introduced to an attorney interested in representing you."
//     // p2: " attorney interested in representing you."
//   }
// ];
