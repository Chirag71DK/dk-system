
//////////////////////// DK session related data ////////////////////////

// CJ defined this function 2016-07-28

function initializeDkSessionData(){
    try{
        
        var userSessionObj = {};
        userSessionObj['usersession_starttimestamp'] = (new Date()).getTime();
        userSessionObj['lastupdated_sessiontimestamp'] = '';
        userSessionObj['user_sessionid'] = '';
        userSessionObj['udblogId'] = '';
        userSessionObj['userProfileTypeId'] = '';
        userSessionObj['isUserInfoTrackedAccessingWebsites'] = 'N';

        var userRecentlyViewedProductObj = {};

        var userSelectedDeliveryCityAreaDessertsTypeObj = {};
        userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue'] = '1';
        userSelectedDeliveryCityAreaDessertsTypeObj['countryname'] = 'India';
        userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'] = '';
        userSelectedDeliveryCityAreaDessertsTypeObj['cityname'] = '';
        userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'] = '';
        userSelectedDeliveryCityAreaDessertsTypeObj['areapincode'] = '';
        userSelectedDeliveryCityAreaDessertsTypeObj['areaname'] = '';
        userSelectedDeliveryCityAreaDessertsTypeObj['dessertsproduct'] = '';
        userSelectedDeliveryCityAreaDessertsTypeObj['dessertsproducttitle'] = '';
        userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'] = '';

        var userProductObj = {};
        userProductObj['shopstore_value'] = '';
        userProductObj['all_shopstorevalue'] = '';
        userProductObj['shopstore_name'] = '';
        userProductObj['producttype_value'] = '';
        userProductObj['producttype_name'] = '';
        userProductObj['producttype_categoryvalue'] = '';
        userProductObj['producttype_categoryname'] = '';
        userProductObj['producttype_listvalue'] = '';
        userProductObj['producttype_listname'] = '';
        userProductObj['producttype_featurevalue'] = '';
        userProductObj['productviewed_bystatus'] = 'productwise';

        var userPartyOrderObj = {};
        userPartyOrderObj['title'] = '';

        var corporateTieupObj = {};
        corporateTieupObj['title'] = '';

        var customizeOrderObj = {};
        customizeOrderObj['title'] = '';

        var userAccessLastPageFromObj = {"page":""};

        var userOrderItemObj = {};
        
        var userOrdercartSummaryObj = {"totalRequestedItems":0};

        var requestedSectionUserAccountObj = {};

        var dkParamObj = {};
        dkParamObj['userSession'] = userSessionObj;
        dkParamObj['userSelectedDeliveryCityAreaDessertsType'] = userSelectedDeliveryCityAreaDessertsTypeObj;
        dkParamObj['userProduct'] = userProductObj;
        dkParamObj['partyOrder'] = userPartyOrderObj;
        dkParamObj['corporateTieup'] = corporateTieupObj;
        dkParamObj['customizeOrder'] = customizeOrderObj;
        dkParamObj['userRecentlyProduct'] = userRecentlyViewedProductObj;
        dkParamObj['userAccessLastPageFromObj'] = userAccessLastPageFromObj;
        dkParamObj['userOrderItemObj'] = userOrderItemObj;
        dkParamObj['userOrdercartSummaryObj'] = userOrdercartSummaryObj;
        dkParamObj['requestedSectionUserAccountObj'] = requestedSectionUserAccountObj;

        sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(dkParamObj));
        generateDkUserSessionId();
        return true;
    }catch(ex){
        return false;
    }    
}

// CJ defined this function 2016-07-28
function resetDKSessionData(){
    try{
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
        
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            
            // user session data obj will reset
            var userSessionObj = {};
            userSessionObj['usersession_starttimestamp'] = (new Date()).getTime();
            userSessionObj['lastupdated_sessiontime'] = '';
            userSessionObj['user_sessionid'] = '';
            userSessionObj['udblogId'] = '';
            userSessionObj['userProfileTypeId'] = '';
            
            // user product data obj will reset
            var userProductObj = {};
            userProductObj['shopstore_value'] = '';
            userProductObj['all_shopstorevalue'] = '';
            userProductObj['shopstore_name'] = '';
            userProductObj['producttype_value'] = '';
            userProductObj['producttype_name'] = '';
            userProductObj['producttype_categoryvalue'] = '';
            userProductObj['producttype_categoryname'] = '';
            userProductObj['producttype_listvalue'] = '';
            userProductObj['producttype_listname'] = '';
            userProductObj['producttype_featurevalue'] = '';
            userProductObj['productviewed_bystatus'] = 'productwise';
            
            var userOrdercartSummaryObj = {"totalItems":0};
            
            dkParamObj['userSession'] = userSessionObj;
            dkParamObj['userProduct'] = userProductObj;
            dkParamObj['userOrdercartSummaryObj'] = userOrdercartSummaryObj;
            dkParamObj['userAccessLastPageFromObj'] = {"page":""};
            dkParamObj['userOrderItemObj'] = {};
            dkParamObj['requestedSectionUserAccountObj'] = {};
            
            sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(dkParamObj));
        }
    }catch(ex){
        console.log("Problem in resetDKSessionData=>"+ex);
    }
}


/////////////////////// Tracking user accessing websites info related data //////////////////////////

// CJ defined this function 2016-07-24
function getParamDataObjForAddingTrackingUserInfoAccessingWebsitesDetails(fromPageLoad){
    try{
        var paramObj = {};
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(dkParamObj.hasOwnProperty('userSession')===true){
                if(dkParamObj['userSession']['user_sessionid']!=='' 
                    && (dkParamObj['userSession']['user_sessionid']).length>=20){
                    paramObj['user_sessionid'] = dkParamObj['userSession']['user_sessionid'];
                    paramObj['usersession_startimestamp'] = dkParamObj['userSession']['usersession_starttimestamp'];
                    // update user session data obj 
                    dkParamObj['userSession']['isUserInfoTrackedAccessingWebsites'] = 'Y';
                    sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(dkParamObj));
                }
            }
        }
        return paramObj;
    }catch(ex){
        return false;
    }
}


//////////////////////// Delivery city list related data ////////////////////////////////////


// CJ defined this function 2016-06-05
function getParamObjFromSessionForLoadingDeliveryCityList(){
    try{
        var paramObj = {};
        paramObj['country_ids'] = '';
        paramObj['city_ids'] = '';
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(dkParamObj.hasOwnProperty('userSelectedDeliveryCityAreaDessertsType')===true){
                // extract user suggested city area session data
                var userSelectedDeliveryCityAreaDessertsTypeObj = dkParamObj['userSelectedDeliveryCityAreaDessertsType'];
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('countryvalue')===true){
                    paramObj['country_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue'];
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('cityvalue')===true){
                    paramObj['city_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'];
                }
            }
        }
        if(paramObj['country_ids']==='1'){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}


// CJ defined this function 2016-07-10
function storeSelectedDeliveryCityDetailsInSessionStorage(paramObj, isResetAllSessionData){
    try{
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['cityvalue'] = '';
            existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['cityname'] = '';
            if(paramObj!==false && paramObj!==undefined && paramObj!==''){
                existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['cityvalue'] = paramObj['cityId'];
                existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['cityname'] = paramObj['cityName'];
            }
            if(isResetAllSessionData==='Y'){
                existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['dessertsproduct'] = '';
                existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['dessertsproducttitle'] = '';
                existingDkParamObj['userProduct']['shopstore_value'] = '';
                existingDkParamObj['userProduct']['producttype_value'] = '';
                existingDkParamObj['userProduct']['producttype_categoryvalue'] = '';
                existingDkParamObj['userProduct']['producttype_listvalue'] = '';
                existingDkParamObj['userProduct']['producttype_featurevalue'] = '';
                existingDkParamObj['userProduct']['productviewed_bystatus'] = 'productwise';
                existingDkParamObj['userProduct']['shopstore_name'] = '';
                existingDkParamObj['userProduct']['producttype_name'] = '';
                existingDkParamObj['userProduct']['producttype_categoryname'] = '';
                existingDkParamObj['userProduct']['producttype_listname'] = '';
            }
            sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(existingDkParamObj));
        }
    }catch(ex){}
}


//////////////////////// Delivery area list related data ////////////////////////////////////

// CJ defined this function 2016-06-05
function getParamObjFromSessionForLoadingDeliveryAreaList(){
    try{
        var paramObj = {};
        paramObj['country_ids'] = '1';
        paramObj['city_ids'] = '';
        paramObj['area_ids'] = '';
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(dkParamObj.hasOwnProperty('userSelectedDeliveryCityAreaDessertsType')===true){
                // extract user suggested city area session data
                var userSelectedDeliveryCityAreaDessertsTypeObj = dkParamObj['userSelectedDeliveryCityAreaDessertsType'];
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('countryvalue')===true){
                    if(userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue']==='1'){
                        paramObj['country_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('cityvalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue']!==''){
                        paramObj['city_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('areavalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['areavalue']!==''){
                        paramObj['area_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'];
                    }
                }
            }
        }
        return paramObj;
    }catch(ex){
        return false;
    }
}


