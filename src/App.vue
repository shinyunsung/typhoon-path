<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      style="z-index: 1000000"
    >
      태풍 경로 분석 대시보드
    </v-app-bar>

      <v-row
        align="center"
        justify="space-around"
        style="margin-top: 10vh"
      >
      <div>
        <h2>
          2002~2008 태풍 경로 분석
        </h2>
        <div style="width: 40vw;" class="my-card">
          <h3 style="margin: 0 auto">2002~2008 태풍 경로</h3>
          <Map mapName="mapOne" :data="this.mapOneData" :nameList="this.mapOneNameList"/>
        </div>
        <div style="width: 40vw;" class="my-card">
          <h3 style="margin: 0 auto">2002~2008 태풍 피해액</h3>
          <Chart  mapName="chartOne"  :mapDamage="this.mapOneDamage" style="margin: 5vh 0;"/>
        </div>
      </div>
      <div>
        <h2>
          2018~2019 태풍 경로 분석
        </h2>
        <div style="width: 40vw;" class="my-card">
          <h3 style="margin: 0 auto">2002~2008 태풍 경로</h3>
          <Map mapName="mapTwo" :data="this.mapTwoData" :nameList="this.mapTwoNameList"/>
        </div>
        <div style="width: 40vw;" class="my-card">
          <h3 style="margin: 0 auto">2018~2019 태풍 피해액</h3>
          <ChartTwo mapName="chartTwo"  :mapDamage="this.mapTwoDamage" style="margin: 5vh 0;"/>
        </div>
      </div>
      </v-row>
  </v-app>
  
</template>

<script>
import Map from './components/Map';
import Chart from './components/Chart';
import ChartTwo from './components/ChartTwo';
import Typhoon2002 from "./assets/TyphoonData/Typhoon2002.json"
import Typhoon2002_2008 from "./assets/TyphoonData/Typhoon2002_2008.json"
import Typhoon2018_2019 from "./assets/TyphoonData/Typhoon2018_2019.json"
import Data2002_2008 from "./assets/DamageData/2002_2008.json"
import Data2018_2019 from "./assets/DamageData/2018_2019.json"

export default {
  name: 'App',

  components: {
    Chart,
    ChartTwo,
    Map,
  },

  data: () => ({
    mapOneData: Typhoon2002_2008,
    mapTwoData: Typhoon2018_2019,
    mapOneNameList:["루사", "매미", "에위니아", "나리"],
    mapTwoNameList: ['다나스', '프란시스코', '링링', '타파', '미탁', '쁘라삐룬', '룸비아', '솔릭', ''],
    mapOneDamage: Data2002_2008,
    mapTwoDamage: Data2018_2019,
    radioGroup: 'oneSection',
    sheet: false,
  }),

  watch: {
      'radioGroup': function() {
        switch (this.radioGroup) {
          case 'oneSection':
            this.mapOneData = Typhoon2002
            this.mapTwoData = Typhoon2002
            this.mapOneNameList = ["라마순"],
            this.mapTwoNameList = ['다나스', '프란시스코', '링링', '타파', '미탁', '쁘라삐룬', '룸비아', '솔릭']
            break;
          case 'twoSection':
            this.mapOneData = Typhoon2002_2008
            this.mapTwoData = Typhoon2002
            this.mapOneNameList = ["라마순", "루사", "매미", "에위니아"]
            break;
          case 'threeSection':
            this.mapOneData = Typhoon2002
            this.mapTwoData = Typhoon2002
            break;
        
          default:
            break;
        }
      },
  },
};
</script>

<style scoped>
.my-card{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
</style>
