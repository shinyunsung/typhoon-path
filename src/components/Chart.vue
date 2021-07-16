<template>
    <canvas :id="this.mapName" style="height: 600px; width: 800px"></canvas>
</template>

<script>
import Chart from 'chart.js';

    export default {
        data: () => ({
            myChart: null,
            labels: [],
            values2002: [],
            values2003: [],
            values2004: [],
            values2005: [],
            values2006: [],
            values2007: [],
            values2008: [],
        }),
        props: ['mapDamage', 'mapName'],
        methods:{
            repairData(){
                var arr = []
                var value2002 = []
                var value2003 = []
                var value2004 = []
                var value2005 = []
                var value2006 = []
                var value2007 = []
                var value2008 = []

                for (let i = 0; i < this.mapDamage.length; i++) {
                    arr.push(this.mapDamage[i]['시도'])
                    value2002.push(this.mapDamage[i]['2002'])
                    value2003.push(this.mapDamage[i]['2003'])
                    value2004.push(this.mapDamage[i]['2004'])
                    value2005.push(this.mapDamage[i]['2005'])
                    value2006.push(this.mapDamage[i]['2006'])
                    value2007.push(this.mapDamage[i]['2007'])
                    value2008.push(this.mapDamage[i]['2008'])
                }
                this.labels = arr;
                this.values2002 = value2002
                this.values2003 = value2003
                this.values2004 = value2004
                this.values2005 = value2005
                this.values2006 = value2006
                this.values2007 = value2007
                this.values2008 = value2008
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
                            label: '2002',
                            data: this.values2002,
                            backgroundColor: 'rgba(52, 199, 132, 0.2)',
                            borderColor:  'rgba(52, 199, 132, 1)',
                            borderWidth: 1
                        },
                        {
                            label: '2003',
                            data: this.values2003,
                            backgroundColor: 'rgba(63, 99, 132, 0.2)',
                            borderColor:  'rgba(63, 99, 132, 1)',
                            borderWidth: 1
                        },
                        {
                            label: '2004',
                            data: this.values2004,
                            backgroundColor: 'rgba(26, 99, 82, 0.2)',
                            borderColor:  'rgba(26, 99, 82, 1)',
                            borderWidth: 1
                        },
                        {
                            label: '2005',
                            data: this.values2005,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor:  'rgba(255, 99, 132, 1)',
                            borderWidth: 1
                        },
                        {
                            label: '2006',
                            data: this.values2006,
                            backgroundColor: 'rgba(50, 99, 80, 0.2)',
                            borderColor:  'rgba(50, 99, 80, 1)',
                            borderWidth: 1
                        },
                        {
                            label: '2007',
                            data: this.values2007,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor:  'rgba(255, 99, 132, 1)',
                            borderWidth: 1
                        },
                        {
                            label: '2008',
                            data: this.values2008,
                            backgroundColor: 'rgba(105, 70, 132, 0.2)',
                            borderColor:  'rgba(105, 70, 132, 1)',
                            borderWidth: 1
                        },
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