// CJ defined this function 2016-07-10
function storeSelectedDeliveryAreaDetailsInSessionStorage(paramObj, isResetAllSessionData){
    try{
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['areavalue'] = '';
            existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['areaname'] = '';
            existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['areapincode'] = '';
            existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['ccaId'] = '';
            if(paramObj!==false && paramObj!=='' && jQuery.isEmptyObject(paramObj)===false){
                if(paramObj.hasOwnProperty('areaId')===true && paramObj.hasOwnProperty('areaName')===true){
                    existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['areavalue'] = paramObj['areaId'];
                    existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['areaname'] = paramObj['areaName'];
                    existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['areapincode'] = paramObj['areaPincode'];
                    existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['ccaId'] = paramObj['ccaId'];
                }
            } 
            if(isResetAllSessionData==='Y'){
                existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['dessertsproduct'] = '';
                existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['dessertsproducttitle'] = '';
                existingDkParamObj['userProduct']['shopstore_value'] = '';
                existingDkParamObj['userProduct']['producttype_value'] = '';
                existingDkParamObj['userProduct']['producttype_categoryvalue'] = '';
                existingDkParamObj['userProduct']['producttype_listvalue'] = '';
                existingDkParamObj['userProduct']['producttype_featurevalue'] = '';
                existingDkParamObj['userProduct']['productviewed_bystatus'] = 'productwise';
                existingDkParamObj['userProduct']['shopstore_name'] = '';
                existingDkParamObj['userProduct']['producttype_name'] = '';
                existingDkParamObj['userProduct']['producttype_categoryname'] = '';
                existingDkParamObj['userProduct']['producttype_listname'] = '';
            }
            sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(existingDkParamObj));
        }
    }catch(ex){}
}


//////////////////////// Delivery area served dessert type list related data /////////////////////////

// CJ defined this function 2016-06-05
function getParamObjFromSessionForLoadingDeliveryAreaBasedDessertsTypeList(){
    try{
        var paramObj = {};
        paramObj['country_ids'] = '1';
        paramObj['city_ids'] = '';
        paramObj['area_ids'] = '';
        paramObj['ccaId'] = '';
        paramObj['producttype_ids'] = '';
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(dkParamObj.hasOwnProperty('userSelectedDeliveryCityAreaDessertsType')===true){
                // extract user suggested city area session data
                var userSelectedDeliveryCityAreaDessertsTypeObj = dkParamObj['userSelectedDeliveryCityAreaDessertsType'];
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('ccaId')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['ccaId']!==''){
                        paramObj['ccaId'] = userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('countryvalue')===true){
                    paramObj['country_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue'];
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('cityvalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue']!==''){
                        paramObj['city_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('areavalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['areavalue']!==''){
                        paramObj['area_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('dessertsproduct')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['dessertsproduct'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['dessertsproduct']!==''){
                        paramObj['producttype_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['dessertsproduct'];
                    }
                }
            }
        }
        return paramObj;
    }catch(ex){
        return false;
    }
}


// CJ defined this function 2016-07-10
function storeDefaultDeliveryDessertsTypeDetailsInSessionStorage(paramObj, isResetAllSessionData){
    try{
        var storedDataStatus = false;
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['dessertsproduct'] = '';
            existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['dessertsproducttitle'] = '';
            if(paramObj!==false && paramObj!=='' && jQuery.isEmptyObject(paramObj)===false){
                if(paramObj.hasOwnProperty('dessertsTypeId')===true && paramObj.hasOwnProperty('dessertsTypeTitle')===true){
                    existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['dessertsproduct'] = paramObj['dessertsTypeId'];
                    existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['dessertsproducttitle'] = paramObj['dessertsTypeTitle'];
                    if(isResetAllSessionData==='Y'){
                        existingDkParamObj['userProduct']['all_shopstorevalue'] = '';
                        existingDkParamObj['userProduct']['shopstore_value'] = '';
                        existingDkParamObj['userProduct']['shopstore_name'] = '';
                        existingDkParamObj['userProduct']['producttype_value'] = paramObj['dessertsTypeId'];
                        existingDkParamObj['userProduct']['producttype_name'] = paramObj['dessertsTypeTitle'];
                        existingDkParamObj['userProduct']['producttype_categoryvalue'] = '';
                        existingDkParamObj['userProduct']['producttype_categoryname'] = '';
                        existingDkParamObj['userProduct']['producttype_listvalue'] = '';
                        existingDkParamObj['userProduct']['producttype_listname'] = '';
                        existingDkParamObj['userProduct']['producttype_featurevalue'] = '';
                        existingDkParamObj['userProduct']['productviewed_bystatus'] = 'productwise';
                    }
                }
            } 
            sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(existingDkParamObj));
            storedDataStatus = true;
        }
        return storedDataStatus;
    }catch(ex){
        return false;
    }
}


///////////// all products level related code ////////////////

// CJ defined this function 2016-09-05
function resetUserproductSessionData(){
    try{
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            var userProductObj = {};
            userProductObj['shopstore_value'] = '';
            userProductObj['all_shopstorevalue'] = '';
            userProductObj['shopstore_name'] = '';
            userProductObj['producttype_value'] = '';
            userProductObj['producttype_name'] = '';
            userProductObj['producttype_categoryvalue'] = '';
            userProductObj['producttype_categoryname'] = '';
            userProductObj['producttype_listvalue'] = '';
            userProductObj['producttype_listname'] = '';
            userProductObj['producttype_featurevalue'] = '';
            userProductObj['productviewed_bystatus'] = 'productwise';
            dkParamObj['userProduct'] = userProductObj;
            sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(dkParamObj));
        }
    }catch(ex){
        console.log("Problem in resetUserproductSessionData=>"+ex);
    }
}

// CJ defined this function 2016-09-03
function getParamObjForProductTypeAllProductCategoryList(){
    try{
        var paramObj = {};
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(dkParamObj.hasOwnProperty('userSelectedDeliveryCityAreaDessertsType')===true){
                // extract user suggested city area session data
                var userSelectedDeliveryCityAreaDessertsTypeObj = dkParamObj['userSelectedDeliveryCityAreaDessertsType'];
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('countryvalue')===true){
                    if(userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue']==='1'){
                        paramObj['country_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('cityvalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'])>0
                        && userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue']!==''){
                        paramObj['city_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('areavalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'])>0
                        && userSelectedDeliveryCityAreaDessertsTypeObj['areavalue']!==''){
                        paramObj['area_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('ccaId')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'])>0
                        && userSelectedDeliveryCityAreaDessertsTypeObj['ccaId']!==''){
                        paramObj['ccaId'] = userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'];
                    }
                }
            }
            // extract data from user product
            if(dkParamObj.hasOwnProperty('userProduct')===true){
                // extract user userProduct session data
                var userProductObj = dkParamObj['userProduct'];
                paramObj['shopstoreids'] = '';
                if(userProductObj.hasOwnProperty('shopstore_value')===true){
                    if(parseInt(userProductObj['shopstore_value'])>0 
                        && userProductObj['shopstore_value']!==''){
                        paramObj['shopstoreids'] = userProductObj['shopstore_value'];
                    }
                }
                if(userProductObj.hasOwnProperty('producttype_value')===true){
                    if(parseInt(userProductObj['producttype_value'])>0
                        && userProductObj['producttype_value']!==''){
                        paramObj['product_typesids'] = userProductObj['producttype_value'];
                    }
                }
                if(userProductObj.hasOwnProperty('producttype_categoryvalue')===true){
                    paramObj['product_categoryids'] = userProductObj['producttype_categoryvalue'];
                }
            }
        }
        if(Object.keys(paramObj).length>=5){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}

// CJ defined this function 2016-09-04
function storeProductTypeProductCategoryDataInSession(paramDataObj, isResetAllData){
    try{
        var storeDataStatus = false;
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            var userProductObj = existingDkParamObj['userProduct'];
            userProductObj['shopstore_value'] = paramDataObj['shopStoreIds'];
            userProductObj['all_shopstorevalue'] = paramDataObj['shopStoreIds'];
            userProductObj['shopstore_name'] = '';
            userProductObj['producttype_value'] = paramDataObj['productTypeId'];
            userProductObj['producttype_name'] = paramDataObj['productTypeTitle'];
            userProductObj['producttype_categoryvalue'] = paramDataObj['productTypeProductCategoryId'];
            userProductObj['producttype_categoryname'] = paramDataObj['productTypeProductCategoryTitle'];
            if(isResetAllData==='Y'){
                userProductObj['producttype_listvalue'] = '';
                userProductObj['producttype_listname'] = '';
                userProductObj['producttype_featurevalue'] = '';
            }
            userProductObj['productviewed_bystatus'] = 'productwise';
            existingDkParamObj['userProduct'] = userProductObj;
            sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(existingDkParamObj));
            storeDataStatus = true;
        }
        return storeDataStatus;
    }catch(ex){
        return false;
    }
}


