System.register(['bootstrap'], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia';
            config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }, { route: 'orderform', name: 'orderform', moduleId: 'orderform', nav: true, title: 'Order Form' }, { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' }, { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFFYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUcsSUFBSSxFQUFFLFNBQVMsRUFBTyxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxFQUN0RyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQU0sSUFBSSxFQUFFLFdBQVcsRUFBSyxRQUFRLEVBQUUsV0FBVyxFQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFlBQVksRUFBRSxFQUN6RyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxFQUMzRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUcsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxDQUM1RyxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUFYVSxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcil7XG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEnO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCd3ZWxjb21lJ10sICBuYW1lOiAnd2VsY29tZScsICAgICAgbW9kdWxlSWQ6ICd3ZWxjb21lJywgICAgICBuYXY6IHRydWUsIHRpdGxlOidXZWxjb21lJyB9LFxuICAgICAgeyByb3V0ZTogJ29yZGVyZm9ybScsICAgICBuYW1lOiAnb3JkZXJmb3JtJywgICAgbW9kdWxlSWQ6ICdvcmRlcmZvcm0nLCAgICBuYXY6IHRydWUsIHRpdGxlOidPcmRlciBGb3JtJyB9LFxuICAgICAgeyByb3V0ZTogJ3VzZXJzJywgICAgICAgICBuYW1lOiAndXNlcnMnLCAgICAgICAgbW9kdWxlSWQ6ICd1c2VycycsICAgICAgICBuYXY6IHRydWUsIHRpdGxlOidHaXRodWIgVXNlcnMnIH0sXG4gICAgICB7IHJvdXRlOiAnY2hpbGQtcm91dGVyJywgIG5hbWU6ICdjaGlsZC1yb3V0ZXInLCBtb2R1bGVJZDogJ2NoaWxkLXJvdXRlcicsIG5hdjogdHJ1ZSwgdGl0bGU6J0NoaWxkIFJvdXRlcicgfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cblxuXG5cbi8vIGV4cG9ydCBjbGFzcyBXZWxjb21le1xuLy8gXHRoZWFkaW5nID0gJ1dlbGNvbWUgdG8gdGhlIEF1cmVsaWEgTmF2aWdhdGlvbiBBcHAhJztcbi8vIFx0Zmlyc3ROYW1lID0gJ0phc29uJztcbi8vIFx0bGFzdE5hbWUgPSAnQmFnd2VsbCc7XG5cbi8vIFx0Z2V0IGZ1bGxOYW1lKCl7XG4vLyBcdFx0cmV0dXJuIGAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9YDtcbi8vIFx0fVxuXG4vLyBcdHN1Ym1pdCgpe1xuLy8gXHRcdGFsZXJ0KGBXZWxjb21lLCAke3RoaXMuZnVsbE5hbWV9IWApO1xuLy8gXHR9XG4vLyB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
