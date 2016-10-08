
(function(){

    angular.module('DKAPP').factory('OrderCartServices', OrderCartServices);

    // CJ defined this function 2016-06-16
    function OrderCartServices($rootScope){
        try{

            var orderDetails = {};

            // resetUserOrdercartDashboardVariableData
            orderDetails.resetUserOrdercartDashboardVariableData = function(userOrdercartDashboardDataObj){
                if(userOrdercartDashboardDataObj!=='' && userOrdercartDashboardDataObj!==false 
                    && userOrdercartDashboardDataObj!==undefined){
                    $rootScope.ordercartCount = userOrdercartDashboardDataObj['ordercartCount'];
                    $rootScope.totalStores = userOrdercartDashboardDataObj['totalStores'];
                    $rootScope.ordercartItemRequestedCount = userOrdercartDashboardDataObj['ordercartItemRequestedCount'];
                    $rootScope.subtotalOrderAmt = userOrdercartDashboardDataObj['subtotalOrderAmt'];
                    $rootScope.totalDeliveryFee = userOrdercartDashboardDataObj['totalDeliveryFee'];
                    $rootScope.totalOrderAmt = userOrdercartDashboardDataObj['totalOrderAmt'];
                }else{
                    $rootScope.ordercartCount = 0;
                    $rootScope.totalStores = 0;
                    $rootScope.ordercartItemRequestedCount = 0;
                    $rootScope.subtotalOrderAmt = 0;
                    $rootScope.totalDeliveryFee = 0;
                    $rootScope.totalOrderAmt = 0;
                }
            };

            // refreshUserOrdercartDashboardSummaryDataDetails
            orderDetails.refreshUserOrdercartDashboardSummaryDataDetails = function(){
                try{
                    // fetch param data from session
                    var paramDataObj = getParamDataAuthenticatedUserDetailsFromSession();
                    if(paramDataObj!==false && jQuery.isEmptyObject(paramDataObj)===false){
                        var apiParamJsonObj = {};
                        apiParamJsonObj['dkParamDataArr'] = paramDataObj;
                        communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/OrderCart/UserOrdercartDashboardSummaryData", 'apiFile', 'GET', '', apiParamJsonObj).done(function(retResponseJson){
                            $rootScope.$apply(function(){
                                var userOrdercartDashboardDataObj = false;
                                if(retResponseJson!==false && retResponseJson!==undefined && retResponseJson!==''){
                                    userOrdercartDashboardDataObj = extractDataFromReturnAjaxResponse('GET', 'apiFile', 'orderCartDashboardSummary', retResponseJson);
                                }
                                if(userOrdercartDashboardDataObj!=='' && userOrdercartDashboardDataObj!==false 
                                    && userOrdercartDashboardDataObj!==undefined){
                                    orderDetails.resetUserOrdercartDashboardVariableData(userOrdercartDashboardDataObj);
                                }else{
                                    orderDetails.resetUserOrdercartDashboardVariableData(false);
                                }
                            });
                        });
                    }else{
                        orderDetails.resetUserOrdercartDashboardVariableData(false);
                    }
                }catch(ex){
                    console.log("Problem in refreshUserOrdercartDashboardSummaryDataDetails=>"+ex);
                }
            };

            // addProductDataInOrdercartFromSession & item directly added in DB
            orderDetails.addProductDataInOrdercartFromSession = function(fcontentClass, productDataFromSession){
                try{
                    // collect product data
                    var paramDataObj = getParamDataToAddProductInOrdercart(fcontentClass, productDataFromSession);
                    if(paramDataObj!==false && jQuery.isEmptyObject(paramDataObj)===false){
                        var apiParamJsonObj = {};
                        apiParamJsonObj['dkParamDataArr'] = paramDataObj;
                        // calling OrderCartServices 
                        orderDetails.addItemOrdercart(apiParamJsonObj).done(function(retResponseJson){
                            $rootScope.$apply(function(){
                                var isProductAddedInOrdercart = 'FALSE';
                                var notificationMsgStr = "Please try again to add item in your order cart !";
                                if(retResponseJson!==false && retResponseJson!==undefined && retResponseJson!==''){
                                    isProductAddedInOrdercart = extractDataFromReturnAjaxResponse('POST', 'apiFile', 'isProductAddedInOrdercart', retResponseJson);
                                }
                                if(isProductAddedInOrdercart==='TRUE'){
                                    notificationMsgStr = "Item added in your order cart successfully !";
                                    clearProductContentAfterAddedProductInOrdercart(fcontentClass);
                                    // refresh user order cart dashboard summary data using services
                                    orderDetails.refreshUserOrdercartDashboardSummaryDataDetails();
                                }
                                showNotificationBoxMsg(notificationMsgStr);
                            });
                        });
                    }
                }catch(ex){
                    console.log("problem in addProductDataInOrdercart ex=>"+ex);
                }
            };

            // ordercartItemList
            orderDetails.ordercartItemList = function(preparedParamJsonObj){
                var promiseObject  = communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/OrderCart/ManageOrdercartItem", 'apiFile', 'GET', '', preparedParamJsonObj).done(function(retResponseJson){
                });
                return promiseObject;
            };

            // addItemOrdercart
            orderDetails.addItemOrdercart = function(preparedParamJsonObj){
                var promiseObject  = communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/OrderCart/ManageOrdercartItem", 'apiFile', 'POST', '', preparedParamJsonObj).done(function(retResponseJson){
                });
                return promiseObject;
            };

            // updateItemOrdercart
            orderDetails.updateItemOrdercart = function(preparedParamJsonObj){
                var promiseObject  = communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/OrderCart/ManageOrdercartItem", 'apiFile', 'PUT', '', preparedParamJsonObj).done(function(retResponseJson){
                });
                return promiseObject;
            };

            // removeItemOrdercart
            orderDetails.removeItemOrdercart = function(preparedParamJsonObj){
                var promiseObject  = communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/OrderCart/ManageOrdercartItem", 'apiFile', 'DELETE', '', preparedParamJsonObj).done(function(retResponseJson){
                });
                return promiseObject;
            };
            
            // ordercartItemList
            orderDetails.getStorewiseOrderSummaryForCheckoutProcess = function(preparedParamJsonObj){
                var promiseObject  = communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/OrderCart/StorewiseOrderSummaryCheckoutProcess", 'apiFile', 'GET', '', preparedParamJsonObj).done(function(retResponseJson){
                });
                return promiseObject;
            };
            
            orderDetails.updateOrderDeliveryAddressInOrdercartStore = function(preparedParamJsonObj){
                var promiseObject  = communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/OrderCart/ManageDeliveryAddressOrdercartStorewise", 'apiFile', 'PUT', '', preparedParamJsonObj).done(function(retResponseJson){
                });
                return promiseObject;
            };

            return orderDetails;

        }catch(ex){
            return false;
        }
    } 

})();