// CJ defined this function 2016-09-03
function getParamObjForProductTypeProductCategoryFilterTypeList(){
    try{
        var paramObj = {};
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(dkParamObj.hasOwnProperty('userProduct')===true){
                // extract user userProduct session data
                var userProductObj = dkParamObj['userProduct'];
                if(userProductObj.hasOwnProperty('producttype_value')===true){
                    if(parseInt(userProductObj['producttype_value'])>0
                        && userProductObj['producttype_value']!==''){
                        paramObj['product_typesids'] = userProductObj['producttype_value'];
                    }
                }
                if(userProductObj.hasOwnProperty('producttype_categoryvalue')===true){
                    if(parseInt(userProductObj['producttype_categoryvalue'])>0
                        && userProductObj['producttype_categoryvalue']!==''){
                        paramObj['product_categoryids'] = userProductObj['producttype_categoryvalue'];
                    }
                }
                if(userProductObj.hasOwnProperty('all_shopstorevalue')===true){
                    if((userProductObj['all_shopstorevalue']).length>0
                        && userProductObj['all_shopstorevalue']!==''){
                        paramObj['allShopstoreids'] = userProductObj['all_shopstorevalue'];
                    }
                }
            }
        }
        if(Object.keys(paramObj).length===3){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}


// CJ defined this function 2016-09-04
function storeProductTypeProductCategoryProductDataInSession(paramDataObj){
    try{
        var storeDataStatus = false;
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            var userProductObj = {};
            userProductObj['shopstore_value'] = paramDataObj['shopStoreId'];
            userProductObj['all_shopstorevalue'] = paramDataObj['shopStoreId'];
            userProductObj['shopstore_name'] = paramDataObj['shopStoreTitle'];
            userProductObj['producttype_value'] = paramDataObj['productTypeId'];
            userProductObj['producttype_name'] = paramDataObj['productTypeTitle'];
            userProductObj['producttype_categoryvalue'] = paramDataObj['productTypeProductCategoryId'];
            userProductObj['producttype_categoryname'] = paramDataObj['productTypeProductCategoryTitle'];
            userProductObj['producttype_listvalue'] = paramDataObj['productListId'];
            userProductObj['producttype_listname'] = paramDataObj['productListTitle'];
            userProductObj['producttype_featurevalue'] = paramDataObj['productFeatureId'];
            userProductObj['productviewed_bystatus'] = 'productwise';
            existingDkParamObj['userProduct'] = userProductObj;
            sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(existingDkParamObj));
            storeDataStatus = true;
        }
        return storeDataStatus;
    }catch(ex){
        return false;
    }
}


// CJ defined this function 2016-06-17
function getParamObjForProductTypeProductCategoryAllProductList(){
    try{
        var paramObj = {};
        paramObj['productlist_ids'] = '';
        paramObj['product_price_filter'] = '';
        paramObj['product_size_filter'] = '';
        paramObj['product_discount_filter'] = '';
        paramObj['product_featureids'] = '';
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(dkParamObj.hasOwnProperty('userSelectedDeliveryCityAreaDessertsType')===true){
                // extract user suggested city area session data
                var userSelectedDeliveryCityAreaDessertsTypeObj = dkParamObj['userSelectedDeliveryCityAreaDessertsType'];
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('countryvalue')===true){
                    paramObj['country_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue'];
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('cityvalue')===true){
                    paramObj['city_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'];
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('areavalue')===true){
                    paramObj['area_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'];
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('ccaId')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'])>0
                        && userSelectedDeliveryCityAreaDessertsTypeObj['ccaId']!==''){
                        paramObj['ccaId'] = userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'];
                    }
                }
            }
            // extract data from user product
            if(dkParamObj.hasOwnProperty('userProduct')===true){
                // extract user userProduct session data
                var userProductObj = dkParamObj['userProduct'];
                if(userProductObj.hasOwnProperty('producttype_value')===true){
                    if(parseInt(userProductObj['producttype_value'])>0
                        && userProductObj['producttype_value']!==''){
                        paramObj['product_typesids'] = userProductObj['producttype_value'];
                    }
                }
                if(userProductObj.hasOwnProperty('producttype_categoryvalue')===true){
                    if(parseInt(userProductObj['producttype_categoryvalue'])>0
                        && userProductObj['producttype_categoryvalue']!==''){
                        paramObj['product_categoryids'] = userProductObj['producttype_categoryvalue'];
                    }
                }
                if(userProductObj.hasOwnProperty('shopstore_value')===true){
                    paramObj['shopstoreids'] = '';
                    if(parseInt(userProductObj['shopstore_value'])>0 
                        && userProductObj['shopstore_value']!==''){
                        paramObj['shopstoreids'] = userProductObj['shopstore_value'];
                    }else if((userProductObj['all_shopstorevalue']).length>0 
                        && userProductObj['all_shopstorevalue']!==''){
                        paramObj['shopstoreids'] = userProductObj['all_shopstorevalue'];
                    }
                }
                if(userProductObj.hasOwnProperty('producttype_listvalue')===true){
                    if(parseInt(userProductObj['producttype_listvalue'])>0 
                        && userProductObj['producttype_listvalue']!==''){
                        paramObj['productlist_ids'] = userProductObj['producttype_listvalue'];
                    }
                }
                if(userProductObj.hasOwnProperty('producttype_featurevalue')===true){
                    if(parseInt(userProductObj['producttype_featurevalue'])>0 
                        && userProductObj['producttype_featurevalue']!==''){
                        paramObj['product_featureids'] = userProductObj['producttype_featurevalue'];
                    }
                }
                if(userProductObj.hasOwnProperty('product_price_filter')===true){
                    paramObj['product_price_filter'] = userProductObj['product_price_filter'];
                }
                if(userProductObj.hasOwnProperty('product_size_filter')===true){
                    paramObj['product_size_filter'] = userProductObj['product_size_filter'];
                }
                if(userProductObj.hasOwnProperty('product_discount_filter')===true){
                    paramObj['product_discount_filter'] = userProductObj['product_discount_filter'];
                }
            }
        }
        if(Object.keys(paramObj).length>=7){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}


