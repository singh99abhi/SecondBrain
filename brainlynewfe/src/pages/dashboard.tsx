
import { useEffect, useState } from 'react'

import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreatModal } from '../components/CreateModal'
import { PlusIcon } from '../icons/plusIcon'
import { ShareIcon } from '../icons/share'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'


export function DashBoard() {

  const [modalOpen,setModalOpen]=useState(false)
  const { contents = [], refresh } = useContent();

  useEffect(()=>{
    refresh()
  },[modalOpen])
 return   <>
      <div >
          <Sidebar/>
        <div className='p-4 ml-72 min-h-screen  bg-gray-100 border-2'>
        <CreatModal open={modalOpen } onClose={()=>{
          setModalOpen(false)
        }}/> 
        <div className='flex justify-end gap-4'>
        <Button onClick={()=>{
          setModalOpen(true)
        }} variant="primary" text="Add Content" startIcon={<PlusIcon/>}></Button>
        <Button onClick={async()=>{
          const response=await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
            share:true

          },{
            headers:{
              "Authorization":localStorage.getItem("token")
            }
          })
          const shareUrl=`http://localhost:5173/share/${response.data.hash}`
          alert(shareUrl)
        }}variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}></Button>

        </div>
        

        <div className='flex gap-4 flex-wrap' >
          
        {contents.map(({ type, link, title }, index) => (
  <Card key={index} type={type} link={link} title={title} />
))}

        
        
        </div>
        </div> 
        
        </div>
        
 
 </>
}


 