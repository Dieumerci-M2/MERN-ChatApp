import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'

const Dashboard = () => {
  const fetchData = async() => {
    const { data } = await axios.get( '/api/chats' )
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div>
      <Button variant="contained">Hello Chats</Button>
    </div>
  )
}

export default Dashboard
