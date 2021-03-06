/**
 * @Class Name : cmmWorkerSrvc.js
 * @Description : Worker 를 통해 화면 전환, 데이터 처리하는 공통 모듈
 * @Modification Information
 * @  수정일            수정자              수정내용
 * @ ---------------------------------------------------- *
 * @author  
 * @since 2017.06.20
 * @version 1.0
 * @see
*/

'use strict';

angular.module('app').factory('CmmWorkerSrvc',  ['CmmFactSrvc','$location', function(CmmFactSrvc, $location) {
	
	

	// 서비스 목록
    var factory = {
    	worker1 : {worker1}, 
    	worker2 : {worker2},
    	worker3 : {worker3},
    	workerStart : workerStart,
    	workerStop : workerStop
    	}
	
    var worker1 = {
    		worker : undefined, 
    		data : undefined
    }
    var worker2 = {
    		worker : undefined, 
    		data : undefined,
    		sts  : undefined
    }
    var worker3 = {
    		worker : undefined, 
    		data : undefined
    }
        	
    
    	//페이지 내에서 데이터를 리로드하는 워커 시작함수
    	function workerStart(workerName, url, func){
    	     //브라우저가 웹 워커를 지원하는지 검사한다 .
	        if(!!window.Worker){    
	           
	           //워커가 이미 존재하면 종료시킨다 .
	           if(workerName.worker!=undefined){
	        	  workerName.worker.terminate();
	        	  workerName.worker=undefined;
	           }      
	           
	           //새로운 워커(객체)를 생성한다.
	           workerName.worker = new Worker(url);       
	           
	           //data를 Worker로 넘긴다.
	           
	           var SettingTime = workerName.data;
	           for(var i =0; i < SettingTime.length; i++){
	        	   if('/'+SettingTime[i].pageNm ==$location.url()){
	        		   workerName.worker.postMessage(SettingTime[i]);
	        	   }
	           }
	           
           		// 워커로부터 전달되는 메시지를 받는다.
           		workerName.worker.onmessage = function(evt){ 
           			if(workerName.sts=='stop'){
           				workerStart(workerName, url, func);
           			}
           			//
           			return func();
	             }  
	        }
	        else {
	          alert("현재 브라우저는 웹 워커를 지원하지 않습니다");
	        }
    	}
    
    
	    //워커 종료
	    function workerStop(workerName){
	    
	        if(workerName.worker!=undefined){
	        	workerName.worker.terminate();
	        	workerName.worker=undefined;
	        	console.log("worker stop")
	        }
	    }
   
    	
    	return factory;
    }]);
