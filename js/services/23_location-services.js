
(function(){
    
    angular.module('DKAPP').factory('LocationServices', LocationServices);

    function LocationServices($rootScope){
        try{

            var locationDetails = {};

            locationDetails.showSelectedDeliveryAreaTextHeader = function(){
                $rootScope.selectedDeliveryAreaTextHeader = '';
                $rootScope.isShowSelectedDeliveryAreaTextHeader = false;
                var infoObj = getInfoUserSelectedDeliveryCityAreaDessertsProductType();
                if(infoObj!=='' && infoObj!==undefined 
                    && infoObj!==false && jQuery.isEmptyObject(infoObj)===false){
                    $rootScope.isShowSelectedDeliveryAreaTextHeader = true;
                    $rootScope.selectedDeliveryAreaTextHeader = infoObj['userSelectedArea'];
                }  
            };

            locationDetails.resetSelectedDeliveryAreaTextHeader = function(){
                $rootScope.selectedDeliveryAreaTextHeader = '';
                $rootScope.isShowSelectedDeliveryAreaTextHeader = false;
            };

            locationDetails.notifyToUserForSelectedDeliveryarea = function(){
                $rootScope.selectedDeliveryAreaTextHeader = '';
                var infoObj = getInfoUserSelectedDeliveryCityAreaDessertsProductType();
                if(infoObj!=='' && infoObj!==undefined 
                    && infoObj!==false && jQuery.isEmptyObject(infoObj)===false){
                    $rootScope.selectedDeliveryAreaTextHeader = infoObj['userSelectedArea'];
                    var msgStr = "You selected delivery location is : "+infoObj['userSelectedArea']+" - "+infoObj['userSelectedAreaPincode'];
                    var notifyInfoConfigObj = {
                        icon:false,
                        title:false,
                        sound:false, 
                        size:'normal', 
                        msg:"<p style='text-align:center;'>"+msgStr+"</p>",
                        delay:2000,
                        position:"top left" ,
                        showClass:"zoomIn notifyToUserOnlyForSelectedDeliveryArea"
                    }; 
                    showNotificationBoxMsg('', notifyInfoConfigObj);
                }  
            };

            locationDetails.getDeliveryCityList = function(apiParamJsonObj){
                var blockUIObj = {};
                blockUIObj['css'] = {"padding":10};
                blockUIObj['message'] = "<img src='"+globalBaseSitePath+"images/loading.gif'><br><center>Please wait desserts khazana is loading........</center>";
                showHideLoaderBox('show', blockUIObj);
                var promiseObject  = communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/Location/DeliveryCity", 'apiFile', 'GET', '', apiParamJsonObj).done(function(retResponseJson){
                    showHideLoaderBox('hide');
                });
                return promiseObject;
            };

            locationDetails.getDKDeliveryAreaList = function(apiParamJsonObj){
                var blockUIObj = {};
                blockUIObj['css'] = {"padding":10};
                blockUIObj['message'] = "<img src='"+globalBaseSitePath+"images/loading.gif'><br><center>Please wait desserts khazana is loading........</center>";
                showHideLoaderBox('show', blockUIObj);
                var promiseObject  = communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/Location/DeliveryArea", 'apiFile', 'GET', '', apiParamJsonObj).done(function(retResponseJson){
                    showHideLoaderBox('hide');
                });
                return promiseObject;
            };

            locationDetails.getDKDeliveryAreaBasedDessertsTypeList = function(apiParamJsonObj){
                var blockUIObj = {};
                blockUIObj['css'] = {"padding":10};
                blockUIObj['message'] = "<img src='"+globalBaseSitePath+"images/loading.gif'><br><center>Please wait desserts khazana is loading........</center>";
                showHideLoaderBox('show', blockUIObj);
                var promiseObject  = communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/Product/DeliveryAreaBasedDessertsTypeList", 'apiFile', 'GET', '', apiParamJsonObj).done(function(retResponseJson){
                    showHideLoaderBox('hide');
                });
                return promiseObject;
            };
            
            return locationDetails;

        }catch(ex){
            console.log("problem in LocationServices ex=>"+ex);
            return false;
        }
    }
    
})();
