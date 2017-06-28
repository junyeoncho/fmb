/**
 * @Class Name : cmmWorkerSrvc.js
 * @Description : Worker 를 통해 데이터 검색 및 처리하는 공통 모듈
 * @Modification Information
 * @  수정일            수정자              수정내용
 * @ ---------------------------------------------------- *
 * @author  KB.SHIN
 * @since 2017.06.20
 * @version 1.0
 * @see
*/

'use strict';

angular.module('app').factory('CmmFactSrvc',  function() {
		var selectedFactId ="C";
		
		var factory={
				selectedFactId : selectedFactId,
				setSelectedFactId : setSelectedFactId,
				getSelectedFactId : getSelectedFactId
		};
		
		return factory;
		
    	
    	function setSelectedFactId(factId){
    		selectedFactId = factId;
    	}
    	
    	function getSelectedFactId(){
    		console.log("서비스"+selectedFactId);
    		return selectedFactId;
    	}
    
    });
