'use client'
import logo from '@/app/image/powered.png'
import Image from 'next/image';
import arrow from './image/leftarrow.png'
import { useState } from 'react';
import {calculateImc, level, levels} from './helpers/imc'
import { GridItem } from './components/GridItem/index'
import { ImageResponse } from 'next/server';
import { headers } from 'next/headers';




const Page = () => {

  const [heightField, SetHeightField] = useState<number>(0);
  const [weightField, SetWeightField] = useState<number>(0);
  const [toShow, SetToShow] = useState<level | null>(null)

  
  const handleCalculateButton = () => {
    if(heightField && weightField){  // se os 2 campos estiverpreenchido
      SetToShow(calculateImc(heightField,weightField))


    }else{
alert('Digite todos os Campos')
    }
  }


  const handleBackButton = () => {
    SetToShow(null);
    SetWeightField(0)
    SetHeightField(0)
  }

  return (
<div className='mb-5 md:mb-2'>
  <header>
    <div className="container mx-auto max-w-[1000px] px-5 lg:px-0">
      <div className="mt-[40px] mb-[28px] mx-auto">
        <Image className='object-cover' src={logo} alt="" width={200} title="logo" />
      </div>
      </div>
      </header>

      <div className=" container mx-auto max-w-[1000px] flex flex-col gap-20 md:flex-row px-5">
        <div className="flex-1 flex flex-col">
          <h1 className=' font-bold text-colorH1 text-[40px]  mb-2 mt-1.5'>Calcule o seu IMC</h1>
          <p className='text-colorP text-[16px] mb-8 '>IMC é a sigla para o Índice de Massa córporea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            className='w-full  border-b border-b-colorInput py-[5px] px-2 mb-5  outline-none disabled:opacity-30'
            type="number"
            placeholder='Digite a sua altura. ex: 1.75 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => SetHeightField(parseFloat(e.target.value))}
            name=""
            id="" 
            disabled={toShow? true:false}/>

          <input
            className='w-full  border-b border-b-colorInput py-[5px] px-2 mb-5  outline-none disabled:opacity-30'
            type="number"
            placeholder='Digite o seu peso. ex: 75.3 (em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => SetWeightField(parseFloat(e.target.value))}
            name=""
            id="" 
            disabled={toShow? true:false}/>

            <button
            className='bg-colorButton text-white w-full rounded-md py-3 cursor-pointer transition-opacity duration-300 ease-out opacity-0s hover:opacity-80 mt-[32px] disabled:opacity-30 disabled:cursor-default' 
            onClick={handleCalculateButton}
            disabled={toShow? true:false}
            >Calcular</button>
        </div>

        <div className="flex-1 flex ">
        {!toShow &&
          <div className="flex-1 grid grid-cols-1 gap-5 sm:grid-cols-2  ">
            {levels.map((item,key)=>(
                 <GridItem key={key} item={item}/>
            ))}
          </div>
          }
          {
            toShow &&
            <div className="flex flex-1">
            <div className="absolute md:ml-[-25px] md:mt-[145px] flex justify-center items-center md:rounded-full w-[50px] h-[50px] bg-colorButton cursor-pointer
            ml-0  mt-0 rounded-md">
            <Image className='object-cover' src={arrow} alt="" width={25} title="Voltar" onClick={handleBackButton} />
              
            </div>
            <GridItem  item={toShow} />
            </div>
          }
        </div>
      </div>

    </div>
  )

}

export default Page;
