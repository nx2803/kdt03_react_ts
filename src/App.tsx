// import { useState } from 'react'
import { FaReact } from "react-icons/fa";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lotto from "./Lotto/Lotto";
import FestGallary from "./Festival/FestGallary";
import FestivalContents from "./Festival/FestivalContents";
import ToDoList from "./Todo/ToDoList";
import Login from "./Login";
import TestTs from "./TestTs/TestTs";
import { useAtomValue } from "jotai";
import { sessionAtom } from "./AtomAuth";



function App() {
  // const [count, setCount] = useState(0)
  const session = useAtomValue(sessionAtom);
  return (

    <BrowserRouter>
      <div className='w-full h-screen  flex flex-col overflow-hidden bg-zinc-900'>
        <Header />

        <div className="w-full flex-1  flex justify-center items-center">
          <main className="container  mx-auto flex-1 p-4 overflow-x-hidden text-center text-white overflow-y-auto ">
            <div className='w-full flex flex-col justify-center items-center'>
              {!session ? <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Lotto' element={<Login />} />
                <Route path='/Festival' element={<Login />} />
                <Route path='/Festival/contents' element={<Login />} />
                <Route path='/TodoList' element={<Login />} />
                <Route path='/TestTs' element={<Login />} />
              </Routes> : 
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Lotto' element={<Lotto />} />
                <Route path='/Festival' element={<FestGallary />} />
                <Route path='/Festival/contents' element={<FestivalContents />} />
                <Route path='/TodoList' element={<ToDoList />} />
                <Route path='/TestTs' element={<TestTs />} />
              </Routes>}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
