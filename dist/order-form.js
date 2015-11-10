System.register([], function (_export) {
	"use strict";

	var orderForm;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	return {
		setters: [],
		execute: function () {
			orderForm = (function () {
				var _instanceInitializers = {};

				function orderForm() {
					_classCallCheck(this, orderForm);

					_defineDecoratedPropertyDescriptor(this, "router", _instanceInitializers);
				}

				_createDecoratedClass(orderForm, [{
					key: "router",
					decorators: [bindable],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}], null, _instanceInitializers);

				return orderForm;
			})();

			_export("orderForm", orderForm);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0tBRWEsU0FBUzs7Ozs7Ozs7Ozs7QUFBVCxZQUFTOzs7YUFBVCxTQUFTOzJCQUFULFNBQVM7Ozs7OzBCQUFULFNBQVM7O2tCQUNwQixRQUFROzthQUFVLElBQUk7Ozs7O1dBRFgsU0FBUyIsImZpbGUiOiJvcmRlci1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5leHBvcnQgY2xhc3Mgb3JkZXJGb3JtIHtcclxuXHRAYmluZGFibGUgcm91dGVyID0gbnVsbDtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
