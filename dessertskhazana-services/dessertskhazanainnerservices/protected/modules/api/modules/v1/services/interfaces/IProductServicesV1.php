<?php

/**
* @author CJ defined this function 2016-06-06
*/

interface IProductServicesV1{
    public function getDeliveryAreaBasedProductTypeList($dessertsKhazanaInDtoArray);
    public function getProductTypeProductCategoryProductListForDashboardLevel($dessertsKhazanaInDtoArray);
    public function getProductTypeProductCategoryAllProductDetails($dessertsKhazanaInDtoArray);
    public function getProductTypeProductCategoryProductDetails($dessertsKhazanaInDtoArray);
    public function getProductTypeProductCategoryProductDescriptionDetails($dessertsKhazanaInDtoArray);
}
