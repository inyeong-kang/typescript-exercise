/* eslint-disable semi */
/* eslint-disable no-unused-vars */
const count: number = 1;
const text: string = '';

// console.log(count, text);
const texts: string[] = ['a', 'b', 'c'];

function welcome (name: string): string {
  return `안녕하세요 ${name}`;
}

type Crew = {
    name: string;
    daily: string;
}

interface Coach {
    name: "공원" | "크론" | "준" | "왼손";
}

const coach1: Coach = {
  name: '공원'
}
const crew: Crew = {
  name: '',
  daily: ''
}
