
angular.module('DKAPP').factory('DiscountCouponServices', DiscountCouponServices);

// CJ defined this function 2016-06-16
function DiscountCouponServices($http, $q){
    try{
        
        var discountCouponDetails = {};
        
        // userSharingDiscountCouponList
        discountCouponDetails.userSharingDiscountCouponList = function(preparedParamJsonObj){
            var promiseObject  = communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/DiscountCoupon/UserSharingDiscountCouponList", 'apiFile', 'GET', '', preparedParamJsonObj).done(function(retResponseJson){});
            return promiseObject;
        };
        
        // userSharedDiscountCouponList
        discountCouponDetails.userSharedDiscountCouponList = function(preparedParamJsonObj){
            var promiseObject  = communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/DiscountCoupon/UserSharedDiscountCouponList", 'apiFile', 'GET', '', preparedParamJsonObj).done(function(retResponseJson){});
            return promiseObject;
        };
        
        // addSharingOffersFrmOneUserToOtherUsers
        discountCouponDetails.addSharingOffersFrmOneUserToOtherUsers = function(preparedParamJsonObj){
            var promiseObject  = communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/DiscountCoupon/SharingOffersFrmOneUserToOtherUser", 'apiFile', 'POST', '', preparedParamJsonObj).done(function(retResponseJson){});
            return promiseObject;
        };
        
        return discountCouponDetails;
        
    }catch(ex){
        return false;
    }
} 
