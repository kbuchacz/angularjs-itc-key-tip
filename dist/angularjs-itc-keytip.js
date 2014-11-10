angular.module('itc.keytip', []);

(function ()
{
    'use strict';

    function itcKeyTip()
    {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element, attrs)
            {
                function doKeyTip(value)
                {
                    if (value) {
                        jQuery(element).keyTips();
                    }
                }

                //noinspection JSUnresolvedVariable
                var watchExpressions = attrs.itcKeyTip.split(',');
                for (var i = 0; i < watchExpressions.length; i++) {
                    var expression = watchExpressions[i];

                    scope.$watch(expression, doKeyTip);
                }
            }
        };
    }

    angular.module('itc.keytip').directive('itcKeyTip', itcKeyTip);
})();
