<template>
    <div class="main">
        <div style="width: 100%;">    
            <div class="map" style="height: 66vh; width:40vw" :id="this.mapName"></div>                            
        </div>
    </div>
</template>

<script>
    import L from "leaflet";
    import 'leaflet.markercluster';
    import "leaflet/dist/images/marker-shadow.png";
    import "leaflet/dist/images/marker-icon.png";
    import 'leaflet-arrowheads'
    import initGeoJsonData from '@/assets/korea.geo.json'


    export default {
        data() {
            return {
                map: null,
                tileLayer: null,
                choiceTyphoon: null,
                year2021: [ "두쥐완" ,"수리개" ,"초이완" ,"고구마" ,"참피" ],
                year2020: [ "하이선" ,"장미" ,"마이삭" ],
                year2002: [ "라마선" ,"루사" ],
            };

        },
        props: {
            mapName: String,
            data: Array,
            nameList: Array
        },
        methods: {
            initMap(zoom) {
                this.map = L.map(this.mapName).setView([37.54,126.96], zoom)
                this.tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    maxZoom: 10,
                    minZoom: 4
                });
                this.tileLayer.addTo(this.map);
                this.map.doubleClickZoom.disable();
                this.map.invalidateSize()
            },
           
            changeChoiceTyphoon(){
              for (var i = 0; i < this.nameList.length; i++) {
                const ChoiceTyphoon = this.data.filter( v => v.name == this.nameList[i])
                this.initLayers(ChoiceTyphoon)
              }
            },

            initLayers(ChoiceTyphoon) {
                // map 재설정
                this.map.setView([ChoiceTyphoon[0].latitude,ChoiceTyphoon[0].longitude], 1)
                var coords = []

                // 시간별 태풍 위치 생성
                for (var i = 0; i < ChoiceTyphoon.length; i++){
                  var Typhoon = ChoiceTyphoon[i];
                //   var rank;
                //   var size;

                //   switch (Typhoon.rank) {
                //     case "TD":
                //       rank = "sky"
                //       size = "10000"
                //       break;
                //     case "TS":
                //       rank = "green"
                //       size = "15000"
                //       break;
                //     case "STS":
                //       rank = "red"
                //       size = "20000"
                //       break;
                //     case "TY":
                //       rank = "purple"
                //       size = "25000"
                //       break;
                  
                //     default:
                //       rank = "gray"
                //       size = "10000"
                //       break;
                //   }
                  coords.push([Number(Typhoon.latitude), Number(Typhoon.longitude)])
                //   L.circle([Typhoon.latitude, Typhoon.longitude], {
                //     color: rank,
                //     fillColor: rank,
                //     fillOpacity: 0.5,
                //     radius: size
                //   }).bindPopup('Hello').addTo(this.map);
                }

                for (let i = 0; i < initGeoJsonData.features.length; i++) {
                  L.geoJSON(initGeoJsonData.features[i], {style: this.polystyle}).addTo(this.map);
                }

                // 화살표 생성
                console.log(coords);
                L.polyline([ coords ], {color: 'red'}).arrowheads({
                    fill: true,
                    yawn: 20,
                }).bindPopup(ChoiceTyphoon[0].name).addTo(this.map);
                
            },
            polystyle() {
                // for (let i = 0; i < this.data.length; i++) {
                //     console.log();
                // }
                return {
                    fillColor: 'none',
                    weight: 2,
                    opacity: 1,
                    color: 'white',  //Outline color
                    fillOpacity: 0.7
                };
            }

            
        },
        computed: {
            location() {
                return [37.54,126.96];
            },
        },
        watch: {
            location: function() {
              this.map.remove();
              this.initMap(1);
            },
            'nameList': 'changeChoiceTyphoon'
        },
        updated(){
        },
        mounted() {
            this.initMap(1);
            this.changeChoiceTyphoon()
        }
    };
</script>

<style scoped>
    @import "../../node_modules/leaflet/dist/leaflet.css";
    @import "../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css";
    @import "../../node_modules/leaflet.markercluster/dist/MarkerCluster.css";
    #map {
        flex: 1;
        z-index: 1;
    }
    .main {
        /* padding: 2vh 2vw; */
        /* padding-top: 70px; */
        float: left;
        height: 100%;
        display: inline-flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        line-height: 30px;
        z-index: 0;
    }


</style>

<style lang="scss">

    .year-table{
        display: flex;
        justify-content: space-between;
        li{
            padding: 10px 20px;
            list-style: none;
            cursor: pointer;
        }
    }
</style>