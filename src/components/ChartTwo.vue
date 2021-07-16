<template>
    <canvas :id="this.mapName" style="height: 600px; width: 800px"></canvas>
</template>

<script>
import Chart from 'chart.js';

    export default {
        data: () => ({
            myChart: null,
            labels: [],
            values2018: [],
            values2019: [],
        }),
        props: ['mapDamage', 'mapName'],
        methods:{
            repairData(){
                var arr = []
                var values2018 = []
                var values2019 = []

                for (let i = 0; i < this.mapDamage.length; i++) {
                    arr.push(this.mapDamage[i]['시도'])
                    values2018.push(this.mapDamage[i]['2018'])
                    values2019.push(this.mapDamage[i]['2019'])
                }
                this.labels = arr;
                this.values2018 = values2018
                this.values2019 = values2019
            },
            createChart() {
                this.repairData()
                var name = this.mapName
                const ctx = document.getElementById(name).getContext('2d');
                this.myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: this.labels,
                        datasets: [{
                            label: '2018',
                            data: this.values2018,
                            backgroundColor: 'rgba(100, 60, 150, 0.2)',
                            borderColor:  'rgba(100, 60, 150, 0.2)',
                            borderWidth: 1
                        },
                        {
                            label: '2019',
                            data: this.values2019,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor:  'rgba(255, 99, 132, 1)',
                            borderWidth: 1
                        }
                        ]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
                this.myChart.update()
            }
        },
        mounted () {
            this.createChart()
        }
    };
</script>

<style scoped>
    


</style>

<style lang="scss">
  
</style>