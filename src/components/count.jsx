import React from 'react'
import './count.css'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }  from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';

const date=new Date();
var day=date.getDate()
const month=date.getMonth()+1
const year=date.getFullYear()
function LineChart() {
    const data={
        labels:[day-6+'/'+month+'/'+year,day-5+'/'+month+'/'+year,day-4+'/'+month+'/'+year,day-3+'/'+month+'/'+year,day-2+'/'+month+'/'+year,day-1+'/'+month+'/'+year,day+'/'+month+'/'+year],
        datasets:[
            {
                label:'Two wheelers',
                data:[10,20,30,6,24,24,45],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label:'lmv ',
                data:[1,34,68,46,35,3,2],
                borderColor:'rgb(0,250,154)',
                backgroundColor:'rgba(0,250,154,0.5)'
            },
            {
                label:'HMV',
                data:[32,3,3,2,67,2,2],
                borderColor:'rgb(0,100,200)',
                backgroundColor:'rgb(0,100,200)'
            }
        ]
    }
    return (
        <Line data={data} />
    )
}
function Count(){
    return(
        <div>
<div className='count-title'>
    <h3>Count Analysis</h3>
        <div className='choose'>
        <label for='analysis'>choose options</label>
        <select name='analysis'>
          <option value='weekly'>weekly</option>
          <option value='daily'>daily</option>
         
        </select>
        </div>
        </div>
        <div className='linechart'>
           <LineChart />
        </div>
        </div>);
        
}

export default Count