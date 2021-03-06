
/////////////////// DK session related code ////////////////////////////////

// CJ define this funcion 2016-08-12
function generateDkUserSessionId(){
    var existingUserSessionId = getUserSessionIdFromUserSession();
    if(existingUserSessionId==='' || existingUserSessionId===false || existingUserSessionId===undefined){
        var jsonParamBlockUIObject = {};
        jsonParamBlockUIObject['css'] = {"padding":10};
        jsonParamBlockUIObject['message'] = "<img src='"+globalBaseSitePath+"images/loading.gif'><br><center>Please wait desserts khazana is loading........</center>";
        showHideLoaderBox('show', jsonParamBlockUIObject);
        var fetchedParamJsonObj = {};
        fetchedParamJsonObj['dkParamDataArr'] = {"dummy":"data"};
        communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/Users/GenerateUserSessionId", 'apiFile', 'POST', '', fetchedParamJsonObj).done(function(retResponseJson){
            showHideLoaderBox('hide');
            if(retResponseJson!==false && retResponseJson!==undefined && retResponseJson!==''){
                var userSessionId = extractDataFromReturnAjaxResponse('POST', 'apiFile', 'userSessionId', retResponseJson);
                if(userSessionId!=='' && userSessionId!==false && userSessionId!==undefined){
                    storeUserSessionIdInSession(userSessionId);
                }
            }
        });
    }
}

// CJ define this funcion 2016-08-12
function addTrackingUserInfoAccessingWebsitesDetails(fromPageLoad){
    // get param obj 
    var preparedParamJsonObj = getParamDataObjForAddingTrackingUserInfoAccessingWebsitesDetails(fromPageLoad);
    // console.log("addTrackingUserInfoAccessingWebsitesDetails preparedParamJsonObj=>"+JSON.stringify(preparedParamJsonObj));
    if(preparedParamJsonObj!==false && jQuery.isEmptyObject(preparedParamJsonObj)===false){
        var jsonParamBlockUIObject = {};
        jsonParamBlockUIObject['css'] = {"padding":10};
        jsonParamBlockUIObject['message'] = "<img src='"+globalBaseSitePath+"images/loading.gif'><br><center>Please wait desserts khazana is loading........</center>";
        showHideLoaderBox('show', jsonParamBlockUIObject);
        var fetchAreaParamJsonObj = {};
        fetchAreaParamJsonObj['dkParamDataArr'] = preparedParamJsonObj;
        communicationWithAjax("dessertskhazana-services/dessertskhazanainnerservices/?r=api/v1/Users/ManageTrackUserAccessingWebsites", 'apiFile', 'POST', '', fetchAreaParamJsonObj).done(function(retResponseJson){
            showHideLoaderBox('hide');
        });
    }
}


////////////// party order related code ///////////

// CJ define this funcion 2016-07-31
function clearPartyOrderRequestFormField(){
    if($('#po_occasionTitleInputId').length===1){
        $('#po_occasionTitleInputId').val('');
    }
    if($('#po_nosPeopleInputId').length===1){
        $('#po_nosPeopleInputId').val('');
    }
    if($('#po_dateInputId').length===1){
        $('#po_dateInputId').val('');
    }
    if($('#po_venueInputId').length===1){
        $('#po_venueInputId').val('');
    }
    if($('#po_messageInputId').length===1){
        $('#po_messageInputId').val('');
    }
}

////////////// customize order related code ///////////

// CJ define this funcion 2016-07-24
function clearCustomizeOrderRequestFormField(){
    if($('#co_occasionTitleInputId').length===1){
        $('#co_occasionTitleInputId').val('');
    }
    if($('#co_nosPeopleInputId').length===1){
        $('#co_nosPeopleInputId').val('');
    }
    if($('#co_dateInputId').length===1){
        $('#co_dateInputId').val('');
    }
    if($('#co_venueInputId').length===1){
        $('#co_venueInputId').val('');
    }
    if($('#co_messageInputId').length===1){
        $('#co_messageInputId').val('');
    }
}


////////////////// rating & review form content /////////////////

// CJ define this funcion 2016-08-06
function clearRatingReviewAbtProductFormContent(fcClass){
    if($('.'+fcClass).length===1){
        if($('.'+fcClass).find('textarea').length===1){
            $('.'+fcClass).find('textarea').val('');
        }
    }
}


////////////////// order cart form content /////////////////

// CJ define this funcion 2016-08-06
function clearProductContentAfterAddedProductInOrdercart(fcClass){
    if($('.'+fcClass).length===1){
        if($('.'+fcClass).find('textarea').length===1){
            $('.'+fcClass).find('textarea').val('');
        }
        if($('.'+fcClass).find("input[type='text']").length===1){
            $('.'+fcClass).find("input[type='text']").val('1');
        }
    }
    var existingDkParamObj = $.parseJSON(sessionStorage.getItem('DKPARAMOBJ'));
    existingDkParamObj['userOrderItemObj'] = {};
    sessionStorage.setItem('DKPARAMOBJ', JSON.stringify(existingDkParamObj));
}


////////////////// user info form content /////////////////


// CJ define this funcion 2016-08-21
function clearUserpasswordFormFieldInfo(){
    if($('.editOldPasswordInputClass').length===1){
        $('.editOldPasswordInputClass').val('');
    }
    if($('.editNewPasswordInputClass').length===1){
        $('.editNewPasswordInputClass').val('');
    }
    if($('.editNewConfirmPasswordInputClass').length===1){
        $('.editNewConfirmPasswordInputClass').val('');
    }
}