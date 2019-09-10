import React from 'react';


export default class UserProfileChart extends React.Component{


constructor(){
    super()
 
        document.addEventListener('DOMContentLoaded', function () {
            var myChart = Highcharts.chart('chartContainer', {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Fruit Consumption'
                },
                xAxis: {
                    categories: ['Apples', 'Bananas', 'Oranges']
                },
                yAxis: {
                    title: {
                        text: 'Fruit eaten'
                    }
                },
                series: [{
                    name: 'Jane',
                    data: [1, 0, 4]
                }, {
                    name: 'John',
                    data: [5, 7, 3]
                }]
            });
        });
       
}
    

    render(){
        return(
        <>
        <div className="card mb-2">
            <h5 className="text-center mt-3 mb-1">Charts</h5>
            <div className="" id="chartContainer" style={{width:"100%", height:"400px"}}></div>
        </div>
        </>
        )
    }
}