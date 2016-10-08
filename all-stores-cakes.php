
<div ng-controller='dkSessionController' ng-init="loadDefaultDataInDkSession('allstorescakes');">

    <!-- all stores wise info body  -->
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 allStoresInfoBodyWrapperDivClass">

        <!-- customer bread crumb -->
        <ul class="customerBreadcrumbULClass list-inline">
            <li class='customerBreadcrumbLIClass'>
                <a href="<?php echo $BaseSitePath;?>">
                    Home
                </a>
            </li>
            <li class='customerBreadcrumbLIClass'>
                |
            </li>
            <li class='customerBreadcrumbLIClass'>
                Cakes
            </li>
        </ul>

        <!-- all stores wise info container -->
        <div ng-controller="StoreController" ng-init="loadStoreListDeliveryAreaBasedDessertsType();" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 allStoresInfoContainerDivClass">

            <p ng-if="allStoresInfoList.length>0" class="allStoresInfoNoteHeaderPClass">
                <i class="fa fa-smile-o"></i> 
                Order cakes from <span class="badge countAllStoresSClass">{{allStoresInfoList.length}}</span> stores delivering to your door step !!!
            </p>

            <!-- iterate each store info container -->
            <div ng-if="allStoresInfoList.length>0" ng-repeat="eachStoreInfoDataObj in allStoresInfoList" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 eachStoreInfoContainerDivClass">
                <div class="eachStoreInfoInnerContainerDivClass">    
                    <p class="eachStoreNamePClass">
                        {{eachStoreInfoDataObj.shopStoreTitle}}
                    </p>
                    <p class="eachStoreLocationPClass">
                        <i class="fa fa-map-marker storeLocationMapIconClass"></i> {{eachStoreInfoDataObj.shopStoreOrgLocation}}
                    </p>
                    <hr class="eachStoreHrClass">
                    <p class="eachStoreReviewedRatingPClass" ng-if="eachStoreInfoDataObj.isReviewedRatingFound==='TRUE'">
                        <span class="eachStoreReviewedRatingBoxSClass">
                            {{eachStoreInfoDataObj.avgRatingReviewed}} <i class="fa fa-star"></i> ({{eachStoreInfoDataObj.totalUserRatingReviewed}})
                        </span>
                    </p>
                    <p class="eachStoreNoReviewedRatingPClass" ng-if="eachStoreInfoDataObj.isReviewedRatingFound==='FALSE'">
                        {{eachStoreInfoDataObj.reviewedRatingStr}}
                    </p>
                    <p class="eachStoreServedDessertsTypePClass">
                        <span>Served In: </span> 
                        <span>{{eachStoreInfoDataObj.dessertsTypeServedStr}}</span>
                    </p>
                    <p class="eachStoreServedDessertsTypeTotalProductPClass">
                        <span>Total Products: </span> 
                        <span>{{eachStoreInfoDataObj.totalProduct}}</span>
                    </p>
                    <p ng-if="eachStoreInfoDataObj.discountUpto>0" class="eachStoreDiscountUptoPClass">
                        Upto {{eachStoreInfoDataObj.discountUpto}} <i class="fa fa-percent"></i> Off
                    </p>
                    <p ng-if="eachStoreInfoDataObj.discountUpto<=0" class="eachStoreDiscountUptoPClass">
                        No offers available
                    </p>
                    <p class="eachStoreDeliveryTimePClass">
                        delivers in {{eachStoreInfoDataObj.deliveryTime}}
                    </p>
                    <p class="eachStoreDeliveryFeeMsgPClass">
                        {{eachStoreInfoDataObj.deliveryFeeMsgStr}}
                    </p>
                    <p class="eachStoreOnlineOrderBtnPClass">
                        <button ng-controller='StoreController' ng-click='storeDessertsTypeDataDetailsInSessionStorageToViewStoreAllProductList(eachStoreInfoDataObj)' class="btn eachStoreOnlineOrderBtnClass">
                            ORDER NOW
                        </button>
                    </p>
                </div>
            </div>

            <div ng-if="allStoresInfoList<=0" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 noStoresFoundInfoMsgContainerDivClass">
                <i class="fa fa-frown-o"></i> Sorry, we don't serve any cakes at your '{{selectedDeliveryAreaTextHeader}}' delivery area !!!
            </div>

        </div>

    </div>

    <!-- create horizontally space div between -->
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 commonHorizontalSpaceDivClass"></div>
    
    <!-- refresh web application data -->
    <div id='refreshUserWebAppDataDivId' ng-controller="RefreshWebAppDataController" ng-init="refreshWebAppData()" class="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
    
</div>