// CJ defined this function 2016-06-06
function getParamObjFromSessionForProductTypeProductCategoryProductDetails(){
    try{
        
        var paramObj = {};

        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            
            // extract user suggested city area session data
            if(dkParamObj.hasOwnProperty('userSelectedDeliveryCityAreaDessertsType')===true){
                var userSelectedDeliveryCityAreaDessertsTypeObj = dkParamObj['userSelectedDeliveryCityAreaDessertsType'];
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('countryvalue')===true){
                    if(userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue']==='1'){
                        paramObj['country_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('cityvalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue']!==''){
                        paramObj['city_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('areavalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['areavalue']!==''){
                        paramObj['area_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('ccaId')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['ccaId']!==''){
                        paramObj['ccaId'] = userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'];
                    }
                }
            }
            
            // extract user userProduct session data
            if(dkParamObj.hasOwnProperty('userProduct')===true){
                var userProductObj = dkParamObj['userProduct'];
                if(userProductObj.hasOwnProperty('shopstore_value')===true){
                    if(parseInt(userProductObj['shopstore_value'])>0 
                        && userProductObj['shopstore_value']!==''){
                        paramObj['shopstoreids'] = userProductObj['shopstore_value'];
                    }
                }
                if(userProductObj.hasOwnProperty('producttype_value')===true){
                    if(parseInt(userProductObj['producttype_value'])>0 
                        && userProductObj['producttype_value']!==''){
                        paramObj['product_typesids'] = userProductObj['producttype_value'];
                    }
                }
                if(userProductObj.hasOwnProperty('producttype_categoryvalue')===true){
                    if(parseInt(userProductObj['producttype_categoryvalue'])>0 
                        && userProductObj['producttype_categoryvalue']!==''){
                        paramObj['product_categoryids'] = userProductObj['producttype_categoryvalue'];
                    }
                }
                if(userProductObj.hasOwnProperty('producttype_listvalue')===true){
                    if(parseInt(userProductObj['producttype_listvalue'])>0 
                        && userProductObj['producttype_listvalue']!==''){
                        paramObj['productlist_ids'] = userProductObj['producttype_listvalue'];
                    }
                }
                if(userProductObj.hasOwnProperty('producttype_featurevalue')===true){
                    if(parseInt(userProductObj['producttype_featurevalue'])>0 
                        && userProductObj['producttype_featurevalue']!==''){
                        paramObj['product_featureids'] = userProductObj['producttype_featurevalue'];
                    }
                }
            }
        }
        if(Object.keys(paramObj).length===9){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
    
}


// CJ defined this function 2016-06-06
function getParamObjFromSessionForProductDescriptionDetails(){
    try{
        var paramObj = {};
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(dkParamObj.hasOwnProperty('userProduct')===true){
                // extract user userProduct session data
                var userProductObj = dkParamObj['userProduct'];
                if(userProductObj.hasOwnProperty('producttype_listvalue')===true){
                    if(parseInt(userProductObj['producttype_listvalue'])>0 
                        && userProductObj['producttype_listvalue']!==''){
                        paramObj['productlist_ids'] = userProductObj['producttype_listvalue'];
                    }
                }
            }
        }
        if(Object.keys(paramObj).length===1){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}


/////////////////// store level related code ////////////////////////////////

// CJ defined this function 2016-09-09
function getParamObjDataFromSessionFetchingDeliveryAreaBasedDessertsTypeStoresList(){
    try{
        var paramObj = {};

        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            
            // extract user suggested city area session data
            if(dkParamObj.hasOwnProperty('userSelectedDeliveryCityAreaDessertsType')===true){
                var userSelectedDeliveryCityAreaDessertsTypeObj = dkParamObj['userSelectedDeliveryCityAreaDessertsType'];
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('countryvalue')===true){
                    if(userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue']==='1'){
                        paramObj['country_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('cityvalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue']!==''){
                        paramObj['city_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('areavalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['areavalue']!==''){
                        paramObj['area_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('ccaId')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['ccaId']!==''){
                        paramObj['ccaId'] = userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'];
                    }
                }
            }
            // extract user userProduct session data
            if(dkParamObj.hasOwnProperty('userProduct')===true){
                var userProductObj = dkParamObj['userProduct'];
                if(userProductObj.hasOwnProperty('producttype_value')===true){
                    if(parseInt(userProductObj['producttype_value'])>0 
                        && userProductObj['producttype_value']!==''){
                        paramObj['product_typesids'] = userProductObj['producttype_value'];
                    }
                }
            }
        }
        if(Object.keys(paramObj).length===5){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}


// CJ defined this function 2016-09-04
function getParamObjFromSessionAtDeliveryAreaBasedStoreServeDessertsTypeList(){
    try{
        var paramObj = {};

        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            
            // extract user suggested city area session data
            if(dkParamObj.hasOwnProperty('userSelectedDeliveryCityAreaDessertsType')===true){
                var userSelectedDeliveryCityAreaDessertsTypeObj = dkParamObj['userSelectedDeliveryCityAreaDessertsType'];
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('countryvalue')===true){
                    if(userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue']==='1'){
                        paramObj['country_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('cityvalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue']!==''){
                        paramObj['city_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('areavalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['areavalue']!==''){
                        paramObj['area_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('ccaId')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['ccaId']!==''){
                        paramObj['ccaId'] = userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'];
                    }
                }
            }
            
            // extract user userProduct session data
            if(dkParamObj.hasOwnProperty('userProduct')===true){
                var userProductObj = dkParamObj['userProduct'];
                if(userProductObj.hasOwnProperty('shopstore_value')===true){
                    if(parseInt(userProductObj['shopstore_value'])>0 
                        && userProductObj['shopstore_value']!==''){
                        paramObj['shopstoreids'] = userProductObj['shopstore_value'];
                    }
                }
                if(userProductObj.hasOwnProperty('producttype_value')===true){
                    if(parseInt(userProductObj['producttype_value'])>0 
                        && userProductObj['producttype_value']!==''){
                        paramObj['product_typesids'] = userProductObj['producttype_value'];
                    }
                }
            }
        }
        if(Object.keys(paramObj).length===6){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}

// CJ defined this function 2016-09-04
function storeDessertsTypeDataDetailsInSessionStorageToViewStoreAllProductList(paramObj){
    try{
        var storedDataStatus = false;
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(paramObj!==false && paramObj!=='' && jQuery.isEmptyObject(paramObj)===false){
                if(paramObj.hasOwnProperty('dessertsTypeId')===true && paramObj.hasOwnProperty('dessertsTypeTitle')===true){
                    existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['dessertsproduct'] = paramObj['dessertsTypeId'];
                    existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['dessertsproducttitle'] = paramObj['dessertsTypeTitle'];
                    existingDkParamObj['userProduct'] = {};
                    existingDkParamObj['userProduct']['all_shopstorevalue'] = paramObj['shopStoreId'];
                    existingDkParamObj['userProduct']['shopstore_value'] = paramObj['shopStoreId'];
                    existingDkParamObj['userProduct']['shopstore_name'] = paramObj['shopStoreTitle'];
                    existingDkParamObj['userProduct']['producttype_value'] = paramObj['dessertsTypeId'];
                    existingDkParamObj['userProduct']['producttype_name'] = paramObj['dessertsTypeTitle'];
                    existingDkParamObj['userProduct']['producttype_categoryvalue'] = '';
                    existingDkParamObj['userProduct']['producttype_categoryname'] = '';
                    existingDkParamObj['userProduct']['producttype_listvalue'] = '';
                    existingDkParamObj['userProduct']['producttype_listname'] = '';
                    existingDkParamObj['userProduct']['producttype_featurevalue'] = '';
                    existingDkParamObj['userProduct']['productviewed_bystatus'] = 'productwise';
                }
            } 
            sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(existingDkParamObj));
            storedDataStatus = true;
        }
        return storedDataStatus;
    }catch(ex){
        return false;
    }
}


// CJ defined this function 2016-06-24
function getParamObjForStoreSummaryInfo(){
    try{
        var paramObj = {};
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            // extract data from user product
            if(dkParamObj.hasOwnProperty('userProduct')===true){
                var userProductObj = dkParamObj['userProduct'];
                if(userProductObj.hasOwnProperty('shopstore_value')===true){
                    if(parseInt(userProductObj['shopstore_value'])>0 
                        && userProductObj['shopstore_value']!==''){
                        paramObj['shopstoreids'] = userProductObj['shopstore_value'];
                    }
                }
            }
        }
        if(Object.keys(paramObj).length===1){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}

// CJ defined this function 2016-07-18
function getParamObjForCShopStoreWorkingStyleDetails(){
    try{
        var paramObj = {};
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            // extract data from user product
            if(dkParamObj.hasOwnProperty('userProduct')===true){
                var userProductObj = dkParamObj['userProduct'];
                if(userProductObj.hasOwnProperty('shopstore_value')===true){
                    if(parseInt(userProductObj['shopstore_value'])>0 
                        && userProductObj['shopstore_value']!==''){
                        paramObj['shopstoreids'] = userProductObj['shopstore_value'];
                    }
                }
            }
        }
        if(Object.keys(paramObj).length===1){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}


// CJ defined this function 2016-09-11
function getParamObjStoreDeliveryFeeApplicableMsgOnDeliveryArea(){
    try{
        var paramObj = {};
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            // extract user suggested city area session data
            if(dkParamObj.hasOwnProperty('userSelectedDeliveryCityAreaDessertsType')===true){
                var userSelectedDeliveryCityAreaDessertsTypeObj = dkParamObj['userSelectedDeliveryCityAreaDessertsType'];
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('countryvalue')===true){
                    if(userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue']==='1'){
                        paramObj['country_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['countryvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('cityvalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue']!==''){
                        paramObj['city_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['cityvalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('areavalue')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['areavalue']!==''){
                        paramObj['area_ids'] = userSelectedDeliveryCityAreaDessertsTypeObj['areavalue'];
                    }
                }
                if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('ccaId')===true){
                    if(parseInt(userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'])>0 
                        && userSelectedDeliveryCityAreaDessertsTypeObj['ccaId']!==''){
                        paramObj['ccaId'] = userSelectedDeliveryCityAreaDessertsTypeObj['ccaId'];
                    }
                }
            }
            // extract data from user product
            if(dkParamObj.hasOwnProperty('userProduct')===true){
                var userProductObj = dkParamObj['userProduct'];
                if(userProductObj.hasOwnProperty('shopstore_value')===true){
                    if(parseInt(userProductObj['shopstore_value'])>0 
                        && userProductObj['shopstore_value']!==''){
                        paramObj['store_id'] = userProductObj['shopstore_value'];
                    }
                }
            }
            // get logged user details
            var userLoggedDataObj = getParamDataAuthenticatedUserDetailsFromSession();
            if(userLoggedDataObj!==false && userLoggedDataObj!==undefined){
                paramObj = $.extend(paramObj, userLoggedDataObj);
            }
        }
        if(Object.keys(paramObj).length>=5){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}



// CJ defined this function 2016-07-10
function getInfoUserSelectedDeliveryCityAreaDessertsProductType(){
    try{
        var infoObj = {};
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(existingDkParamObj!==false && existingDkParamObj!=='' && jQuery.isEmptyObject(existingDkParamObj)===false){
                // extract userSelectedDeliveryCityAreaDessertsType param obj
                if(existingDkParamObj.hasOwnProperty('userSelectedDeliveryCityAreaDessertsType')===true){
                    var userSelectedDeliveryCityAreaDessertsTypeObj = existingDkParamObj['userSelectedDeliveryCityAreaDessertsType'];
                    if(userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('cityname')===true 
                        && userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('areaname')===true
                        && userSelectedDeliveryCityAreaDessertsTypeObj.hasOwnProperty('dessertsproducttitle')===true){
                        if(userSelectedDeliveryCityAreaDessertsTypeObj['cityname']!=='' 
                            && userSelectedDeliveryCityAreaDessertsTypeObj['areaname']!=='' 
                            && userSelectedDeliveryCityAreaDessertsTypeObj['areapincode']!==''){
                            infoObj['userSelectedCity'] = removeHtmlStripTagsOfContent(userSelectedDeliveryCityAreaDessertsTypeObj['cityname']);
                            infoObj['userSelectedArea'] = removeHtmlStripTagsOfContent(userSelectedDeliveryCityAreaDessertsTypeObj['areaname']);
                            infoObj['userSelectedAreaPincode'] = removeHtmlStripTagsOfContent(userSelectedDeliveryCityAreaDessertsTypeObj['areapincode']);
                            infoObj['userSelectedDesserts'] = removeHtmlStripTagsOfContent(userSelectedDeliveryCityAreaDessertsTypeObj['dessertsproducttitle']);
                        }
                    }
                }
            }
        }
        return infoObj;
    }catch(ex){
        return false;
    }
}


// CJ defined this function 2016-07-10
function getCustomerBreadcrumb(){
    var customerBreadcrumbObj = {};
    // checking session param
    if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
        && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
        var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
        if(existingDkParamObj!==false && existingDkParamObj!=='' && jQuery.isEmptyObject(existingDkParamObj)===false){
            // extract dk userproduct param obj
            if(existingDkParamObj.hasOwnProperty('userProduct')===true){
                var userProductParamObj = existingDkParamObj['userProduct'];
                if(userProductParamObj!==false && userProductParamObj!==undefined 
                    && jQuery.isEmptyObject(userProductParamObj)===false){
                    customerBreadcrumbObj['homeTitle'] = 'Home';
                    customerBreadcrumbObj['productTypeTitle'] = userProductParamObj['producttype_name'];
                    customerBreadcrumbObj['productCategoryTitle'] = userProductParamObj['producttype_categoryname'];
                    customerBreadcrumbObj['shopStoreTitle'] = userProductParamObj['shopstore_name']+" Store";
                    customerBreadcrumbObj['productListTitle'] = userProductParamObj['producttype_listname'];
                }
            } 
            // extract dk partyOrder param obj
            if(existingDkParamObj.hasOwnProperty('partyOrder')===true){
                var userPartyorderParamObj = existingDkParamObj['partyOrder'];
                if(userPartyorderParamObj!==false && userPartyorderParamObj!==undefined 
                    && jQuery.isEmptyObject(userPartyorderParamObj)===false){
                    customerBreadcrumbObj['partyOrderTitle'] = userPartyorderParamObj['title'];
                }
            } 
            // extract dk customizeOrder param obj
            if(existingDkParamObj.hasOwnProperty('customizeOrder')===true){
                var userCustomizeorderParamObj = existingDkParamObj['customizeOrder'];
                if(userCustomizeorderParamObj!==false && userCustomizeorderParamObj!==undefined 
                    && jQuery.isEmptyObject(userCustomizeorderParamObj)===false){
                    customerBreadcrumbObj['customizeOrderTitle'] = userCustomizeorderParamObj['title'];
                }
            } 
            // extract dk corporateTieup param obj
            if(existingDkParamObj.hasOwnProperty('corporateTieup')===true){
                var userCorporateTieupParamObj = existingDkParamObj['corporateTieup'];
                if(userCorporateTieupParamObj!==false && userCorporateTieupParamObj!==undefined 
                    && jQuery.isEmptyObject(userCorporateTieupParamObj)===false){
                    customerBreadcrumbObj['corporateTieupTitle'] = userCorporateTieupParamObj['title'];
                }
            } 
        }
    }
    return customerBreadcrumbObj;
}


// CJ defined this function 2016-07-16
function checkParamDataToRedirectForRequestPartyOrder(){
    var retStatus = false;
    // checking session param
    if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
        && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
        // extract dk partyOrder param obj
        var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
        if(existingDkParamObj.hasOwnProperty('partyOrder')===true){
            var userPartyorderParamObj = existingDkParamObj['partyOrder'];
            if(userPartyorderParamObj!==false && userPartyorderParamObj!==undefined 
                && jQuery.isEmptyObject(userPartyorderParamObj)===false){
                userPartyorderParamObj['title'] = 'Party Order';
                existingDkParamObj['partyOrder'] = userPartyorderParamObj;
                sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(existingDkParamObj));
            }
        } 
        retStatus = true;
    }
    return retStatus;
}

// CJ defined this function 2016-07-16
function checkParamDataToRedirectForRequestCustomizeOrder(){
    var retStatus = false;
    // checking session param
    if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
        && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
        // extract dk customize order param obj
        var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
        if(existingDkParamObj.hasOwnProperty('customizeOrder')===true){
            var userCustomizeorderParamObj = existingDkParamObj['customizeOrder'];
            if(userCustomizeorderParamObj!==false && userCustomizeorderParamObj!==undefined 
                && jQuery.isEmptyObject(userCustomizeorderParamObj)===false){
                userCustomizeorderParamObj['title'] = 'Customize Order';
                existingDkParamObj['customizeOrder'] = userCustomizeorderParamObj;
                sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(existingDkParamObj));
            }
        } 
        retStatus = true;
    }
    return retStatus;
}

// CJ defined this function 2016-07-16
function checkParamDataToRedirectForRequestCorporateTieup(){
    var retStatus = false;
    // checking session param
    if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
        && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
        // extract dk partyOrder param obj
        var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
        if(existingDkParamObj.hasOwnProperty('corporateTieup')===true){
            var userCorporateTieupParamObj = existingDkParamObj['corporateTieup'];
            if(userCorporateTieupParamObj!==false && userCorporateTieupParamObj!==undefined 
                && jQuery.isEmptyObject(userCorporateTieupParamObj)===false){
                userCorporateTieupParamObj['title'] = 'Corporate Tie-up';
                existingDkParamObj['corporateTieup'] = userCorporateTieupParamObj;
                sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(existingDkParamObj));
            }
        } 
        retStatus = true;
    }
    return retStatus;
}



//////////////////////// party order related code ////////////////////////////

// CJ defined this function 2016-07-20
function getParamDataObjForPartyOrderRequest(){
    try{
        var retParamDataObj = {};
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(dkParamObj.hasOwnProperty('partyOrder')===true){
                // extract party order param obj
                var partyOrderParamObj = dkParamObj['partyOrder'];
                if(partyOrderParamObj.hasOwnProperty('title')!==''){
                    retParamDataObj['user_sessionid'] = dkParamObj['userSession']['user_sessionid'];
                    retParamDataObj['udblogId'] = dkParamObj['userSession']['udblogId'];
                    retParamDataObj['name'] = removeHtmlStripTagsOfContent($('#po_contactPersonNameInputId').val());
                    retParamDataObj['mobile'] = removeHtmlStripTagsOfContent($('#po_contactMobileInputId').val());
                    retParamDataObj['email'] = removeHtmlStripTagsOfContent($('#po_contactEmailInputId').val());
                    retParamDataObj['occassion_title'] = removeHtmlStripTagsOfContent($('#po_occasionTitleInputId').val());
                    retParamDataObj['nos_person'] = removeHtmlStripTagsOfContent($('#po_nosPeopleInputId').val());
                    retParamDataObj['party_date'] = removeHtmlStripTagsOfContent($('#po_dateInputId').val());
                    retParamDataObj['party_venue'] = removeHtmlStripTagsOfContent($('#po_venueInputId').val());
                    retParamDataObj['party_requirements'] = removeHtmlStripTagsOfContent($('#po_messageInputId').val());
                    retParamDataObj['file'] = '';
                }
            }
        }
        if(Object.keys(retParamDataObj).length===11){
            return retParamDataObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}

// CJ defined this function 2016-07-24
function getParamDataObjForCustomizeOrderRequest(){
    try{
        var retParamDataObj = {};
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(dkParamObj.hasOwnProperty('customizeOrder')===true){
                // extract customize order param obj
                var partyOrderParamObj = dkParamObj['customizeOrder'];
                if(partyOrderParamObj.hasOwnProperty('title')!==''){
                    retParamDataObj['user_sessionid'] = dkParamObj['userSession']['user_sessionid'];
                    retParamDataObj['udblogId'] = dkParamObj['userSession']['udblogId'];
                    retParamDataObj['name'] = removeHtmlStripTagsOfContent($('#co_contactPersonNameInputId').val());
                    retParamDataObj['mobile'] = removeHtmlStripTagsOfContent($('#co_contactMobileInputId').val());
                    retParamDataObj['email'] = removeHtmlStripTagsOfContent($('#co_contactEmailInputId').val());
                    retParamDataObj['event_title'] = removeHtmlStripTagsOfContent($('#co_occasionTitleInputId').val());
                    retParamDataObj['nos_person'] = removeHtmlStripTagsOfContent($('#co_nosPeopleInputId').val());
                    retParamDataObj['event_date'] = removeHtmlStripTagsOfContent($('#co_dateInputId').val());
                    retParamDataObj['event_venue'] = removeHtmlStripTagsOfContent($('#co_venueInputId').val());
                    retParamDataObj['event_requirements'] = removeHtmlStripTagsOfContent($('#co_messageInputId').val());
                    retParamDataObj['file'] = '';
                }
            }
        }
        if(Object.keys(retParamDataObj).length===11){
            return retParamDataObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}

// CJ defined this function 2016-07-24
function getParamDataObjForCorporateTieupRequest(){
    var paramObj = {};
    // checking session param
    if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
        && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
        // extract dk param session data
        var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
        if(dkParamObj.hasOwnProperty('corporateTieup')===true){
            // extract corporateTieup param obj
            var partyOrderParamObj = dkParamObj['corporateTieup'];
            if(partyOrderParamObj.hasOwnProperty('corporateTieupTitle')!==''){
                paramObj['is_LoggedInUser'] = 'N';
                paramObj['profile_id'] = '2';
            }
        }
    }
    return paramObj;
}


/////////////////////////  user related param ////////////////////////////////////////

// CJ defined this function 2016-08-01
function checkUserLoggedInSession(){
    var retUserLoggedInStatus = false;
    try{
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            // check userSession key present or not 
            if(dkParamObj.hasOwnProperty('userSession')===true){
                // extract userSession param obj
                var userSessionParamObj = dkParamObj['userSession'];
                if(userSessionParamObj.hasOwnProperty('udblogId')===true
                    && userSessionParamObj.hasOwnProperty('user_sessionid')===true){
                    if((userSessionParamObj['user_sessionid']).length>=20 
                        && (userSessionParamObj['udblogId']).length>=20){
                        retUserLoggedInStatus = true;
                    }
                }
            }
        }
    }catch(ex){
        retUserLoggedInStatus = false;
        console.log("problem in checkUserLoggedInSession=>"+ex);
    }
    return retUserLoggedInStatus;
}

// CJ defined this function 2016-08-01(Very Imp)
function storeAuthenticatedUserDetailsInSession(paramObj){
    try{
        if(paramObj!==false && paramObj!=='' && jQuery.isEmptyObject(paramObj)===false){
            // checking session param
            if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
                && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
                // extract dk param session data
                var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
                // check userSession key present or not 
                if(dkParamObj.hasOwnProperty('userSession')===true){
                    // extract userSession param obj
                    var userSessionParamObj = dkParamObj['userSession'];
                    if(userSessionParamObj.hasOwnProperty('user_sessionid')===true
                        && userSessionParamObj.hasOwnProperty('udblogId')===true){
                        userSessionParamObj['user_sessionid'] = paramObj['user_sessionid'];
                        userSessionParamObj['usersession_starttimestamp'] = paramObj['usersession_starttimestamp'];
                        userSessionParamObj['udblogId'] = paramObj['udblogId'];
                        userSessionParamObj['userProfileTypeId'] = paramObj['userProfileTypeId'];
                        dkParamObj['userSession'] = userSessionParamObj;
                        sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(dkParamObj));
                    }
                }
            }
        }
    }catch(ex){
        console.log("problem in storeAuthenticatedUserDetailsInSession=>"+ex);
    }    
}

// CJ defined this function 2016-08-06
function storeUserSessionIdInSession(user_sessionid){
    try{
        if(user_sessionid!==false && user_sessionid!=='' 
            && user_sessionid!==undefined && (user_sessionid).length>7){
            // checking session param
            if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
                && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
                // extract dk param session data
                var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
                // check userSession key present or not 
                if(dkParamObj.hasOwnProperty('userSession')===true){
                    // extract userSession param obj
                    var userSessionParamObj = dkParamObj['userSession'];
                    if(userSessionParamObj.hasOwnProperty('user_sessionid')===true){
                        userSessionParamObj['user_sessionid'] = user_sessionid;
                        dkParamObj['userSession'] = userSessionParamObj;
                        sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(dkParamObj));
                    }
                }
            }
        }else{
            window.location.href = globalBaseSitePath;
        }
    }catch(ex){
        console.log("problem in storeUserSessionIdInSession=>"+ex);
    }    
}

