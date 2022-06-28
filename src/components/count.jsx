import React from 'react'
import './count.css'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }  from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';
import data from './data'


const date=new Date();
var day=date.getDate()
const month=date.getMonth()+1
const year=date.getFullYear()


function Count(){
    return(
        <div>
<div className='count-title'>
    <h3>Count Analysis</h3>
        <div className='choose'>
        <label for='analysis'>choose options</label>
        <select name='analysis'>
          <option value='weekly'>weekly</option>
          <option value='daily'><a href="/count/hourly"> Hour </a></option>
         
        </select>
        </div>
        </div>
        <div className='linechart'>
           <Line data={data} />
        </div>
        </div>);
        
}

export default Count

