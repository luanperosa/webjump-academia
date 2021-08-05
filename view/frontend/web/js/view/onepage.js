define([
    'ko',
    'uiComponent',
    'Magento_Customer/js/model/address-list'
], function (
    ko,
    Component,
    addressList
) {
    'use strict';

    return Component.extend({
        isLabelHidden: ko.computed(function () {
            return !addressList().length;
        })
    });
});