// CJ defined this function 2016-08-01
function getParamDataAuthenticatedUserDetailsFromSession(){
    var paramObj = {};
    try{
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            // check userSession key present or not 
            if(dkParamObj.hasOwnProperty('userSession')===true){
                // extract userSession param obj
                var userSessionParamObj = dkParamObj['userSession'];
                if(userSessionParamObj.hasOwnProperty('user_sessionid')===true
                    && userSessionParamObj.hasOwnProperty('udblogId')===true){
                    if((userSessionParamObj['user_sessionid']).length>=20
                        && (userSessionParamObj['udblogId']).length>=20){
                        paramObj['udblogId'] = userSessionParamObj['udblogId'];
                        paramObj['user_sessionid'] = userSessionParamObj['user_sessionid'];
                        paramObj['userProfileTypeId'] = userSessionParamObj['userProfileTypeId'];
                    }
                }
            }
        }
        if(Object.keys(paramObj).length===3){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        console.log("problem in getParamDataAuthenticatedUserDetailsFromSession=>"+ex);
        return false;
    }
}

// CJ defined this function 2016-08-06
function getUserSessionIdFromUserSession(){
    var userSessionId = false;
    try{
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            // check userSession key present or not 
            if(dkParamObj.hasOwnProperty('userSession')===true){
                // extract userSession param obj
                var userSessionParamObj = dkParamObj['userSession'];
                if(userSessionParamObj.hasOwnProperty('user_sessionid')===true){
                    if(userSessionParamObj['user_sessionid']!=='' 
                        && userSessionParamObj['user_sessionid']!==false
                        && (userSessionParamObj['user_sessionid']).length>=20
                        && userSessionParamObj['user_sessionid']!==undefined){
                        userSessionId = userSessionParamObj['user_sessionid'];
                    }
                }
            }
        }
    }catch(ex){
        console.log("problem in getUserSessionIdFromUserSession=>"+ex);
        userSessionId = false;
    }
    return userSessionId;
}

