import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        ecoData: [], // 경제 데이터 저장 // deploy는 안함
        ecoChart: false,
        selectYear: false, // map field 연도별 선택
        selectQuater: false, // map field 분기별 선택
        applyFilter:false, // map filter > 필터적용 클릭여부
        location1: "전체",
        location2: "전체",
        location3: "전체",
        scale: "전체", // map filter > 자산형태별 규모별 필터
        typeWarehouse : "전체",
        nodata: false,
        searchLocation: [37.54,126.96], // map content > initial 지도 위치
        showSearchChart: false,
        
        // http://3.35.90.248:10100/ipr-api/v1.0/area에서 받은 데이터를 저장하는 변수
        areaData: '',
        // http://3.35.90.248:10100/ipr-api/v1.0/map/all_data에서 받은 데이터를 저장하는 변수
        areaAllData: null,

        propertyLatLng: [37.565704,	126.98708], // property profile > initial 지도 위치
        searchBuildingName: "ibk파이낸스타워", // property profile > initial 건물이름
        mapLoading: false, // map content/ property profile > circular loading 표시 
        idList: [], // building id 전체를 api를 통해 가져와서 넣어놓음
        
        rvNodata: false, // 로드뷰 데이터 > error 났을때 (로드뷰 데이터가 없을때) 처리 변수
        tenantsList: [], // property profile/tenants table > 데이터 저장
        ownersList:[], // property profile/owners table > 데이터 저장

    },
});