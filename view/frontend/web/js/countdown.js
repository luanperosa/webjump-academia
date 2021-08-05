define([
    'uiComponent',
    'ko'
], function(Component, ko) {
    return Component.extend({
        initialize: function () {
            this._super();
            setInterval(this.reloadTime.bind(this), 1000);
        },

        clock: ko.observable("Loading..."),
        messageCheckout: "Não perca tempo, compre agora!",

        getMinute() {
            const minute = new Date();
            return minute.getMinutes();
        },

        getSecond() {
            const second = new Date();
            return second.getSeconds();
        },

        getHour() {
            const hour = new Date();
            return hour.getHours();
        },

        getMessageMaxPromotion() {
            const time = this.getHourMinSec();
            return `Final da promoção é: ${time['hour']}H:${time['min'] + 10}M`;
        },

        getHourMinSec() {
            let hour = this.getHour();
            let min = this.getMinute();
            let sec = this.getSecond();

            return {
                hour,
                min,
                sec
            }
        },

        reloadTime: function () {
            let time = this.getHourMinSec();

            this.clock(`${time.hour}H : ${time.min}M : ${time.sec}S`);
        },

        getClock: function () {
            return this.clock;
        },

        getMessageCheckout() {
            return this.messageCheckout;
        }
    });
});
