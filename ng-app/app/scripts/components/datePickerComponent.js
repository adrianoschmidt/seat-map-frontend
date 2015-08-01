/**
 * Diretiva para usar o datePicker exemplos:
 * http://www.treselle.com/blog/angularjs-with-bootstrap/
 */
'use strict';
angular.module('li.datapicker', [])

.directive(
		'datapicker',
		function() {
			return {
				restrict : 'E',
				require : 'ngModel',
				scope : {
					ngModel : '='
				},
				controller : 'DatapickerController',
				template : '<div><div><p class="input-group">' + '<input type="text" class="form-control input-sm" datepicker-popup="{{format}}" ng-model="ngModel" is-open="opened" min-date="minDate"  datepicker-options="dateOptions" ng-required="true" close-text="Fechar" clear-text="Limpar" current-text="Hoje" />' + '<span class="input-group-btn">' + '<button type="button" class="btn btn-sm btn-default" ng-click="open($event)"><i class="glyphicon glyphicon-calendar"></i></button>' + '</span>' + '</p></div></div>',
				link : function(scope) {

					scope.format = 'dd/MM/yyyy';

					scope.open = function(event) {
						event.preventDefault();
						event.stopPropagation();

						scope.opened = true;
					};

					// Desabilita a seleção de final de semana
					// Usar no codigo date-disabled="disabled(date, mode)"
					scope.disabled = function(date, mode) {
						return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
					};

				}
			};
		})

.controller('DatapickerController', [ '$scope', function($scope) {

	$scope.dateOptions = {
		startingDay : 1
	};

} ]);
