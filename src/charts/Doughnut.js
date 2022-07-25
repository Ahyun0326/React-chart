import {Doughnut} from "react-chartjs-2";
import 'chart.js/auto';

const data = {
    labels:["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],  //값들에 해당하는 이름
    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3], //labels에 해당하는 값(순서대로)
            backgroundColor: [  //labels에 해당하는 값 (순서대로)
                'rgba(255, 99, 132, 0.2',
                'rgba(54, 162, 235, 0.2',
                'rgba(255, 206, 86, 0.2',
                'rgba(75, 192, 192, 0.2',
                'rgba(153, 102, 255, 0.2',
                'rgba(255, 159, 64, 0.2',

            ],
            borderColor:[   //그래프 경계선
                'rgba(255, 99, 132, 1',
                'rgba(54, 162, 235, 1',
                'rgba(255, 206, 86, 1',
                'rgba(75, 192, 192, 1',
                'rgba(153, 102, 255, 1',
                'rgba(255, 159, 64, 1',
            ],
            borderWidth: 1, //경계선 두께
        },
    ],
};
function DoughnutChart() {
    return (
      <div style={{width:"500px", margin: "0 auto"}}>
        <h1>Doughnut Chart</h1>
        <Doughnut data={data}/>
      </div>
    );
  }
  
  export default DoughnutChart;
  