// CJ defined this function 2016-08-06
function storePageDetailsUserAccessedFrom(fromPageLoad){
    try{
        if(fromPageLoad!==false && fromPageLoad!=='' && fromPageLoad!==undefined){
            // checking session param
            if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
                && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
                // extract dk param session data
                var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
                // check userAccessLastPageFromObj key present or not 
                if(dkParamObj.hasOwnProperty('userAccessLastPageFromObj')===true){
                    // extract userAccessLastPageFromObj param obj
                    var userAccessPageDataObj = dkParamObj['userAccessLastPageFromObj'];
                    if(userAccessPageDataObj.hasOwnProperty('page')===true){
                        userAccessPageDataObj['page'] = fromPageLoad;
                        dkParamObj['userAccessLastPageFromObj'] = userAccessPageDataObj;
                        sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(dkParamObj));
                    }
                }
            }
        }
    }catch(ex){
        console.log("problem in storePageDetailsUserAccessedFrom=>"+ex);
    }    
}

// CJ defined this function 2016-08-06
function getPageDetailsUserAccessedFrom(){
    var fromPageLoad = false;
    try{
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            // check userAccessLastPageFromObj key present or not 
            if(dkParamObj.hasOwnProperty('userAccessLastPageFromObj')===true){
                // extract userAccessLastPageFromObj param obj
                var userAccessPageDataObj = dkParamObj['userAccessLastPageFromObj'];
                if(userAccessPageDataObj.hasOwnProperty('page')===true){
                    if(userAccessPageDataObj['page']!=='' && userAccessPageDataObj['page']!==false
                        && userAccessPageDataObj['page']!==undefined){
                        fromPageLoad = userAccessPageDataObj['page'];
                    }
                }
            }
        }
    }catch(ex){
        console.log("problem in getPageDetailsUserAccessedFrom=>"+ex);
        fromPageLoad = false;
    }  
    return fromPageLoad;
}


// CJ defined this function 2016-08-01
function getParamDataForUserSignInAuthentication(){
    var paramObj = {};
    try{
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            // check userSession key present or not 
            if(dkParamObj.hasOwnProperty('userSession')===true){
                // extract userSession param obj
                var userSessionParamObj = dkParamObj['userSession'];
                if(userSessionParamObj.hasOwnProperty('user_sessionid')===true
                    && userSessionParamObj.hasOwnProperty('udblogId')===true){
                    if((userSessionParamObj['user_sessionid']).length>=20 
                        && (userSessionParamObj['udblogId']).length===0){
                        paramObj['user_sessionid'] = removeHtmlStripTagsOfContent(userSessionParamObj['user_sessionid']);
                        paramObj['usersession_starttimestamp'] = removeHtmlStripTagsOfContent(userSessionParamObj['usersession_starttimestamp']);
                        paramObj['encoded_mobile'] = removeHtmlStripTagsOfContent($('#ma_userSignInMobileInputId').val());
                        paramObj['encoded_password'] = removeHtmlStripTagsOfContent($('#ma_userSignInPasswordInputId').val());
                    }
                }
            }
        }
    }catch(ex){
        console.log("problem in getParamDataForUserSignInAuthentication=>"+ex);
        paramObj = {};
    }
    if(Object.keys(paramObj).length===4){
        return paramObj;
    }else{
        return false;
    }
}


// CJ defined this function 2016-08-15
function storeRequestedSectionNameToAccessInUserAccount(requestedSectionNameAccessInUserAccount){
    try{
        if(requestedSectionNameAccessInUserAccount!==false && requestedSectionNameAccessInUserAccount!=='' 
            && requestedSectionNameAccessInUserAccount!==undefined){
            // checking session param
            if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
                && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
                // extract dk param session data
                var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
                if(dkParamObj.hasOwnProperty('requestedSectionUserAccountObj')===true){
                    var sectionName = requestedSectionNameAccessInUserAccount;
                    var displaySectionName = requestedSectionNameAccessInUserAccount;
                    if(sectionName==='personalinfo'){
                        displaySectionName = 'Personal Info';
                    }
                    if(sectionName==='changepassword'){
                        displaySectionName = 'Change Password';
                    }
                    if(sectionName==='ordercart'){
                        displaySectionName = 'Order cart';
                    }
                    if(sectionName==='shareoffers'){
                        displaySectionName = 'Share offers';
                    }
                    if(sectionName==='partyorder'){
                        displaySectionName = 'Party Order';
                    }
                    if(sectionName==='customizeorder'){
                        displaySectionName = 'Customize Order';
                    }
                    dkParamObj['requestedSectionUserAccountObj'] = {
                        "requestedSectionName":sectionName,
                        "displaySectionName":displaySectionName
                    };
                    sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(dkParamObj));
                }
            }
        }
    }catch(ex){
        console.log("problem in storeRequestedSectionNameToAccessInUserAccount=>"+ex);
    }    
}


// CJ defined this function 2016-08-15
function getStoredRequestedSectionNameToAccessInUserAccount(){
    var paramObj = {};
    try{
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(dkParamObj.hasOwnProperty('requestedSectionUserAccountObj')===true){
                if(jQuery.isEmptyObject(dkParamObj['requestedSectionUserAccountObj'])===false){
                    paramObj = dkParamObj['requestedSectionUserAccountObj'];
                }
            }
        }
    }catch(ex){
        console.log("problem in getStoredRequestedSectionNameToAccessInUserAccount=>"+ex);
        paramObj = {};
    } 
    if(Object.keys(paramObj).length===2){
        return paramObj;
    }else{
        return false;
    }
}


