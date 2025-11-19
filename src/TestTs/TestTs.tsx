import React from 'react'

export default function TestTs() {
  //기본 데이터 타입.
  
  let age : number = 30;
  let name: string = 'k-digital';
  let isStudent: boolean = true;
  let x : undefined = undefined;
  let y : null = null;

  return (
    <div className='w-full h-fit flex flex-col justify-center items-center'>
      <h1 className=' text-2xl font-semibold'>TypeScript 기본 문법</h1>
      <ul>
        <li>기본 데이터 타입 (string) : 이름 : {name}</li>
        <li>기본 데이터 타입 (number) : 나이 : {age}</li>
        <li>기본 데이터 타입 (boolean) : 학생 : {isStudent ? '학생' : '일반인'}</li>
        
      </ul>
    </div>
  )
}
