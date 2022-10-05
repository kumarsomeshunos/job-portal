import React from 'react'
import Table from './Table'
import Card from "./Card"
import Sort from '../Sort'

const Dashboard = () => {
  return (
    <div>
        <Card />
        <br />
        <Sort />
        <br />
        <h2 style={{"text-align": "center"}}>Applicants List</h2><br></br>
        <Table />
    </div>
  )
}

export default Dashboard