System.register(['aurelia-framework', 'jquery'], function (_export) {
	'use strict';

	var bindable, $, orderform, KeysValueConverter;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
		}, function (_jquery) {
			$ = _jquery['default'];
		}],
		execute: function () {
			orderform = (function () {
				function orderform() {
					_classCallCheck(this, orderform);

					this.heading = 'Order Form';
					this.sku = '';
					this.qty = '';
					this.skuName = '';
					this.skuPrice = '';
					this.itemSubTotal = '';
					this.itemCounter = '1';
					this.items = [{}];
				}

				_createClass(orderform, [{
					key: 'submit',
					value: function submit() {
						this.items.push([{
							'sku': $('#sku-input').val(),
							'qty': 1,
							'skuName': 'Test Product Name #',
							'skuPrice': 45.75,
							'itemSubTotal': 45.85 * 1 }]);

						console.log(this.items);

						$('#notice').hide();
						$('.item').show();

						$('#sku-input').val('').focus();
						$('#qty-input').val('');

						var itemCounter = $('#sku-counter').val();
						itemCounter++;
						$('#sku-counter').val(itemCounter);
					}
				}]);

				return orderform;
			})();

			_export('orderform', orderform);

			KeysValueConverter = (function () {
				function KeysValueConverter() {
					_classCallCheck(this, KeysValueConverter);
				}

				_createClass(KeysValueConverter, [{
					key: 'toView',
					value: function toView(value) {
						return Object.keys(value);
					}
				}]);

				return KeysValueConverter;
			})();

			_export('KeysValueConverter', KeysValueConverter);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBSWEsU0FBUyxFQTJDVCxrQkFBa0I7Ozs7Ozs7O2dDQS9DdkIsUUFBUTs7Ozs7QUFJSCxZQUFTO2FBQVQsU0FBUzsyQkFBVCxTQUFTOztVQUNyQixPQUFPLEdBQUcsWUFBWTtVQUV0QixHQUFHLEdBQUMsRUFBRTtVQUNOLEdBQUcsR0FBQyxFQUFFO1VBQ04sT0FBTyxHQUFDLEVBQUU7VUFDVixRQUFRLEdBQUMsRUFBRTtVQUNYLFlBQVksR0FBQyxFQUFFO1VBQ2YsV0FBVyxHQUFDLEdBQUc7VUFFZixLQUFLLEdBQUcsQ0FBQyxFQU9OLENBQUM7OztpQkFqQlEsU0FBUzs7WUFtQmYsa0JBQUU7QUFDUCxVQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hCLFlBQUssRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFO0FBQzVCLFlBQUssRUFBRSxDQUFDO0FBQ1IsZ0JBQVMsRUFBRSxxQkFBcUI7QUFDaEMsaUJBQVUsRUFBRSxLQUFLO0FBQ2pCLHFCQUFjLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFDekIsQ0FBQyxDQUFDLENBQUM7O0FBRUosYUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRXhCLE9BQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwQixPQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBRWxCLE9BQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEMsT0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFFeEIsVUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFDLGlCQUFXLEVBQUUsQ0FBQTtBQUNiLE9BQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7TUFDbkM7OztXQXZDVyxTQUFTOzs7OztBQTJDVCxxQkFBa0I7YUFBbEIsa0JBQWtCOzJCQUFsQixrQkFBa0I7OztpQkFBbEIsa0JBQWtCOztZQUN2QixnQkFBQyxLQUFLLEVBQUM7QUFDWCxhQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7TUFDM0I7OztXQUhVLGtCQUFrQiIsImZpbGUiOiJvcmRlcmZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIG9yZGVyZm9ybSB7XHJcblx0aGVhZGluZyA9ICdPcmRlciBGb3JtJztcclxuXHJcblx0c2t1PScnO1xyXG5cdHF0eT0nJztcclxuXHRza3VOYW1lPScnO1xyXG5cdHNrdVByaWNlPScnO1xyXG5cdGl0ZW1TdWJUb3RhbD0nJztcclxuXHRpdGVtQ291bnRlcj0nMSc7XHJcblxyXG5cdGl0ZW1zID0gW3tcclxuICAgICAgLy8gJ3NrdSc6JycsXHJcbiAgICAgIC8vIHF0eTonJyxcclxuICAgICAgLy8gc2t1TmFtZTonJyxcclxuICAgICAgLy8gc2t1UHJpY2U6JycsXHJcbiAgICAgIC8vIGl0ZW1TdWJUb3RhbDonJyxcclxuICAgICAgLy8gaXRlbUNvdW50ZXI6ICcwJ1xyXG4gICB9XTtcclxuXHJcblx0c3VibWl0KCl7XHJcblx0XHR0aGlzLml0ZW1zLnB1c2goW3tcclxuXHRcdFx0J3NrdSc6ICQoJyNza3UtaW5wdXQnKS52YWwoKSxcclxuXHRcdFx0J3F0eSc6IDEsIC8vJCgnI3F0eS1pbnB1dCcpLnZhbCgpLFxyXG5cdFx0XHQnc2t1TmFtZSc6ICdUZXN0IFByb2R1Y3QgTmFtZSAjJyxcclxuXHRcdFx0J3NrdVByaWNlJzogNDUuNzUsXHJcblx0XHRcdCdpdGVtU3ViVG90YWwnOiA0NS44NSAqIDEgLy8kKCcjcXR5LWlucHV0JykudmFsKClcclxuXHRcdH1dKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLml0ZW1zKTtcclxuXHJcblx0XHQkKCcjbm90aWNlJykuaGlkZSgpO1xyXG5cdFx0JCgnLml0ZW0nKS5zaG93KCk7XHJcblxyXG5cdFx0JCgnI3NrdS1pbnB1dCcpLnZhbCgnJykuZm9jdXMoKTtcclxuXHRcdCQoJyNxdHktaW5wdXQnKS52YWwoJycpO1xyXG5cclxuXHRcdHZhciBpdGVtQ291bnRlciA9ICQoJyNza3UtY291bnRlcicpLnZhbCgpO1xyXG5cdFx0aXRlbUNvdW50ZXIrK1xyXG5cdFx0JCgnI3NrdS1jb3VudGVyJykudmFsKGl0ZW1Db3VudGVyKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5c1ZhbHVlQ29udmVydGVyIHtcclxuICB0b1ZpZXcodmFsdWUpe1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
