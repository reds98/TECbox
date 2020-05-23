function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-view-client-view-module"], {
  /***/
  "./src/app/client-view/client-view-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/client-view/client-view-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ClientViewRoutingModule */

  /***/
  function srcAppClientViewClientViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientViewRoutingModule", function () {
      return ClientViewRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _client_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./client-view.component */
    "./src/app/client-view/client-view.component.ts");

    var routes = [{
      path: '',
      component: _client_view_component__WEBPACK_IMPORTED_MODULE_2__["ClientViewComponent"]
    }];

    var ClientViewRoutingModule = function ClientViewRoutingModule() {
      _classCallCheck(this, ClientViewRoutingModule);
    };

    ClientViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ClientViewRoutingModule
    });
    ClientViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ClientViewRoutingModule_Factory(t) {
        return new (t || ClientViewRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientViewRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/client-view/client-view.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/client-view/client-view.component.ts ***!
    \******************************************************/

  /*! exports provided: ClientViewComponent */

  /***/
  function srcAppClientViewClientViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientViewComponent", function () {
      return ClientViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_client_view_client_view_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/client-view/client-view.service */
    "./src/app/client-view/client-view.service.ts");
    /* harmony import */


    var _login_view_login_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login-view/login-view.service */
    "./src/app/login-view/login-view.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../table/table.component */
    "./src/app/table/table.component.ts");

    var ClientViewComponent = /*#__PURE__*/function () {
      function ClientViewComponent(clientService, auth, router) {
        _classCallCheck(this, ClientViewComponent);

        this.clientService = clientService;
        this.auth = auth;
        this.router = router; // Attributes

        this.columnsParent = ["Cedula", "Nombre", "Correo Electrónico", "Casillero", "Teléfono", "Celular", "Dirección de Entrega", "Usuario"];
        this.dataParent = [];
      } // Assigns the data received to the dataParent attr


      _createClass(ClientViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "salir",
        value: function salir() {
          this.auth.logout();
          window.location.reload();
          this.router.navigateByUrl("/client-view");
        } // Gets data from the server and sets localStorage items

      }, {
        key: "getData",
        value: function getData() {
          var _this = this;

          this.clientService.getClients().subscribe(function (data) {
            var oldData = localStorage.getItem('tableData');
            _this.dataParent = data;
            localStorage.setItem('tableData', JSON.stringify(data));
            localStorage.setItem('ClientData', JSON.stringify(data));

            if (oldData != localStorage.getItem('tableData')) {
              location.reload();
            }
          });
        }
      }]);

      return ClientViewComponent;
    }();

    ClientViewComponent.ɵfac = function ClientViewComponent_Factory(t) {
      return new (t || ClientViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_client_view_client_view_service__WEBPACK_IMPORTED_MODULE_1__["ClientViewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_view_login_view_service__WEBPACK_IMPORTED_MODULE_2__["LoginViewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ClientViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientViewComponent,
      selectors: [["app-client-view"]],
      decls: 8,
      vars: 2,
      consts: [["type", "button", 1, "btn", "btn-danger", 3, "click"], [3, "data", "columns"], ["cellerTable", ""]],
      template: function ClientViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tabla de informaci\xF3n de Clientes\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientViewComponent_Template_button_click_2_listener() {
            return ctx.salir();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-table", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.dataParent)("columns", ctx.columnsParent);
        }
      },
      directives: [_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"]],
      styles: [".myBtn[_ngcontent-%COMP%]{\n    background-color: #B8D3D9;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n.myBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n\n.editBtn[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n    background-color: #3B565B;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n.editBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n\n.deleteBtn[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n    background-color: #931621;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n.deleteBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50LXZpZXcvY2xpZW50LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQzs7QUFFRDtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50LXZpZXcvY2xpZW50LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gU3R5bGVzc2hlZXQgZm9yIGNsaWVudC12aWV3IGNvbXBvbmVudFxuKi9cblxuLm15QnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCOEQzRDk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0I4RDNEOTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4ubXlCdG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTQwNTY7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5lZGl0QnRue1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjU2NUI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0I4RDNEOTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4uZWRpdEJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NDA1NjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmRlbGV0ZUJ0bntcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTMxNjIxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCOEQzRDk7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLmRlbGV0ZUJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NDA1NjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-view',
          templateUrl: './client-view.component.html',
          styleUrls: ['./client-view.component.css']
        }]
      }], function () {
        return [{
          type: src_app_client_view_client_view_service__WEBPACK_IMPORTED_MODULE_1__["ClientViewService"]
        }, {
          type: _login_view_login_view_service__WEBPACK_IMPORTED_MODULE_2__["LoginViewService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client-view/client-view.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/client-view/client-view.module.ts ***!
    \***************************************************/

  /*! exports provided: ClientViewModule */

  /***/
  function srcAppClientViewClientViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientViewModule", function () {
      return ClientViewModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _client_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./client-view-routing.module */
    "./src/app/client-view/client-view-routing.module.ts");
    /* harmony import */


    var _client_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./client-view.component */
    "./src/app/client-view/client-view.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ClientViewModule = function ClientViewModule() {
      _classCallCheck(this, ClientViewModule);
    };

    ClientViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ClientViewModule
    });
    ClientViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ClientViewModule_Factory(t) {
        return new (t || ClientViewModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _client_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientViewRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientViewModule, {
        declarations: [_client_view_component__WEBPACK_IMPORTED_MODULE_3__["ClientViewComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _client_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientViewRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_client_view_component__WEBPACK_IMPORTED_MODULE_3__["ClientViewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _client_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientViewRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/client-view/client-view.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/client-view/client-view.service.ts ***!
    \****************************************************/

  /*! exports provided: ClientViewService */

  /***/
  function srcAppClientViewClientViewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientViewService", function () {
      return ClientViewService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ClientViewService = /*#__PURE__*/function () {
      function ClientViewService(http) {
        _classCallCheck(this, ClientViewService);

        this.http = http; //private url: string = "http://localhost:53572/api/clients";

        this.url = window.location.origin;
      } // Assigns a type to every observable that is received and returns this typified observable.


      _createClass(ClientViewService, [{
        key: "getClients",
        value: function getClients() {
          var observable;
          observable = this.httpGet();
          return observable;
        } // Calls http.get() with the corresponding resource url.

      }, {
        key: "httpGet",
        value: function httpGet() {
          return this.http.get(this.url + "/api/clients");
        }
      }]);

      return ClientViewService;
    }();

    ClientViewService.ɵfac = function ClientViewService_Factory(t) {
      return new (t || ClientViewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ClientViewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClientViewService,
      factory: ClientViewService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientViewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=client-view-client-view-module-es5.js.map