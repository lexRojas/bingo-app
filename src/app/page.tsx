'use client'

import styles from '@/modules/bingo.module.css'
import { alias } from '@/components/numeros'
import { useRef, useState } from 'react'

export default function Home() {

  const [selected, setSelected] = useState<boolean[]>(Array.from({ length: 75 }, () => false))
  const [numeroSeleccionado, setNumeroSeleccionado] = useState<number[]>([])
  const [numeroAlias, setNumeroAlias] = useState<number>(0)
  const [errorNumero, setErrorNumero] = useState<boolean>(false)
  const [valor, setValor] = useState<number>(1)




  const numero_digitado = useRef(null)





  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (numero_digitado.current) {
      const { value } = numero_digitado.current
      const n = Number(value).valueOf()

      if (e.key == 'Enter') {
        if (n >= 1 && n <= 75) {
          const newArray = numeroSeleccionado
          const newArraySelected = selected

          newArraySelected[n - 1] = true
          newArray.push(Number(value).valueOf())

          setNumeroSeleccionado(newArray)
          setNumeroAlias(n)
          setErrorNumero(false)
          setSelected(newArraySelected)

          const input: HTMLInputElement = numero_digitado.current

          input.select()

        } else {

          setErrorNumero(true)
        }

      }

    }
  }


  const playAgaint = () => {

    const newArray: number[] = []
    const newArraySelected: boolean[] = Array.from({ length: 75 }, () => false)

    setNumeroSeleccionado(newArray)
    setSelected(newArraySelected)
    setNumeroAlias(0)
    setValor(1)

  }


  const generarNumeros = (inicio: number) => {
    return (
      Array.from({ length: 15 }, (_, i) => (
        <div
          key={i + inicio}
          id={`b${i + inicio}`}
          className={!selected[i + (inicio - 1)] ? styles.numero : styles.numero_selected}
        >
          {i + inicio}
        </div>
      ))

    )

  }



  return (
    <div className="container mx-auto">

      <div className="flex flex-col  gap-4   md:grid grid-cols-5   md:grid-rows-[auto_auto_auto]   ">
        <div className="flex md:col-span-3  justify-center " >

          <span className='text-red-600  text-8xl font-[family-name:var(--font-bingo)] '>
            B
          </span>
          <span className='text-green-500 text-8xl font-[family-name:var(--font-bingo)] '>
            I
          </span>
          <span className='text-blue-950 text-8xl font-[family-name:var(--font-bingo)] '>
            N
          </span>
          <span className='text-yellow-600 text-8xl font-[family-name:var(--font-bingo)] '>
            G
          </span>
          <span className='text-purple-900 text-8xl font-[family-name:var(--font-bingo)] '>
            O
          </span>


        </div>
        <div className="flex items-center justify-center  md:col-span-2  md:row-span-2 md:col-start-4">

          <div className={styles.bola}>
            <p className='flex'>{numeroAlias}</p>
          </div>


        </div>
        <div className="flex md:col-span-3  md:row-start-2 justify-center">
          <div className="grid grid-cols-5 gap-4 text-center">
            {/* Columna B */}
            <div className="">
              <div className="px-3 font-bold text-xl mb-2">B</div>
              {generarNumeros(1)}
            </div>
            {/* Columna I */}
            <div>
              <div className="font-bold text-xl mb-2">I</div>
              {generarNumeros(16)}
            </div>
            {/* Columna N */}
            <div>
              <div className="font-bold text-xl mb-2">N</div>
              {generarNumeros(31)}
            </div>
            {/* Columna G */}
            <div>
              <div className="font-bold text-xl mb-2">G</div>
              {generarNumeros(46)}
            </div>
            {/* Columna O */}
            <div>
              <div className="font-bold text-xl mb-2">O</div>
              {generarNumeros(61)}
            </div>
          </div>


        </div>
        <div className="flex rounded-xl  justify-center md:col-span-2  bg-green-500 md:row-start-3">

          <button className='bg-yellow-400 hover:bg-yellow-700 text-gray-800 font-semibold py-2 px-9 my-2 border border-gray-400 rounded-xl shadow '
            onClick={playAgaint}>
            Jugar de nuevo
          </button>



        </div>
        <div className="flex  rounded-xl md:col-start-3 bg-yellow-300 md:row-start-3">

          <div className='flex flex-col m-2 mx-auto'>

            <label className="" htmlFor="numero">Numero:</label>
            <input className='text-center'
              type="number"
              name="numero"
              id="numero"
              min={1}
              max={75}
              defaultValue={1}
              ref={numero_digitado}
              onKeyDown={handleKeyPress}
              value={valor}
              onChange={(e) => setValor(Number(e.target.value).valueOf())} />

          </div>



        </div>
        <div className="flex   rounded-xl items-center align-middle justify-center text-2xl font-bold md:col-start-4 md:col-span-2 bg-purple-400 md:row-start-3">

          {!errorNumero ? (
            numeroAlias >= 1 ? (
              <span> {alias.numerosBingo?.find(item => item.numero == numeroAlias)?.nombre || ""} </span>
            ) : null
          ) : (
            <span className='text-red-600 text-2xl '> NUMERO NO PERMITIDO </span>
          )
          }
        </div>
      </div>


    </div>
  );
}
