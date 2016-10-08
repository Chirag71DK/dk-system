
<div ng-controller='dkSessionController' ng-init="loadDefaultDataInDkSession('home');">
    
    <!-- header -->
    <div class="col-xm-12 col-sm-12 col-md-12 col-lg-12 fHeaderContainerDivClass {{stickNtStickWebAppHeaderClass}}">

        <!-- web logo header --->
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
                <li ng-if="isShowSelectedDeliveryAreaTextHeader==true" class="selectedDeliveryAreaTextHeaderLIClass" title="Click here to change delivery location">
                    <i class="fa fa-map-marker"></i> At: {{selectedDeliveryAreaTextHeader}}
                </li>
                <li ng-controller="UsersController" title="Click here to view your current order cart all item(s)" ng-click="ordercartItemRequestedCount>0 && storeRequestedSectionNameToAccessInUserAccount('ordercart');">
                    <i class="fa fa-shopping-basket"></i> (Item: {{ordercartItemRequestedCount}}, Rs: {{subtotalOrderAmt}})
                </li>
                <li ng-if='isUserLoggedInSession==false' ng-click="goToSignUpSignInAccountSection('home')" ng-controller="UsersController" title="Click here to Log In / Sign Up with desserts khazana account">
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

    </div>

    <!-- header row border div class -->
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 fHeaderRowBorderDivClass"></div>

    <!-- delivery city area desserts product -->
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 deliveryCityAreaDessertsContainerDivClass">

        <!-- tag lines -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 deliveryCityAreaDessertsTagLinesContainerDivClass">
            <p class="deliveryCityAreaDessertsTagLinesPClass">
                Celebrate your <i>CELEBRATIONS</i> with us, we are coming with <i>DESSERTS</i>
            </p>
        </div>

        <!-- delivery city list -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 deliveryCityListContainerDivClass">
            <div id="deliveryCityListWrapperDivId" ng-controller="LocationController" ng-init="loadDeliveryCityList('home')" class="col-xs-12 col-sm-12 col-md-5 col-lg-5 deliveryCityListWrapperDivClass">
                <span class="deliveryCityLblSClass">Choose delivery city</span>
                <select id='deliveryCityListSelectCtrlId' class="selectpicker show-menu-arrow show-tick" data-size="5" data-width="100%" data-live-search="true" title="Choose delivery city"></select>
            </div>
        </div>

        <!-- delivery area list -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 deliveryAreaListContainerDivClass" ng-show="isUserChangedDeliveryCity">
            <div id="deliveryAreaListWrapperDivId" class="col-xs-12 col-sm-12 col-md-5 col-lg-5 deliveryAreaListWrapperDivClass">
                <span class="deliveryAreaLblSClass">Choose delivery area</span>
                <select id="deliveryAreaListSelectCtrlId" class="selectpicker show-menu-arrow show-tick" data-size="5" data-show-subtext='true' data-width="100%" data-live-search="true" title="Choose delivery area"></select>
            </div>
        </div>

        <!-- desserts type list -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 deliveryAreaDessertsTypeListContainerDivClass" ng-show="isUserChangedDeliveryArea">
            <div id="deliveryAreaDessertsTypeListWrapperDivId" class="col-xs-12 col-sm-12 col-md-5 col-lg-5 deliveryAreaDessertsTypeListWrapperDivClass">
                <span class="deliveryAreaDessertsTypeListLblSClass">Choose desserts</span>
                <select id="deliveryAreaDessertsTypeListSelectCtrlId" class="selectpicker show-menu-arrow show-tick" data-size="5" data-show-subtext='true' data-width="100%" data-live-search="true" title="Choose desserts"></select>
            </div>
        </div>

    </div>

    <!-- create horizontally space div between -->
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 commonHorizontalSpaceDivClass"></div>

    <!-- offers/promotion -->
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 whatIsDessertsKhazanaMainContainerDivClass">
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 dkPartyOrderContainerDivClass">
            <div class='dkPartyOrderWrapperDivClass'>
                <p class='partyOrderPClass' title='Click to request for party orders'>
                    <span>OFFERS / PROMOTION</span>
                </p>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 dkCustomizeDessertsOrderContainerDivClass">
            <div class='dkCustomizeDessertsOrderWrapperDivClass'>
                <p class='customizeOrderPClass' title='Click to request for customize orders'>
                    <span>WE SERVED AT LOCATION</span>
                </p>
            </div>
        </div>
    </div>


    <!-- what is desserts khazana -->
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 whatIsDessertsKhazanaMainContainerDivClass">
        <p class='whatIsDessertskhazanaTitlePClass'>
            <span>The Many Ways For Your Celebration </span>
        </p>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 dkPartyOrderContainerDivClass">
            <div class='dkPartyOrderWrapperDivClass'>
                <img src='#' class='partyOrderImgClass' load-partyorder-images-directive>
                <p ng-controller="PartyOrdersController" ng-click="redirectToViewPartyOrderRequest()" class='partyOrderPClass' title='Click to request for party orders'>
                    <span>PARTY ORDERS</span>
                </p>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 dkCustomizeDessertsOrderContainerDivClass">
            <div class='dkCustomizeDessertsOrderWrapperDivClass'>
                <img src='#' class='customizeOrderImgClass' load-customizeorder-images-directive>
                <p ng-controller="CustomizeOrdersController" ng-click="redirectToViewCustomizeOrderRequest()" class='customizeOrderPClass' title='Click to request for customize orders'>
                    <span>CUSTOMIZE ORDER</span>
                </p>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 dkCoperateSpecialOffersContainerDivClass">
            <div class='dkCoperateSpecialOffersWrapperDivClass'>
                <img src='#' class='coperateOrderImgClass' load-coperatetieup-images-directive>
                <p ng-controller="CorporateTieupController" ng-click="redirectToViewCorporateTieupRequest()" class='corporateOrderPClass' title='Click to request for corporate tie-up'>
                    <span>CORPORATE TIE-UP</span>
                </p>
            </div>
        </div>
    </div>

    <!-- how its works -->
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 howItsWorkContainerDivClass">
        <p class='howItsWorkTitlePClass'>
            <span>How it's works ?</span>
        </p>
    </div>

    <!-- refresh web application data -->
    <div id='refreshUserWebAppDataDivId' ng-controller="RefreshWebAppDataController" ng-init="refreshWebAppData()" class="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>

</div>    