import { useState, createContext, useEffect } from 'react'
import Cuestionario from './Componentes/Cuestionario'
import Meme from './Componentes/Meme'
import Versiculo from './Componentes/Versiculo'


export const PerfilContext= createContext();

function App() {
  const [openCuestionario,setOpenCuestionario]=useState(false)
  const [verMeme,setVerMeme]=useState(false)
  const [verVersiculo,setVerVers]=useState(false)

  





  return (
    <> 
      <header>
        <div className=' shadow-sm mb-2 bg-amber-400 text-amber-700 p-5 flex  justify-center'>
          <div className='flex flex-col'>
            <h1 className=' font-bold text-3xl text-center'>Libros Poéticos I </h1>
            <h1 className=' font-medium text-xl text-center'>Compartir salmo </h1>
          </div>
        </div>
      </header>
      <main className=' bg-slate-50 flex flex-col justify-center m-10'>
      <div onClick={()=>  setVerVers((prev)=> !prev)} className=' flex justify-center rounded-lg text-slate-800 shadow bg-slate-400 text-center p-2  font-bold text-2xl mb-3'>
          Versículo
        </div>
        {verVersiculo && <Versiculo/>}

        <div onClick={()=>  setOpenCuestionario((prev)=> !prev)} className=' flex justify-center rounded-lg text-slate-800 shadow bg-slate-400 text-center p-2  font-bold text-2xl mb-3'>
          Cuestionario
        </div>
          {openCuestionario && <Cuestionario/>}


        <div onClick={()=>  setVerMeme((prev)=> !prev)} className=' flex justify-center rounded-lg text-slate-800 shadow bg-slate-400 text-center p-2  font-bold text-2xl mb-3'>
          MEME
        </div>
        {verMeme && <Meme/>}

        
      </main>

      
      
      
    </>
  )
}

export default App