// CJ defined this function 2016-08-21
function getParamDataToUpdateUserpersonalInfo(){
    var paramObj = {};
    try{
        if($('.editUsernameInputClass').length===1){
            paramObj['name'] = removeHtmlStripTagsOfContent($('.editUsernameInputClass').val());
        }
        if($('.editUseremailInputClass').length===1){
            paramObj['email'] = removeHtmlStripTagsOfContent($('.editUseremailInputClass').val());
        }
        if($('.editUsermobileInputClass').length===1){
            paramObj['mobile'] = removeHtmlStripTagsOfContent($('.editUsermobileInputClass').val());
        }
        if($('.editUserbirthdateInputClass').length===1){
            paramObj['birthdate'] = removeHtmlStripTagsOfContent($('.editUserbirthdateInputClass').val());
        }
        if($('.editUserGenderSelectClass').length===1){
            paramObj['gender'] = removeHtmlStripTagsOfContent($('.editUserGenderSelectClass').find('option:selected').val());
        }
        // fetch user session data
        var userSessionDataObj = getParamDataAuthenticatedUserDetailsFromSession();
        if(userSessionDataObj!==false && userSessionDataObj!==undefined 
            && jQuery.isEmptyObject(userSessionDataObj)===false){
            paramObj = $.extend(paramObj, userSessionDataObj);
        }
        if(Object.keys(paramObj).length===8){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        console.log("problem in getParamDataToUpdateUserpersonalInfo=>"+ex);
        return false;
    } 
}

// CJ defined this function 2016-08-21
function getParamDataToUpdateUserpasswordInfo(){
    var paramObj = {};
    try{
        if($('.editOldPasswordInputClass').length===1){
            paramObj['old_password'] = removeHtmlStripTagsOfContent($('.editOldPasswordInputClass').val());
        }
        if($('.editNewPasswordInputClass').length===1){
            paramObj['new_password'] = removeHtmlStripTagsOfContent($('.editNewPasswordInputClass').val());
        }
        if($('.editNewConfirmPasswordInputClass').length===1){
            paramObj['newc_password'] = removeHtmlStripTagsOfContent($('.editNewConfirmPasswordInputClass').val());
        }
        // fetch user session data
        var userSessionDataObj = getParamDataAuthenticatedUserDetailsFromSession();
        if(userSessionDataObj!==false && userSessionDataObj!==undefined 
            && jQuery.isEmptyObject(userSessionDataObj)===false){
            paramObj = $.extend(paramObj, userSessionDataObj);
        }
        if(Object.keys(paramObj).length===6){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        console.log("problem in getParamDataToUpdateUserpasswordInfo=>"+ex);
        return false;
    } 
}


///////////////// order cart related code here ///////////////////////////


// CJ defined this function 2016-09-05
function resetOrdercartSummaryDataObjInSession(){
    try{
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            var userOrdercartSummaryObj = {"totalItems":0};
            dkParamObj['userOrdercartSummaryObj'] = userOrdercartSummaryObj;
            sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(dkParamObj));
        }
    }catch(ex){
        console.log("Problem in resetOrdercartSummaryDataObjInSession=>"+ex);
    }
}

// CJ defined this function 2016-08-13
function storeUserOrderItemInSession(fcontentClass){
    var userOrderItemObj = {};
    try{
        
        // through view cakes/chocolates etc product page
        if(fcontentClass!==undefined && fcontentClass!=='' && fcontentClass!==false){
            if($('.'+fcontentClass).length===1){
                var productPrice = 0;
                userOrderItemObj['description'] = '';
                if($('.'+fcontentClass).find('textarea').length===1){
                    userOrderItemObj['description'] = removeHtmlStripTagsOfContent($('.'+fcontentClass).find('textarea').val());
                }
                if($('.'+fcontentClass).find('select').length===1){
                    var productMeasurementSelectInputObj = $('.'+fcontentClass).find('option:selected');
                    if(productMeasurementSelectInputObj!==undefined && productMeasurementSelectInputObj!=='' && productMeasurementSelectInputObj!==false){
                        productPrice = parseFloat($(productMeasurementSelectInputObj).attr("data-productprice"));
                        userOrderItemObj['store_id'] = $(productMeasurementSelectInputObj).attr("data-shopstore_id");
                        userOrderItemObj['ccaId'] = $(productMeasurementSelectInputObj).attr("data-ccaid");
                        userOrderItemObj['deliveryfee'] = $(productMeasurementSelectInputObj).attr("data-deliveryfee");
                        userOrderItemObj['minorderamt'] = $(productMeasurementSelectInputObj).attr("data-minorderamt");
                        userOrderItemObj['featureid'] = $(productMeasurementSelectInputObj).attr("data-productfeatureid");
                        userOrderItemObj['size'] = $(productMeasurementSelectInputObj).val();
                    }
                }
                if($('.'+fcontentClass).find("input[type='text']").length===1 && productPrice>0){
                    var userProductQty = parseInt(removeHtmlStripTagsOfContent($('.'+fcontentClass).find("input[type='text']").val()));
                    var productTotalAmt = (userProductQty * productPrice);
                    userOrderItemObj['qty'] = userProductQty;
                    userOrderItemObj['price'] = productPrice;
                    userOrderItemObj['totalamount'] = productTotalAmt;
                }
                var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
                if(existingDkParamObj!==false && existingDkParamObj!==undefined){
                    userOrderItemObj['areaname'] = existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['areaname'];
                }
            }
        }
    }catch(ex){
        // console.log("problem in storeUserOrderItemInSession ex=>"+ex);
        userOrderItemObj = {};
    }
    if(Object.keys(userOrderItemObj).length===11){
        var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
        existingDkParamObj['userOrderItemObj'] = userOrderItemObj;
        sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(existingDkParamObj));
    }
}

