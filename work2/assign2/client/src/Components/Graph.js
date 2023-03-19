import React from 'react'
import {Line} from 'react-chartjs-2';
import{
    Chart,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

Chart.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
function Graph(props) {
    const data ={
        labels: props.products.map(a => a.title),
        datasets: [{
            label : "Available stocks of the product",
            data : props.products.map(a => a.stock),
            backgroundColor: 'aqua',
            borderColor: 'blue',
            pointBorderColor: 'pink',
            fill: true
        }]
    }
    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y:{
                min: 0,
                max: 150
            }
        }
        
    }

    console.log('this is',props.products.map(a => a.stock))

    return (
        <div className='container py-5'>
            <h1 align="center">Available Stocks of the Products</h1>
        <Line data={data} options={options}/>
        </div>
    )
}

export default Graph