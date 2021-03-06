
<?php
    include "Site_config.inc.php";
?>

<!DOCTYPE html>
<html lang="en" ng-app='DKAPP'>

    <!-- head section start here -->
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title><?php echo $SiteTitle; ?></title>
        <link rel="shortcut icon" href="images/dk/dklogo/fevicon.ico">
        <style>
            [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
                display:none !important;
            }
        </style>
    </head>

    <!-- body start here -->
    <body ng-cloak scroll-window-directive resize-window-directive class="ng-cloak onBodyScrollClass" ng-controller='dkSessionController' ng-init="loadDefaultDataInDkSession('allproducts');">

        <!-- common SCROLL TOP BUTTON -->
        <a class="scrollToTopBtnClass" ng-show="isShowScrollToTopBtnWebAppPage" href="#" title='Click to scroll up page'>
            <i class="fa fa-angle-up"></i>
        </a>
        
        <!-- header -->
        <div class="col-xm-12 col-sm-12 col-md-12 col-lg-12 fHeaderContainerDivClass {{stickNtStickWebAppHeaderClass}}">
            
            <!-- web log header --->
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 webAppLogoAndMenuIconContainerDivClass">
                <h1 class='webLogoHClass'>
                    <img class='dkLogoImgClass' src="#" load-dklogo-images-directive>
                </h1>
            </div>
            
            <!-- top menu bar -->
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 fHeader_topMenuBarContainerDivClass">
                <ul class="topMenuBarULClass list-inline">
                    <li title="Click here to contact us">
                        <i class="fa fa-comment-o fa-flip-horizontal"></i> Care
                    </li>
                    <li ng-controller="UsersController" title="Click here to view your current order cart all item(s)" ng-click="ordercartItemRequestedCount>0 && storeRequestedSectionNameToAccessInUserAccount('ordercart');">
                        <i class="fa fa-shopping-basket"></i> (Item: {{ordercartItemRequestedCount}}, Rs: {{subtotalOrderAmt}})
                    </li>
                    <li ng-if='isUserLoggedInSession==false' ng-click="redirectToAccountSignUpSignIn('home')" ng-controller="UsersController" title="Click here to Log In / Sign Up with desserts khazana account">
                        <i class="fa fa-user accountSignUpSignInIconClass"></i> Log In / Sign Up
                    </li>
                    <li ng-if='isUserLoggedInSession==true' ng-controller="UsersController" ng-click="toggleUserAccountSectionDropdown('home')">
                        <i class="fa fa-user accountSignUpSignInIconClass"></i> {{loggedUserName}}
                        <!-- user account showing different section label to access -->
                        <div class="userAccountAllSectionListDropdownDivClass" ng-if='isUserLoggedInSession==true'>
                            <div ng-repeat="userInfoEachSectionListArrObj in userInfoAllSectionListArrObj" title="{{userInfoEachSectionListArrObj.hoverTitle}}" class='userAccountEachSectionListDropdownDivClass' ng-click="storeRequestedSectionNameToAccessInUserAccount(userInfoEachSectionListArrObj.sectionName);">
                                {{userInfoEachSectionListArrObj.displayTitle}}
                            </div>
                        </div>
                    </li>
                    <li ng-if='isUserLoggedInSession==true' ng-click="signOutUser()" ng-controller="UsersController" title="Click here to log out from desserts khazana account">
                        <i class="fa fa-sign-out"></i> Log Out
                    </li>
                </ul>
            </div>
            
            <!-- show customer delivery city area desserts product type on header as text -->
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 showCustomerDeliveryCityAreaDessertsProductTypeTextForHeaderDivClass">
                <p ng-show='isShowCustomerDeliveryCityAreaDessertsProductTypeTextForHeader' class="showCustomerDeliveryCityAreaDessertsProductTypeTextForHeaderPClass">
                    <i class="fa fa-map-marker faa faa-tada animated showCustomerDeliveryCityAreaDessertsProductTypeTextIconClass"></i> {{customerDeliveryCityAreaDessertsProductTypeTextForHeader}}
                </p>
            </div>
            
        </div>
        
        <!-- header row border div class -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 fHeaderRowBorderDivClass"></div>
        
        <!-- what is desserts khazana -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 whatIsDessertsKhazanaMainContainerDivClass">
            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 dkAllCompleteOffersContainerDivClass">
                <h5>Desserts Khazana Complete Offers Will Come Image/Slider</h5>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 dkAllSpecialOffersContainerDivClass">
                <h5>Shopstore related Will Come Image/Slider</h5>
            </div>
        </div>

        <!-- view specific product type ka product category ka all product list summary info -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 vap_containerDivClass">
            
            <!-- customer bread crumb -->
            <div customer-breadcrumb-directive class="col-xs-12 col-sm-12 col-md-12 col-lg-12 vap_userBreadcrumbDivClass">
                <ul class="vap_userBreadcrumbULClass list-inline">
                    <li class='vap_userBreadcrumbHomeLIClass'>
                        <a href="<?php echo $BaseSitePath;?>">
                            {{customerBreadCrumbOnWebApp.homeKey}}
                        </a>
                    </li>
                    <li class='vap_userBreadcrumbProductTypeLIClass'>
                        |&nbsp; <a href="#">{{customerBreadCrumbOnWebApp.productTypeKey}}</a>
                    </li>
                </ul>
            </div>
            
            <!-- create horizontally space div between -->
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 commonHorizontalSpaceDivClass"></div>
        
            <!-- desserts khazana served desserts product in your selected delivery area -->
            <div id='vap_deliveryAreabasedDkServedAllDessertsContainerDivId' ng-controller="ProductTypeProductCategoryProductDetailsController" ng-init="loadDkDeliveryAreabasedDessertsKhazanaServedDessertsProductTypeList()" class='col-xs-12 col-sm-12 col-md-12 col-lg-12 vap_deliveryAreabasedDkServedAllDessertsContainerDivClass'>
                
                <!-- display selected desserts product type ordering by customer -->
                <li class='vap_dkServedDessertsProductNoteLIClass'>
                    <i class='fa fa-smile-o smileIconClass'></i> 
                    Hey you are viewing '{{customerBreadCrumbOnWebApp.productTypeKey}}' and also we can serve other <span class="badge vap_dessertsProductTypeCountSClass">{{deliveryAreabasedDkServedDessertsProductTypeList.length}}</span> desserts in your selected delivery area !!!
                </li> 
                
                <div id="vap_deliveryAreabasedDkServedAllDessertsScrollerWrapperDivId" class='col-xs-12 col-sm-12 col-md-12 col-lg-12 vap_deliveryAreabasedDkServedAllDessertsScrollerWrapperDivClass'>
                    <!-- iterate each desserts products info  -->
                    <div ng-repeat="eachDessertsProductTypeDetails in deliveryAreabasedDkServedDessertsProductTypeList | orderBy : '-isRequestedProductTypeIdMatched'" title='Click to view all {{eachDessertsProductTypeDetails.productTypeTitle}} desserts' class='vap_deliveryAreabasedDkServedEachDessertsProductDivClass' scroll-horizontally-dessertsproducttypelist-allproductlevel>
                        <p class="vap_dessertsProductIconPClass">
                            <i class="{{eachDessertsProductTypeDetails.productIcon}} vap_dessertsProductIconClass"></i>
                        </p>
                        <h2 class="vap_dessertsProductTitleHClass">
                            {{eachDessertsProductTypeDetails.productTypeTitle}}
                        </h2>
                        <p ng-click="collectDataToViewDeliveryAreabasedProductTypeAllProductList(eachDessertsProductTypeDetails)" class="vap_viewDessertsProductPClass">
                            View desserts
                        </p>
                    </div>
                </div>
                
            </div>
            
            <!-- create horizontally space div between -->
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 commonHorizontalSpaceDivClass"></div>
            
            <!-- all product category list will be loaded here -->
            <div ng-controller="ProductTypeProductCategoryProductDetailsController" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 vap_productAllCategoryWrapperDivClass">
                
                <p class='vap_productInfoAbtProductCategoryMsgPClass'>
                    Info *: <i class="fa fa-smile-o"></i> Hey you are viewing '{{customerBreadCrumbOnWebApp.productTypeKey}}' products from <span class="badge totalCountProductCategorySClass">{{productCategoryList.length}}</span> categories !
                </p>
                
                <div id='vap_productAllCategoryContainerDivId' class="col-xs-12 col-sm-12 col-md-12 col-lg-12 vap_productAllCategoryContainerDivClass">
                    <li ng-click="collectDataToViewDeliveryAreabasedProductTypeAllProductList(eachProductCategoryDetails)" ng-repeat="eachProductCategoryDetails in productCategoryList | orderBy : '-isRequestedProductCategoryMatched'" title='Click here to view all product about {{eachProductCategoryDetails.productCategoryTitle}} desserts' class='vap_eachProductCategoryContainerDivClass' scroll-horizontally-dessertsproducttype-productcategorylist-allproductlevel>
                        {{eachProductCategoryDetails.productCategoryTitle+'\n('+eachProductCategoryDetails.totalProductCount+')'}}
                    </li>
                </div>
                
            </div>
            
            <!-- create horizontally space div between -->
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 commonHorizontalSpaceDivClass"></div>
            
            <!-- all product list will be loaded here -->
            <div id='vapWrapperDivId' ng-controller="ProductTypeProductCategoryProductDetailsController" ng-init="loadProductTypeProductCategoryAllProductList()" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 vapWrapperDivClass">
                
                <!-- product filter operation main container div -->
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 vap_allProductFilterOperationWrapperDivClass">
                    <!-- info / tips about product filtering operation -->
                    <p class='vap_tipAbtFilterProductPClass'>
                        Tip *: Use filter to find products more easy & quickly !
                        <button ng-click="toggleViewAllProductFilterContainer()" class="btn vap_toggleProductFilterBtnClass" title="Click to show/hide product filter">
                            <i class="fa fa-filter"></i> {{toggleViewAllProductFilterBtnLabel}}
                        </button>
                    </p>
                    <div ng-show="isShowViewAllProductFilter" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 {{productViewAllFilterPopDivClass}}">
                        <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 vap_productFilterPopupBodyDivClass'>
                            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 vap_allProductInfoAbtProductCategoryProductFoundMsgPopupDivClass'>
                                <i class="fa fa-birthday-cake"></i> {{defaultSelectProductCategoryTitle}} (Found {{allProductDetailsList.length}} Items)
                            </div>
                            <!-- by store -->
                            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-7 vap_shopStoreFilterOperationDivClass'>
                                <p class='vap_labelStoreFilterPClass'>By seller</p>
                                <select id='allShopStoresFilterListSelectCtrlId' class="selectpicker show-menu-arrow show-tick" data-size="5" data-width="100%" data-live-search="true" title="Store" data-selected-text-format="count>1"></select>
                            </div>
                            <!-- by price -->
                            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-7 vap_priceFilterOperationDivClass'>
                                <p class='vap_labelPriceFilterPClass'>By price</p>
                                <select id='allProductPriceFilterListSelectCtrlId' class="selectpicker show-menu-arrow show-tick" data-size="5" data-width="100%" data-live-search="true" title="Price" multiple data-selected-text-format="count>1"></select>
                            </div>
                            <!-- by size -->
                            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-7 vap_sizeFilterOperationDivClass'>
                                <p class='vap_labelSizeFilterPClass'>By size</p>
                                <select id='allProductSizeFilterListSelectCtrlId' class="selectpicker show-menu-arrow show-tick" data-size="5" data-width="100%" data-live-search="true" title="Size" multiple data-selected-text-format="count>1"></select>
                            </div>
                            <!-- by discount -->
                            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-7 vap_discountFilterOperationDivClass'>
                                <p class='vap_labelDiscountFilterPClass'>By discount</p>
                                <select id='allProductDiscountFilterListSelectCtrlId' class="selectpicker show-menu-arrow show-tick" data-size="5" data-width="100%" data-live-search="true" title="Discount" multiple data-selected-text-format="count>1"></select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- summary info display -->
                <div ng-show="allProductDetailsList.length" class='col-xs-12 col-sm-12 col-md-12 col-lg-12 vap_allProductInfoAbtProductCategoryProductFoundMsgDivClass'>
                    <i class="fa fa-birthday-cake"></i> {{defaultSelectProductCategoryTitle}} (Showing {{allProductDetailsList.length}} Items)
                </div>

                <!-- each product details iterate for displaying -->
                <div maxheight-productboxwidget-allproductslevel ng-repeat="eachProductDetails in allProductDetailsList" class="col-xs-6 col-sm-4 col-md-3 col-lg-3 vap_productBoxWidgetDivClass">
                    <img style='width:100%!important;' class='preloadProductImagesClass' data-original="data/vendor_cb1/dessertsproducttype/cakes/regular/r1_(270x239).png" ng-src="<?php echo $BaseSitePath; ?>images/productphotoback.png">
                    <div class='col-xm-12 col-sm-12 col-md-12 col-lg-12 vap_productBoxWidgetDividerLineDivClass'></div>
                    <p class='vap_productStoreNameContainerPClass'>
                        <span class="vap_productStoreLabelNameSpanClass">Seller : </span>
                        <span class="vap_productStoreNameSpanClass">{{eachProductDetails.shopStoreTitle}}</span>
                    </p>
                    <p class='vap_productNamePClass'>
                        {{eachProductDetails.productListTitle}}
                    </p>
                    <p class='vap_productPricePClass'> 
                        <span class='vap_productCutPriceTextSClass' ng-if="eachProductDetails.productFeatureDiscount !== ''">
                            <i class="fa fa-rupee"></i> {{eachProductDetails.productFeatureBasePrice}}
                        </span>
                        <span class='vap_productPayBlgPriceTextSClass'>
                            <i class="fa fa-rupee"></i> {{eachProductDetails.productFeatureOnlineSellingPrice}}
                        </span>
                        <span class='vap_productDiscountPercentTextSClass' ng-if="eachProductDetails.productFeatureDiscount!==''">
                            ({{eachProductDetails.productFeatureDiscount}}% Off)
                        </span>
                    </p>
                    <p class='vap_productWeightPClass'>
                        Size : {{eachProductDetails.productFeatureDisplayMeasurementType}}
                    </p>
                    <p class='vap_productBtnWrapperPClass'> 
                        <button ng-controller='OrderCartController' ng-click="checkProductDataToAddInOrdercart(eachProductDetails, false, 'allproducts')" title='Click to add {{eachProductDetails.productListTitle}} item in order cart' class="vap_specificProductAddBtnClass btn">
                            <i class="fa fa-plus"></i>
                        </button>
                        <button title='Click to view more about {{eachProductDetails.productListTitle}} item details' class="vap_specificProductViewDetailsBtnClass btn" ng-click='viewProductDetails(eachProductDetails)'>
                            <i class="fa fa-list"></i>
                        </button>
                        <button ng-controller='ShopStoreController' ng-click='collectDataToViewCShopstore(eachProductDetails)' title='Click to view this seller store desserts(menu), information, review/rating' class="vap_specificViewStoreDetailsBtnClass btn">
                            STORE
                        </button>
                    </p>
                </div>

                <!-- not found show msg div -->
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 vap_notFoundProductMsgDivClass">
                    {{notFoundProductMsgStr}}
                </div>
                
            </div>
            
        </div>
        
        <!-- refresh web application data -->
        <div id='refreshUserWebAppDataDivId' ng-controller="RefreshWebAppDataController" ng-init="refreshWebAppData()" class="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
        
        <!-- load all css & js file-->
        <?php
        include "loadAllJsCssFile.php";
        ?>

    </body>

</html>