// CJ defined this function 2016-08-06
function getParamDataToAddProductInOrdercart(fcontentClass, fromSession){
    try{
        var paramObj = {};
        var userLoggedDataObj = getParamDataAuthenticatedUserDetailsFromSession();
        if(userLoggedDataObj!==false && userLoggedDataObj!==undefined 
            && jQuery.isEmptyObject(userLoggedDataObj)===false){
            paramObj = $.extend(paramObj, userLoggedDataObj);
            
            // through view product page
            if(fcontentClass!==undefined && fcontentClass!=='' && fcontentClass!==false){
                if($('.'+fcontentClass).length===1){
                    var productPrice = 0;
                    paramObj['description'] = '';
                    if($('.'+fcontentClass).find('textarea').length===1){
                        paramObj['description'] = removeHtmlStripTagsOfContent($('.'+fcontentClass).find('textarea').val());
                    }
                    if($('.'+fcontentClass).find('select').length===1){
                        var productMeasurementSelectInputObj = $('.'+fcontentClass).find('option:selected');
                        if(productMeasurementSelectInputObj!==undefined && productMeasurementSelectInputObj!=='' && productMeasurementSelectInputObj!==false){
                            productPrice = parseFloat($(productMeasurementSelectInputObj).attr("data-productprice"));
                            paramObj['store_id'] = $(productMeasurementSelectInputObj).attr("data-shopstore_id");
                            paramObj['ccaId'] = $(productMeasurementSelectInputObj).attr("data-ccaid");
                            paramObj['deliveryfee'] = $(productMeasurementSelectInputObj).attr("data-deliveryfee");
                            paramObj['minorderamt'] = $(productMeasurementSelectInputObj).attr("data-minorderamt");
                            paramObj['featureid'] = $(productMeasurementSelectInputObj).attr("data-productfeatureid");
                            paramObj['size'] = $(productMeasurementSelectInputObj).val();
                        }
                    }
                    if($('.'+fcontentClass).find("input[type='text']").length===1 && productPrice>0){
                        var userProductQty = parseInt(removeHtmlStripTagsOfContent($('.'+fcontentClass).find("input[type='text']").val()));
                        var productTotalAmt = (userProductQty * productPrice);
                        paramObj['qty'] = userProductQty;
                        paramObj['price'] = productPrice;
                        paramObj['totalamount'] = productTotalAmt;
                    }
                    var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
                    if(existingDkParamObj!==false && existingDkParamObj!==undefined){
                        paramObj['areaname'] = existingDkParamObj['userSelectedDeliveryCityAreaDessertsType']['areaname'];
                    }
                }
            }
            
            // through dk session 
            if(fromSession==='session'){
                var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
                if(existingDkParamObj.hasOwnProperty('userOrderItemObj')===true){
                    var userOrderItemObj = existingDkParamObj['userOrderItemObj'];
                    paramObj = $.extend(paramObj, userOrderItemObj);
                }
            }
        }
        if(Object.keys(paramObj).length===14){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        // console.log("problem in getParamDataToAddProductInOrdercart ex=>"+ex);
        return false;
    }
}


// CJ defined this function 2016-08-26
function getParamDataToUpdateItemInOrdercart(productDetailsObj, fcontentClass){
    try{
        var paramObj = {};
        var userLoggedDataObj = getParamDataAuthenticatedUserDetailsFromSession();
        if(userLoggedDataObj!==false && userLoggedDataObj!==undefined 
            && jQuery.isEmptyObject(userLoggedDataObj)===false
            && productDetailsObj!==false && productDetailsObj!==undefined 
            && jQuery.isEmptyObject(productDetailsObj)===false){
            paramObj = $.extend(paramObj, userLoggedDataObj);
            if($('.'+fcontentClass).find("input[type='text']").length===1){
                var userProductQty = parseInt(removeHtmlStripTagsOfContent($('.'+fcontentClass).find("input[type='text']").val()));
                var productPrice = removeHtmlStripTagsOfContent(productDetailsObj['price']);
                if(parseInt(userProductQty)>0 && userProductQty!=='' 
                    && parseFloat(productPrice)>0 && productPrice!==''){
                    var productTotalAmt = removeHtmlStripTagsOfContent((userProductQty * productPrice));
                    paramObj['ordercartId'] = productDetailsObj['ordercartId'];
                    paramObj['ordercartStoreId'] = productDetailsObj['ordercartStoreId'];
                    paramObj['store_id'] = productDetailsObj['store_id'];
                    paramObj['ccaId'] = productDetailsObj['ccaId'];
                    paramObj['minorderamt'] = productDetailsObj['minorderamt'];
                    paramObj['deliveryfee'] = productDetailsObj['deliveryfee'];
                    paramObj['orderStoreItemId'] = productDetailsObj['orderStoreItemId'];
                    paramObj['qty'] = userProductQty;
                    paramObj['totalamount'] = productTotalAmt;
                }
            }
        }
        if(Object.keys(paramObj).length===12){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        // console.log("problem in getParamDataToUpdateItemInOrdercart ex=>"+ex);
        return false;
    }
}


// CJ defined this function 2016-08-26
function getParamDataToRemoveItemFromOrdercart(productDetailsObj){
    try{
        var paramObj = {};
        var userLoggedDataObj = getParamDataAuthenticatedUserDetailsFromSession();
        if(userLoggedDataObj!==false && userLoggedDataObj!==undefined 
            && jQuery.isEmptyObject(userLoggedDataObj)===false
            && productDetailsObj!==false && productDetailsObj!==undefined 
            && jQuery.isEmptyObject(productDetailsObj)===false){
            paramObj = $.extend(paramObj, userLoggedDataObj);
            paramObj['ordercartId'] = productDetailsObj['ordercartId'];
            paramObj['ordercartStoreId'] = productDetailsObj['ordercartStoreId'];
            paramObj['store_id'] = productDetailsObj['store_id'];
            paramObj['ccaId'] = productDetailsObj['ccaId'];
            paramObj['minorderamt'] = productDetailsObj['minorderamt'];
            paramObj['deliveryfee'] = productDetailsObj['deliveryfee'];
            paramObj['orderStoreItemId'] = productDetailsObj['orderStoreItemId'];
            paramObj['status'] = 'ZC';
            paramObj['reason'] = 'Removed/Deleted by customer';
        }
        if(Object.keys(paramObj).length===12){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        // console.log("problem in getParamDataToRemoveItemFromOrdercart ex=>"+ex);
        return false;
    }
}


///////////////////////// Rating/Review related code ///////////////////


// CJ defined this function 2016-06-06
function getParamObjFromSessionForRatingReviewDetails(){
    try{
        var paramObj = {};

        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            
            // extract user userProduct session data
            if(dkParamObj.hasOwnProperty('userProduct')===true){
                var userProductObj = dkParamObj['userProduct'];
                if(userProductObj.hasOwnProperty('shopstore_value')===true){
                    if(parseInt(userProductObj['shopstore_value'])>0 
                        && userProductObj['shopstore_value']!==''){
                        paramObj['shopstoreids'] = userProductObj['shopstore_value'];
                    }
                }
                if(userProductObj.hasOwnProperty('producttype_listvalue')===true){
                    if(parseInt(userProductObj['producttype_listvalue'])>0 
                        && userProductObj['producttype_listvalue']!==''){
                        paramObj['productlist_ids'] = userProductObj['producttype_listvalue'];
                    }
                }
            }
        }
        if(Object.keys(paramObj).length===2){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }    
}


// CJ defined this function 2016-06-26
function getParamObjFromSessionForStoreAllUserRatingReviewedDetails(){
    try{
        var paramObj = {};
        // checking session param
        if((sessionStorage.getItem('DKPARAMOBJ')!==null && sessionStorage.getItem('DKPARAMOBJ')!==undefined 
            && sessionStorage.getItem('DKPARAMOBJ')!=='' && sessionStorage.getItem('DKPARAMOBJ')!==false)){
            // extract dk param session data
            var dkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
            if(dkParamObj.hasOwnProperty('userProduct')===true){
                // extract user userProduct session data
                var userProductObj = dkParamObj['userProduct'];
                if(userProductObj.hasOwnProperty('shopstore_value')===true){
                    if(parseInt(userProductObj['shopstore_value'])>0 
                        && userProductObj['shopstore_value']!==''){
                        paramObj['shopstoreids'] = userProductObj['shopstore_value'];
                    }
                }
            }
        }
        if(Object.keys(paramObj).length===1){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        
    }   
}


// CJ defined this function 2016-08-06
function getParamDataForAddingUserRatingReviewProduct(fcClass){
    var paramDataObj = {};
    try{
        var userSessionDataObj = getParamDataAuthenticatedUserDetailsFromSession();
        if(userSessionDataObj!==false && userSessionDataObj!==undefined 
            && jQuery.isEmptyObject(userSessionDataObj)===false){
            if($('.'+fcClass).length===1){
                var userAllQuesAnswerRatingReviewAbtProductArr = new Array();
                paramDataObj['user_sessionid'] = userSessionDataObj['user_sessionid'];
                paramDataObj['udblogId'] = userSessionDataObj['udblogId'];
                if($('.'+fcClass).find('textarea').length===1){
                    var userEachQuesAnswerRatingReviewAbtProductObj = {};
                    var commentInputObj = $('.'+fcClass).find('textarea');
                    userEachQuesAnswerRatingReviewAbtProductObj['shopstore_id'] = $(commentInputObj).attr('data-shopstoreid');
                    userEachQuesAnswerRatingReviewAbtProductObj['product_listid'] = $(commentInputObj).attr('data-productlistid');
                    userEachQuesAnswerRatingReviewAbtProductObj['question_id'] = $(commentInputObj).attr('data-questionid');
                    userEachQuesAnswerRatingReviewAbtProductObj['given_answertext'] = removeHtmlStripTagsOfContent($(commentInputObj).val());
                    userEachQuesAnswerRatingReviewAbtProductObj['answer_pattern'] = $(commentInputObj).attr('data-questionpattern');
                    var shopstore_id = $(commentInputObj).attr('data-shopstoreid');
                    var product_listid = $(commentInputObj).attr('data-productlistid');
                    var question_id = $(commentInputObj).attr('data-questionid');
                    var given_answerpoints = removeHtmlStripTagsOfContent($(commentInputObj).val());
                    var answer_pattern = $(commentInputObj).attr('data-questionpattern');
                    if(parseInt(shopstore_id)>0 && parseInt(product_listid)>0 
                        && parseInt(question_id)>0 && given_answerpoints!=='' && answer_pattern!==''){
                        userEachQuesAnswerRatingReviewAbtProductObj['shopstore_id'] = shopstore_id;
                        userEachQuesAnswerRatingReviewAbtProductObj['product_listid'] = product_listid;
                        userEachQuesAnswerRatingReviewAbtProductObj['question_id'] = question_id;
                        userEachQuesAnswerRatingReviewAbtProductObj['given_answerpoints'] = given_answerpoints;
                        userEachQuesAnswerRatingReviewAbtProductObj['answer_pattern'] = answer_pattern;
                        userAllQuesAnswerRatingReviewAbtProductArr.push(userEachQuesAnswerRatingReviewAbtProductObj);
                    }
                }
                if($('.'+fcClass).find('select').length===3){
                    // iterate each 
                    $('.'+fcClass).find('select').each(function(eachIndex){
                        var selectInputObj = $(this);
                        var points = $(this).find('option:selected').val();
                        var userEachQuesAnswerRatingReviewAbtProductObj = {};
                        var shopstore_id = $(selectInputObj).find('option:selected').attr('data-shopstoreid');
                        var product_listid = $(selectInputObj).find('option:selected').attr('data-productlistid');
                        var question_id = $(selectInputObj).find('option:selected').attr('data-questionid');
                        var given_answerpoints = points;
                        var answer_pattern = $(selectInputObj).find('option:selected').attr('data-questionpattern');
                        if(parseInt(shopstore_id)>0 && parseInt(product_listid)>0 
                            && parseInt(question_id)>0 && given_answerpoints!=='' && answer_pattern!==''){
                            userEachQuesAnswerRatingReviewAbtProductObj['shopstore_id'] = shopstore_id;
                            userEachQuesAnswerRatingReviewAbtProductObj['product_listid'] = product_listid;
                            userEachQuesAnswerRatingReviewAbtProductObj['question_id'] = question_id;
                            userEachQuesAnswerRatingReviewAbtProductObj['given_answerpoints'] = given_answerpoints;
                            userEachQuesAnswerRatingReviewAbtProductObj['answer_pattern'] = answer_pattern;
                            userAllQuesAnswerRatingReviewAbtProductArr.push(userEachQuesAnswerRatingReviewAbtProductObj);
                        }
                    });
                }
                if(userAllQuesAnswerRatingReviewAbtProductArr.length===4){
                    paramDataObj['userAllQuesAnwerRatingReviewAbtProductArr'] = userAllQuesAnswerRatingReviewAbtProductArr;
                }
            }
        }
    }catch(ex){
        console.log("problem in getParamDataForAddingUserRatingReviewAbtProduct=>"+ex);
        paramDataObj = {};
    }
    if(Object.keys(paramDataObj).length===3){
        return paramDataObj;
    }else{
        return false;
    }
}


/////////////////// sharing offers code ////////////////////////////


// CJ defined this function 2016-08-28
function getParamDataToSharingOffersFromOneUserToOtherUsers(sharingOffersDataObj, fcontentClass){
    try{
        var paramObj = {};
        var userLoggedDataObj = getParamDataAuthenticatedUserDetailsFromSession();
        if(userLoggedDataObj!==false && userLoggedDataObj!==undefined 
            && jQuery.isEmptyObject(userLoggedDataObj)===false){
            paramObj = $.extend(paramObj, userLoggedDataObj);
            if($('.'+fcontentClass).find("input[type='text']").length===1){
                var userMobileVal = removeHtmlStripTagsOfContent($('.'+fcontentClass).find("input[type='text']").val());
                if(userMobileVal!=='' && userMobileVal!==false
                    && sharingOffersDataObj!==false && sharingOffersDataObj!==undefined 
                    && jQuery.isEmptyObject(sharingOffersDataObj)===false){
                    if(sharingOffersDataObj.hasOwnProperty('dcgId')===true){
                        if(parseInt(sharingOffersDataObj['dcgId'])>0){
                            paramObj['discount_couponid'] = sharingOffersDataObj['dcgId'];
                            paramObj['shared_onmobile'] = userMobileVal;
                        }
                    }
                }
            }
        }
        if(Object.keys(paramObj).length===5){
            return paramObj;
        }else{
            return false;
        }
    }catch(ex){
        // console.log("problem in getParamDataToUpdateItemInOrdercart ex=>"+ex);
        return false;
    }
}