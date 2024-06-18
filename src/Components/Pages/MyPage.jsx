import React from 'react'
import My from '../My/My'
import {useParams} from 'react-router-dom'


const MyPage = () => {
    const params = useParams()
    
    
  return (
    <My login ={params.login}/>
  )
}

export default MyPage