import { level } from "../../helpers/imc"
import upImage from '../../image/up.png'
import downImage from '../../image/down.png'

import Image from "next/image"

type Props = {
    item:level
}



export const GridItem =({item}:Props) => {

    return(
        <div className={` flex flex-1  text-white rounded-lg justify-center items-center flex-col p-[10px] ${item.color}`}>
            <div className='w-[75px] h-[75px] rounded-full bg-black/10 flex justify-center items-center'>
                {/* {item.icon ==='up' &&  <img src={upImage} alt="" width={30}/> }
                {item.icon ==='down' &&  <img src={downImage} alt="" width={30}/> } */}

                <Image src={item.icon ==='up'?upImage:downImage} alt="" width={30} />
            </div>

            <div className='text-[22px] font-bold mt-1'>{item.title}</div>
            {item.yourImc &&
            <div className='text-[17px mt-10 mb-[50px]'>Seu IMC é de {item.yourImc.toFixed(2)} Kg/m² </div>
            }
            <div className='mt-3 text-[14px]'>
                <>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}