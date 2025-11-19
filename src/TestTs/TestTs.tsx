import React from 'react'

export default function TestTs() {
  //기본 데이터 타입.
  
  let age : number;
  let name: string = 'k-digital';
  let isStudent: boolean = true;
  // let x : undefined = undefined;
  // let y : null = null;
  age=50;

  let nums : number[] = [1,2,3];
  console.log(nums.join(','));
  let nums2 : Array<string> = ['a','b','c'];
  let arrTuple : [name: string, age: number] = ['k-digital',30];
  interface Person {
    name: string;
    age: number;
  };
  
  let person : Person = {name: 'pnu', age: 20};
  let person1 : Person = {name: 'pnu1', age: 30};
  let direction : 'left' | 'right';
  direction = 'right';
  type HandleMsg = (msg : string) => string;
  type HandleClick = () => void;

  // const handleMsg = (msg : string) : string => {
  //   return msg + '님 안녕하세요.';

  // }
  const handleMsg : HandleMsg = (msg) => {
    return msg + '님 안녕하세요.';
  }
  // const handleClick = () => {
  //   alert(handleMsg('kdigital'));
  // }
  const handleClick : HandleClick = () => {
    alert(handleMsg('kdigital'));
  }
  return (
    <div className='w-full h-fit flex flex-col justify-center items-center'>
      <h1 className=' text-2xl font-semibold'>TypeScript 기본 문법</h1>
      <ul className='mt-5'>
        <li>기본 데이터 타입 (string) : 이름 : {name}</li>
        <li>기본 데이터 타입 (number) : 나이 : {age}</li>
        <li>기본 데이터 타입 (boolean) : 학생 : {isStudent ? '학생' : '일반인'}</li>
        <li>배열 : {nums.join(',')}</li>
        <li>배열2 : {nums2.join(',')}</li>
        <li>튜플 : 이름: {arrTuple[0]} 나이: {arrTuple[1]}</li>
        <li>객체 : 이름: {person.name} 나이: {person.age}</li>
        <li>객체1 : 이름: {person1.name} 나이: {person1.age}</li>
        <li>상수 타입 : 방향 : {direction}</li>
      </ul>

      <div>
        <button className='mt-5 px-4 py-2 font-semibold bg-cyan-500 text-white rounded hover:bg-cyan-700' onClick={handleClick}>클릭</button>
      </div>
    </div>
  )
}
