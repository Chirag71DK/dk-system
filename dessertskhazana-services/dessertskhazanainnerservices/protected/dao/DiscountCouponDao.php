<?php

/**
* Description of DiscountCouponDao
* @author chirag 2016-08-13
*/

class DiscountCouponDao{
    
    // CJ defined this function 2016-08-13
    public static function getDiscountCouponAvailableForUser($userId=''){
        $result = false;
        try{
            $connection = Yii::App()->db;
            $sql= "SELECT 
                dcg.id dcgId,
                dcg.code dcgCode, 
                dcg.title dcgTitle,
                COALESCE(dcg.is_universally, 'N') isUniversallyAccepted,
                COALESCE(dcg.is_percentagebased, 'N') isPercentageBased,
                COALESCE(dcg.percentage_based, 0) percentageBased,
                COALESCE(dcg.is_cashback_based, 'N') isCashbackBased,
                COALESCE(dcg.cashback_based, 0) cashbackBased,
                COALESCE(dcg.above_orderamount, '') aboveOrderAmt,
                COALESCE((CASE WHEN dcg.for_userid IS NULL THEN 'N' ELSE 'Y' END), 'N') isDiscountCouponAvailableForLoggedUser,
                COALESCE(dcg.for_userid,'') forUserId
                FROM DK_DISCOUNTCOUPONGENERATION dcg
                LEFT JOIN DK_USERS u ON u.id=dcg.for_userid AND u.status='A' AND dcg.for_userid='$userId'
                WHERE 1
                AND dcg.status='A'
                AND CURDATE() BETWEEN dcg.start_datedtime AND dcg.end_datedtime";
            $command = $connection->createCommand($sql);
            $discountCouponDetailsArr = $command->queryAll();
            if(count($discountCouponDetailsArr)>0 && $discountCouponDetailsArr!=false){
                $result =  $discountCouponDetailsArr;
            }
        }catch(Exception $ex){}
        return $result;
    }
    
    // CJ defined this function 2016-08-26
    public static function getSharingDiscountCouponSetupListByUser($userId){
        $result = false;
        try{
            $connection = Yii::App()->db;
            $sql= "SELECT
                    dcg.id dcgId, dcg.code dcgCode, dcg.title dcgTitle,
                    COALESCE(dcg.is_universally, 'N') isUniversallyAccepted,
                    COALESCE(dcg.is_percentagebased, 'N') isPercentageBased,
                    COALESCE(dcg.percentage_based, 0) percentageBased,
                    COALESCE(dcg.is_cashback_based, 'N') isCashbackBased,
                    COALESCE(dcg.cashback_based, 0) cashbackBased,
                    COALESCE(dcg.above_orderamount, '') aboveOrderAmt,
                    COALESCE((CASE WHEN dcg.for_userid IS NULL THEN 'N' ELSE 'Y' END), 'N') isDiscountCouponAvailableForLoggedUser,
                    COALESCE(dcg.for_userid,'') userId,
                    COALESCE(dcg.share_limit, 0) shareLimit,
                    COALESCE(DATE_FORMAT(dcg.end_datedtime,'%b %d %Y %h:%i %p'), '') expiredDateTime
                    FROM DK_DISCOUNTCOUPONGENERATION dcg
                    WHERE 1
                    AND dcg.status='A'
                    AND NOW() BETWEEN dcg.start_datedtime AND dcg.end_datedtime
                    AND dcg.for_userid='$userId'
                    AND dcg.is_universally='N'
                    AND ( 
                        (dcg.is_percentagebased='Y' AND dcg.percentage_based>0 AND dcg.is_cashback_based='N' )
                            OR
                        (dcg.is_cashback_based='Y' AND dcg.cashback_based>0 AND dcg.is_percentagebased='N')
                    )
                    AND dcg.can_shareit='Y'
                    AND dcg.share_limit>0";
            $command = $connection->createCommand($sql);
            $userDiscountCouponAvailableBySharingDetailsArr = $command->queryAll();
            if(count($userDiscountCouponAvailableBySharingDetailsArr)>0 && $userDiscountCouponAvailableBySharingDetailsArr!=false){
                $result =  $userDiscountCouponAvailableBySharingDetailsArr;
            }
        }catch(Exception $ex){}
        return $result;
    }
    
    // CJ defined this function 2016-08-26
    public static function getCountUserSharedDiscountCoupon($userId, $discountCouponId){
        $countUserSharedDiscountCoupon = 0;
        try{
            $connection = Yii::App()->db;
            $sql= "SELECT
                    COALESCE(COUNT(*), 0) countUserSharedDiscountCoupon
                    FROM DK_USER_SHARED_DISCOUNTCOUPON usdc 
                    WHERE
                    usdc.user_id='$userId'
                    AND usdc.discount_couponid='$discountCouponId'
                    AND usdc.status='S'";
            $command = $connection->createCommand($sql);
            $retDataArr = $command->queryAll();
            if(count($retDataArr)>0 && $retDataArr!=false){
                $countUserSharedDiscountCoupon =  $retDataArr[0]['countUserSharedDiscountCoupon'];
            }
        }catch(Exception $ex){
            $countUserSharedDiscountCoupon = 'FALSE';
        }
        return $countUserSharedDiscountCoupon;
    }
    
    // CJ defined this function 2016-08-26
    public static function getUserSharedDiscountCouponOtherUsersList($userId, $discountCouponId){
        $userSharedDiscountCouponOtherUsersList = 0;
        try{
            $connection = Yii::App()->db;
            $sql= "SELECT
                    COALESCE(usdc.shared_onmobile, '') sharedOnMobile,
                    COALESCE(usdc.shared_onemail, '') sharedOnEmail,
                    COALESCE(DATE_FORMAT(usdc.created_datedtime,'%b %d %Y %h:%i %p'), '') sharedOnDate
                    FROM DK_USER_SHARED_DISCOUNTCOUPON usdc 
                    WHERE
                    usdc.sharedby_id='$userId'
                    AND usdc.discount_couponid='$discountCouponId'
                    AND usdc.status='S'";
            $command = $connection->createCommand($sql);
            $retDataArr = $command->queryAll();
            if(count($retDataArr)>0 && $retDataArr!=false){
                $userSharedDiscountCouponOtherUsersList =  $retDataArr;
            }
        }catch(Exception $ex){}
        return $userSharedDiscountCouponOtherUsersList;
    }
    
}
