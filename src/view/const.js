export const LOCALE = 'en-GB';
export const DATE_OPTS = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
export const DAY_OPTS = { month: 'long', day: 'numeric' };
export const TIME_OPTS = { hour: 'numeric', minute: 'numeric' };
export const REPEAT_INPUTS = [
  'mo',
  'tu',
  'we',
  'th',
  'fr',
  'sa',
  'su'
];

export const CARDS = [
  {
    classes: ['black'],
    text: 'Example task with default color.',
    date: new Date(2020, 8, 23, 12, 45)
  },
  {
    classes: ['blue'],
    text: 'Example task with custom color.',
    date: new Date(2020, 9, 2, 1, 45)
  },
  {
    classes: ['yellow'],
    text: 'Example task with custom color and without date.'
  },
  {
    classes: ['green'],
    text: 'Example task with custom color.',
    date: new Date(2020, 9, 2, 1, 45)
  },
  {
    classes: ['black'],
    text: 'Example task without date.'
  },
  {
    classes: ['pink', 'repeat'],
    text: 'It is example of repeating task. It marks by wave.',
    date: new Date(2020, 9, 2, 1, 45)

  },
  {
    classes: ['red', 'deadline'],
    text: 'This is task with missing deadline.',
  },
  {
    classes: ['black', 'deadline'],
    text: 'This is task with missing deadline. Deadline always marked by red line.',
    date: new Date(2020, 9, 2, 1, 45)
  }
];
