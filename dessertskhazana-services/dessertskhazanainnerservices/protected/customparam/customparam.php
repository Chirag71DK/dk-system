<?php

class customparam{
    
    // CJ defined this function 2016-07-20
    public static function checkRequestedParamKeyFromInDtoFile($paramJsonData, $InDtoClassName='DessertsKhazanaInDto'){
        try{
            if(count($paramJsonData)>0 && $paramJsonData!=false){
                $dkInDtoObj = InDtoObjectFactory::create($InDtoClassName, $paramJsonData); 
                if($dkInDtoObj->isRequestParamKeyValid=='false'){
                    return false;
                }else{
                    return $dkInDtoObj;
                }
            }else{
                return false;
            }
        }catch(Exception $ex){
            return false;
        }
    }
    
    // CJ defined this function 2016-07-13
    public static function checkParamDataFetchingDeliveryCityListServingDessertsProductType($paramJsonData){
        $retStatus = 'FALSE';
        try{
            $givenParamDataCorrectCount = 0;
            // check country_ids key present or not
            if(array_key_exists('country_ids', $paramJsonData)){
                if($paramJsonData['country_ids']=='1'){
                    $givenParamDataCorrectCount++;
                }
            }
            // check city_ids key present or not
            if(array_key_exists('city_ids', $paramJsonData)){
                if(($paramJsonData['city_ids'])>0 && $paramJsonData['city_ids']!=''){
                    $givenParamDataCorrectCount++;
                }
            }
            if($givenParamDataCorrectCount>=1){
                $retStatus = 'TRUE';
            }
        }catch(Exception $ex){
            $retStatus = false;
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-07-13
    public static function checkParamDataFetchingDeliveryAreaListServingDessertsProductType($paramJsonData){
        $retStatus = 'FALSE';
        try{
            $givenParamDataCorrectCount = 0;
            // check country_ids key present or not
            if(array_key_exists('country_ids', $paramJsonData)){
                if($paramJsonData['country_ids']=='1'){
                    $givenParamDataCorrectCount++;
                }
            }
            // check city_ids key present or not
            if(array_key_exists('city_ids', $paramJsonData)){
                if(($paramJsonData['city_ids'])>0 && $paramJsonData['city_ids']!=''){
                    $givenParamDataCorrectCount++;
                }
            }
            // check area_ids key present or not
            if(array_key_exists('area_ids', $paramJsonData)){
                if(($paramJsonData['area_ids'])>0 && $paramJsonData['area_ids']!=''){
                    $givenParamDataCorrectCount++;
                }
            }
            if($givenParamDataCorrectCount>=2){
                $retStatus = 'TRUE';
            }
        }catch(Exception $ex){
            $retStatus = 'FALSE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-07-13
    public static function checkParamDataFetchingDessertsProductTypeListServingInCountryCityArea($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check country_ids key present or not
        if(array_key_exists('country_ids', $paramJsonData)){
            if($paramJsonData['country_ids']=='1'){
                $givenParamDataCorrectCount++;
            }
        }
        // check city_ids key present or not
        if(array_key_exists('city_ids', $paramJsonData)){
            if(($paramJsonData['city_ids'])>0 && $paramJsonData['city_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check area_ids key present or not
        if(array_key_exists('area_ids', $paramJsonData)){
            if(($paramJsonData['area_ids'])>0 && $paramJsonData['area_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check producttype_ids key present or not
        if(array_key_exists('producttype_ids', $paramJsonData)){
            if(($paramJsonData['producttype_ids'])>0 && $paramJsonData['producttype_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount>=3){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-07-13
    public static function checkParamDataFetchingDessertsProductTypeCategoryProductListDashboardLevel($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check country_ids 
        if(array_key_exists('country_ids', $paramJsonData)){
            if($paramJsonData['country_ids']=='1'){
                $givenParamDataCorrectCount++;
            }
        }
        // check city_ids key present or not
        if(array_key_exists('city_ids', $paramJsonData)){
            if(($paramJsonData['city_ids'])>0 && $paramJsonData['city_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check area_ids key present or not
        if(array_key_exists('area_ids', $paramJsonData)){
            if(($paramJsonData['area_ids'])>0 && $paramJsonData['area_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check producttype_ids key present or not
        if(array_key_exists('product_typesids', $paramJsonData)){
            if(($paramJsonData['product_typesids'])>0 && $paramJsonData['product_typesids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==4){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-07-13
    public static function checkParamDataFetchingDessertsProductTypeCategoryProductDetails($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check product delivery country
        if(array_key_exists('country_ids', $paramJsonData)){
            if($paramJsonData['country_ids']=='1'){
                $givenParamDataCorrectCount++;
            }
        }
        // check city_ids key present or not
        if(array_key_exists('city_ids', $paramJsonData)){
            if(($paramJsonData['city_ids'])>0 && $paramJsonData['city_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check area_ids key present or not
        if(array_key_exists('area_ids', $paramJsonData)){
            if(($paramJsonData['area_ids'])>0 && $paramJsonData['area_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check shopStore id is blank or not
        if(array_key_exists('store_ids', $paramJsonData)){
            if(($paramJsonData['store_ids'])>0 && $paramJsonData['store_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check product type id is blank or not
        if(array_key_exists('product_typesids', $paramJsonData)){
            if(($paramJsonData['product_typesids'])>0 && $paramJsonData['product_typesids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check product type ka product category id is blank or not
        if(array_key_exists('product_categoryids', $paramJsonData)){
            if(($paramJsonData['product_categoryids'])>0 && $paramJsonData['product_categoryids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check product type ka product category ka product id is blank or not
        if(array_key_exists('product_ids', $paramJsonData)){
            if(($paramJsonData['product_ids'])>0 && $paramJsonData['product_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check product type ka product category ka product id is blank or not
        if(array_key_exists('product_featureids', $paramJsonData)){
            if(($paramJsonData['product_featureids'])>0 && $paramJsonData['product_featureids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==8){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    
    // CJ defined this function 2016-07-13
    public static function checkParamDataFetchingCShopstoresummaryInfo($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check product delivery country
        if(array_key_exists('country_ids', $paramJsonData)){
            if($paramJsonData['country_ids']=='1'){
                $givenParamDataCorrectCount++;
            }
        }
        // check city_ids key present or not
        if(array_key_exists('city_ids', $paramJsonData)){
            if(($paramJsonData['city_ids'])>0 && $paramJsonData['city_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check area_ids key present or not
        if(array_key_exists('area_ids', $paramJsonData)){
            if(($paramJsonData['area_ids'])>0 && $paramJsonData['area_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check shopStore id is blank or not
        if(array_key_exists('shopstoreids', $paramJsonData)){
            if(($paramJsonData['shopstoreids'])>0 && $paramJsonData['shopstoreids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==4){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-07-18
    public static function checkParamDataFetchingAllProductDetails($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check product delivery country
        if(array_key_exists('country_ids', $paramJsonData)){
            if($paramJsonData['country_ids']=='1'){
                $givenParamDataCorrectCount++;
            }
        }
        // check city_ids key present or not
        if(array_key_exists('city_ids', $paramJsonData)){
            if(($paramJsonData['city_ids'])>0 && $paramJsonData['city_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check area_ids key present or not
        if(array_key_exists('area_ids', $paramJsonData)){
            if(($paramJsonData['area_ids'])>0 && $paramJsonData['area_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check producttype_ids key present or not
        if(array_key_exists('product_typesids', $paramJsonData)){
            if(($paramJsonData['product_typesids'])>0 && $paramJsonData['product_typesids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check product type ka product category id is blank or not
        if(array_key_exists('product_categoryids', $paramJsonData)){
            if(($paramJsonData['product_categoryids'])>0 && $paramJsonData['product_categoryids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check shopStore id is blank or not
        if(array_key_exists('shopstoreids', $paramJsonData)){
            if(($paramJsonData['shopstoreids'])>0 && $paramJsonData['shopstoreids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check product price filter
        if(array_key_exists('product_price_filter', $paramJsonData)){
            if($paramJsonData['product_price_filter']!='' 
                && $paramJsonData['product_price_filter']!=false 
                && $paramJsonData['product_price_filter']!=null){
                $givenParamDataCorrectCount++;
            }
        }
        // check product size filter
        if(array_key_exists('product_size_filter', $paramJsonData)){
            if($paramJsonData['product_size_filter']!='' 
                && $paramJsonData['product_size_filter']!=false 
                && $paramJsonData['product_size_filter']!=null){
                $givenParamDataCorrectCount++;
            }
        }
        // check product discount filter
        if(array_key_exists('product_discount_filter', $paramJsonData)){
            if($paramJsonData['product_discount_filter']!='' 
                && $paramJsonData['product_discount_filter']!=false 
                && $paramJsonData['product_discount_filter']!=null){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount>=4){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-07-18
    public static function checkParamDataFetchingCshopstoreAllProductDetails($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check product delivery country
        if(array_key_exists('country_ids', $paramJsonData)){
            if($paramJsonData['country_ids']=='1'){
                $givenParamDataCorrectCount++;
            }
        }
        // check city_ids key present or not
        if(array_key_exists('city_ids', $paramJsonData)){
            if(($paramJsonData['city_ids'])>0 && $paramJsonData['city_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check area_ids key present or not
        if(array_key_exists('area_ids', $paramJsonData)){
            if(($paramJsonData['area_ids'])>0 && $paramJsonData['area_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check product type id is blank or not
        if(array_key_exists('product_typesids', $paramJsonData)){
            if(($paramJsonData['product_typesids'])>0 && $paramJsonData['product_typesids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check product type ka product category id is blank or not
        if(array_key_exists('product_categoryids', $paramJsonData)){
            if(($paramJsonData['product_categoryids'])>0 && $paramJsonData['product_categoryids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check shopstoreids id is blank or not
        if(array_key_exists('shopstoreids', $paramJsonData)){
            if(($paramJsonData['shopstoreids'])>0 && $paramJsonData['shopstoreids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check product price filter
        if(array_key_exists('product_price_filter', $paramJsonData)){
            if($paramJsonData['product_price_filter']!='' 
                && $paramJsonData['product_price_filter']!=false 
                && $paramJsonData['product_price_filter']!=null){
                $givenParamDataCorrectCount++;
            }
        }
        // check product size filter
        if(array_key_exists('product_size_filter', $paramJsonData)){
            if($paramJsonData['product_size_filter']!='' 
                && $paramJsonData['product_size_filter']!=false 
                && $paramJsonData['product_size_filter']!=null){
                $givenParamDataCorrectCount++;
            }
        }
        // check product discount filter
        if(array_key_exists('product_discount_filter', $paramJsonData)){
            if($paramJsonData['product_discount_filter']!='' 
                && $paramJsonData['product_discount_filter']!=false 
                && $paramJsonData['product_discount_filter']!=null){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount>=5){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-07-13
    public static function checkParamDataFetchingCshopstoreWorkingstyle($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check shopStore id is blank or not
        if(array_key_exists('shopstoreids', $paramJsonData)){
            if(($paramJsonData['shopstoreids'])>0 && $paramJsonData['shopstoreids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==1){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-07-13
    public static function checkParamDataFetchingCshopstoreProductDeliveryAreaInfo($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check shopStore id is blank or not
        if(array_key_exists('shopstoreids', $paramJsonData)){
            if(($paramJsonData['shopstoreids'])>0 && $paramJsonData['shopstoreids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==1){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-07-13
    public static function checkParamDataFetchingProductDescriptionDetails($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check product type id is blank or not
        if(array_key_exists('product_ids', $paramJsonData)){
            if(($paramJsonData['product_ids'])>0 && $paramJsonData['product_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==1){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    

    
    // CJ defined this function 2016-07-24
    public static function checkParamDataForAddingTrackUserAccessingWebsites($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check user_id key present or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if($paramJsonData['user_sessionid']=='' || strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check page_name key present or not
        if(array_key_exists('page_name', $paramJsonData)){
            if($paramJsonData['page_name']!='' && $paramJsonData['page_name']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==2){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-07-24
    public static function checkParamDataForAddingCorporateTieupRequest($paramJsonData){
        $retStatus = 'TRUE';
        return $retStatus;
    }
    
    
    //////////////////////////// user related code //////////////////////
    
    
    // CJ defined this function 2016-07-27
    public static function checkParamDataForUserSignInAuthentication($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check user_sessionid key present or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if(strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check user_sessionstarttime key present or not
        if(array_key_exists('user_sessionstarttime', $paramJsonData)){
            if($paramJsonData['user_sessionstarttime']!='' 
                && $paramJsonData['user_sessionstarttime']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        // check encoded_mobile key present or not
        if(array_key_exists('encoded_mobile', $paramJsonData)){
            if(strlen($paramJsonData['encoded_mobile'])==10){
                $givenParamDataCorrectCount++;
            }
        }
        // check encoded_password key present or not
        if(array_key_exists('encoded_password', $paramJsonData)){
            if(strlen($paramJsonData['encoded_password'])>0 && $paramJsonData['encoded_password']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==4){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-08-01
    public static function checkParamDataForAuthenticatedUserDetails($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check isUserLoggedIn key present or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if(strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check udblogId key present or not
        if(array_key_exists('udblogId', $paramJsonData)){
            if(strlen($paramJsonData['udblogId'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==2){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-08-21
    public static function checkParamDataForUpdatingUserPersonalDetails($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check isUserLoggedIn key present or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if(strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check udblogId key present or not
        if(array_key_exists('udblogId', $paramJsonData)){
            if(strlen($paramJsonData['udblogId'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check name key present or not
        if(array_key_exists('name', $paramJsonData)){
            if(strlen($paramJsonData['name'])>0 && $paramJsonData['name']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check email key present or not
        if(array_key_exists('email', $paramJsonData)){
            $isEmailStringMatched = preg_match('/^.+[@]+([\w])+([.])+[a-z]{2,3}$/', $paramJsonData['email']);
            if(strlen($paramJsonData['email'])>0 && $isEmailStringMatched==true){
                $givenParamDataCorrectCount++;
            }
        }
        // check mobile key present or not
        if(array_key_exists('mobile', $paramJsonData)){
            if(strlen($paramJsonData['mobile'])==10){
                $givenParamDataCorrectCount++;
            }
        }
        // check gender key present or not
        if(array_key_exists('gender', $paramJsonData)){
            if(strlen($paramJsonData['gender'])>0 && $paramJsonData['gender']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check birthdate key present or not
        if(array_key_exists('birthdate', $paramJsonData)){
            if(strlen($paramJsonData['birthdate'])>0 && $paramJsonData['birthdate']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==7){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-08-21
    public static function checkParamDataForUpdatingUserPasswordDetails($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check isUserLoggedIn key present or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if(strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check udblogId key present or not
        if(array_key_exists('udblogId', $paramJsonData)){
            if(strlen($paramJsonData['udblogId'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check old_password key present or not
        if(array_key_exists('old_password', $paramJsonData)){
            if(strlen($paramJsonData['old_password'])>0 && $paramJsonData['old_password']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check old_password key present or not
        if(array_key_exists('new_password', $paramJsonData)){
            if(strlen($paramJsonData['new_password'])>0 && strlen($paramJsonData['newc_password'])>0
                && $paramJsonData['new_password']==$paramJsonData['newc_password']){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==4){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    
    /////////////////////////// rating/review related code //////////////////////
    
    
    // CJ defined this function 2016-07-13
    public static function checkParamDataFetchingRatingReviewAboutProduct($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check store_ids  is blank or not
        if(array_key_exists('store_ids', $paramJsonData)){
            if(($paramJsonData['store_ids'])>0 && $paramJsonData['store_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check product_ids is blank or not
        if(array_key_exists('product_ids', $paramJsonData)){
            if(($paramJsonData['product_ids'])>0 && $paramJsonData['product_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==2){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-07-13
    public static function checkParamDataFetchingAllUserRatingsAbtShopstores($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check store_ids  is blank or not
        if(array_key_exists('store_ids', $paramJsonData)){
            if(($paramJsonData['store_ids'])>0 && $paramJsonData['store_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==1){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-07-22
    public static function checkParamDataFetchingRatingReviewQuestionFromShopstores($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check store_ids  is blank or not
        if(array_key_exists('store_ids', $paramJsonData)){
            if(($paramJsonData['store_ids'])>0 && $paramJsonData['store_ids']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==1){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
 
    // CJ defined this function 2016-08-06
    public static function checkParamDataToAddUserRatingReviewProduct($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check user_sessionid  is blank or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if(strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check udblogId key present or not
        if(array_key_exists('udblogId', $paramJsonData)){
            if(strlen($paramJsonData['udblogId'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        if(array_key_exists('userAllQuesAnwerRatingReviewAbtProductArr', $paramJsonData)){
            if(count($paramJsonData['userAllQuesAnwerRatingReviewAbtProductArr'])===4){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==3){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
     
    
    ////////////////////////// order cart related code ////////////
    
    
    public static function checkParamDataForAddingProductDataInOrdercart($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check temp_userid  is blank or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if(strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        if(array_key_exists('udblogId', $paramJsonData)){
            if(strlen($paramJsonData['udblogId'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        if(array_key_exists('shopstore_id', $paramJsonData)){
            if(($paramJsonData['shopstore_id'])>0 && $paramJsonData['shopstore_id']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if(array_key_exists('product_typeid', $paramJsonData)){
            if(($paramJsonData['product_typeid'])>0 && $paramJsonData['product_typeid']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if(array_key_exists('product_categoryid', $paramJsonData)){
            if(($paramJsonData['product_categoryid'])>0 && $paramJsonData['product_categoryid']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if(array_key_exists('product_listid', $paramJsonData)){
            if(($paramJsonData['product_listid'])>0 && $paramJsonData['product_listid']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if(array_key_exists('product_featureid', $paramJsonData)){
            if(($paramJsonData['product_featureid'])>0 && $paramJsonData['product_featureid']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if(array_key_exists('product_featuresize', $paramJsonData)){
            if($paramJsonData['product_featuresize']!='' && $paramJsonData['product_featuresize']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        if(array_key_exists('product_featuresprice', $paramJsonData)){
            if(($paramJsonData['product_featuresprice'])>0 && $paramJsonData['product_featuresprice']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if(array_key_exists('product_featuresqty', $paramJsonData)){
            if(($paramJsonData['product_featuresqty'])>=1 && $paramJsonData['product_featuresqty']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if(array_key_exists('product_features_totalamount', $paramJsonData)){
            if(($paramJsonData['product_features_totalamount'])>0 && $paramJsonData['product_features_totalamount']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        if(array_key_exists('product_description', $paramJsonData)){
            $givenParamDataCorrectCount++;
        }
        if($givenParamDataCorrectCount==12){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    // CJ defined this function 2016-08-14
    public static function checkParamDataForFetchingOrderItemList($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check isUserLoggedIn key present or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if(strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check udblogId key present or not
        if(array_key_exists('udblogId', $paramJsonData)){
            if(strlen($paramJsonData['udblogId'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check ordercartItemListByStatusType key present or not
        if(array_key_exists('ordercartItemListByStatusType', $paramJsonData)){
            if($paramJsonData['ordercartItemListByStatusType']!='' 
                && $paramJsonData['ordercartItemListByStatusType']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==3){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    
    // CJ defined this function 2016-08-26
    public static function checkParamDataToUpdateItemFromOrdercart($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check isUserLoggedIn key present or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if(strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check udblogId key present or not
        if(array_key_exists('udblogId', $paramJsonData)){
            if(strlen($paramJsonData['udblogId'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check ordercart_itemid key present or not
        if(array_key_exists('ordercart_itemid', $paramJsonData)){
            if($paramJsonData['ordercart_itemid']!='' && ($paramJsonData['ordercart_itemid'])>0){
                $givenParamDataCorrectCount++;
            }
        }
        // check qty key present or not
        if(array_key_exists('product_featuresqty', $paramJsonData)){
            if($paramJsonData['product_featuresqty']!='' && ($paramJsonData['product_featuresqty'])>0){
                $givenParamDataCorrectCount++;
            }
        }
        // check totalamount key present or not
        if(array_key_exists('product_features_totalamount', $paramJsonData)){
            if($paramJsonData['product_features_totalamount']!='' && ($paramJsonData['product_features_totalamount'])>0){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==5){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
      // CJ defined this function 2016-08-26
    public static function checkParamDataToRemoveItemFromOrdercart($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check isUserLoggedIn key present or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if(strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check udblogId key present or not
        if(array_key_exists('udblogId', $paramJsonData)){
            if(strlen($paramJsonData['udblogId'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check ordercart_itemid key present or not
        if(array_key_exists('ordercart_itemid', $paramJsonData)){
            if($paramJsonData['ordercart_itemid']!='' && ($paramJsonData['ordercart_itemid'])>0){
                $givenParamDataCorrectCount++;
            }
        }
        // check reason key present or not
        if(array_key_exists('reason', $paramJsonData)){
            if($paramJsonData['reason']!='' && strlen($paramJsonData['reason'])>0){
                $givenParamDataCorrectCount++;
            }
        }
        // check status key present or not
        if(array_key_exists('status', $paramJsonData)){
            if($paramJsonData['status']=='ZC' || $paramJsonData['status']=='ZA'){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount==5){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    
    //////////////////////////// party order related code //////////////////////////////////////
    
    // CJ defined this function 2016-07-20
    public static function checkParamDataForAddingPartyOrderRequest($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check user_sessionid key present or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if(strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check udblogId key present or not
        if(array_key_exists('udblogId', $paramJsonData)){
            if(strlen($paramJsonData['udblogId'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check occassion_title key present or not
        if(array_key_exists('occassion_title', $paramJsonData)){
            if($paramJsonData['occassion_title']!='' && $paramJsonData['occassion_title']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        // check nos_person key present or not
        if(array_key_exists('nos_person', $paramJsonData)){
            if($paramJsonData['nos_person']!='' && $paramJsonData['nos_person']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        // check party_date key present or not
        if(array_key_exists('party_date', $paramJsonData)){
            if($paramJsonData['party_date']!='' && $paramJsonData['party_date']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        // check party_venue key present or not
        if(array_key_exists('party_venue', $paramJsonData)){
            if($paramJsonData['party_venue']!='' && $paramJsonData['party_venue']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        // check party_requirements key present or not
        if(array_key_exists('party_requirements', $paramJsonData)){
            if($paramJsonData['party_requirements']!='' && $paramJsonData['party_requirements']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        // check requirements key present or not
        if(array_key_exists('file', $paramJsonData)){
            if($paramJsonData['file']!='' && $paramJsonData['file']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount>=7){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    
    //////////////////////// customize order related code ///////////////////////////
    
    // CJ defined this function 2016-07-20
    public static function checkParamDataForAddingCustomizeOrderRequest($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check user_sessionid key present or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if(strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check udblogId key present or not
        if(array_key_exists('udblogId', $paramJsonData)){
            if(strlen($paramJsonData['udblogId'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check event_title key present or not
        if(array_key_exists('event_title', $paramJsonData)){
            if($paramJsonData['event_title']!='' && $paramJsonData['event_title']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        // check nos_person key present or not
        if(array_key_exists('nos_person', $paramJsonData)){
            if($paramJsonData['nos_person']!='' && $paramJsonData['nos_person']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        // check event_date key present or not
        if(array_key_exists('event_date', $paramJsonData)){
            if($paramJsonData['event_date']!='' && $paramJsonData['event_date']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        // check event_venue key present or not
        if(array_key_exists('event_venue', $paramJsonData)){
            if($paramJsonData['event_venue']!='' && $paramJsonData['event_venue']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        // check event_requirements key present or not
        if(array_key_exists('event_requirements', $paramJsonData)){
            if($paramJsonData['event_requirements']!='' && $paramJsonData['event_requirements']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        // check requirements key present or not
        if(array_key_exists('file', $paramJsonData)){
            if($paramJsonData['file']!='' && $paramJsonData['file']!=false){
                $givenParamDataCorrectCount++;
            }
        }
        if($givenParamDataCorrectCount>=7){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    
    ////////////////////////// Sharing offers code //////////////////////////
    
    
    // CJ defined this function 2016-08-28
    public static function checkParamDataForAddingSharingOffersFrmOneUserToOtherUser($paramJsonData){
        $retStatus = 'FALSE';
        $givenParamDataCorrectCount = 0;
        // check isUserLoggedIn key present or not
        if(array_key_exists('user_sessionid', $paramJsonData)){
            if(strlen($paramJsonData['user_sessionid'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check udblogId key present or not
        if(array_key_exists('udblogId', $paramJsonData)){
            if(strlen($paramJsonData['udblogId'])>=20){
                $givenParamDataCorrectCount++;
            }
        }
        // check discount_couponid key present or not
        if(array_key_exists('discount_couponid', $paramJsonData)){
            if(($paramJsonData['discount_couponid'])>0 && $paramJsonData['discount_couponid']!=''){
                $givenParamDataCorrectCount++;
            }
        }
        // check udblogId key present or not
        if(array_key_exists('shared_onmobile', $paramJsonData)){
            if(strlen($paramJsonData['shared_onmobile'])==10){
                $givenParamDataCorrectCount++;
            }
        }
        
        if($givenParamDataCorrectCount==4){
            $retStatus = 'TRUE';
        }
        return $retStatus;
    }
    
    
    
}
