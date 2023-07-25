'use client'

import {useEffect } from 'react'
import {Crisp} from 'crisp-sdk-web'

export const CrispChat=()=>{
    useEffect(()=>{
        Crisp.configure("f3ff2b29-061a-4a74-ac4f-5139b8618445")
    },[])

    return null
}