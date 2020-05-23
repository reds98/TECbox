(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cellar-view-cellar-view-module"],{

/***/ "./src/app/cellar-view/cellar-view-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/cellar-view/cellar-view-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CellarViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellarViewRoutingModule", function() { return CellarViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cellar_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cellar-view.component */ "./src/app/cellar-view/cellar-view.component.ts");





const routes = [{ path: '', component: _cellar_view_component__WEBPACK_IMPORTED_MODULE_2__["CellarViewComponent"] }];
class CellarViewRoutingModule {
}
CellarViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CellarViewRoutingModule });
CellarViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CellarViewRoutingModule_Factory(t) { return new (t || CellarViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CellarViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellarViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cellar-view/cellar-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cellar-view/cellar-view.component.ts ***!
  \******************************************************/
/*! exports provided: CellarViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellarViewComponent", function() { return CellarViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_cellar_view_cellar_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cellar-view/cellar-view.service */ "./src/app/cellar-view/cellar-view.service.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function CellarViewComponent_div_8_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Debe ingresar un n\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CellarViewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Digite el n\u00FAmero de traqueo del paquete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CellarViewComponent_div_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.consultPackage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Buscar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CellarViewComponent_div_8_p_8_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.state);
} }
class CellarViewComponent {
    constructor(cellarService) {
        this.cellarService = cellarService;
        // Attributes
        this.columnsParent = ["ID de rastreo", "Cliente", "Descripción", "Fecha de Entrega", "Estado", "Distrito", "Ruta", "Descuento", "Impuesto"];
        this.consultationRequest = false;
        this.isNumber = true;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            TrackingID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.objectValues = Object.values;
        this.objectKeys = Object.keys;
    }
    // Assigns the data received to the dataParent attr
    ngOnInit() {
        this.cellarService.getPackage()
            .subscribe(data => this.dataParent = data);
        console.log(this.dataParent);
    }
    // Verifies that the client is consulting a package
    isConsulting() {
        this.consultationRequest = true;
    }
    // Checks if the number provided matches an existing package and returns it's current state
    consultPackage() {
        var value = this.userForm.get('TrackingID').value;
        if (!isNaN(value)) {
            this.isNumber = true;
            for (var i = 0; i < this.dataParent.length; i++) {
                if (value == this.objectValues(this.dataParent[i])[0]) {
                    this.state = "El paquete se encuentra: " + this.objectValues(this.dataParent[i])[4];
                    break;
                }
                else {
                    this.state = "No se ha encontrado un paquete con el número de traqueo cosultado.";
                }
            }
        }
        else {
            this.isNumber = false;
        }
    }
}
CellarViewComponent.ɵfac = function CellarViewComponent_Factory(t) { return new (t || CellarViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cellar_view_cellar_view_service__WEBPACK_IMPORTED_MODULE_2__["CellarViewService"])); };
CellarViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CellarViewComponent, selectors: [["app-cellar-view"]], decls: 9, vars: 3, consts: [[3, "data", "columns"], ["cellerTable", ""], ["type", "button", 1, "btn", "myBtn", "ml-2", "pd-2", 3, "click"], ["class", "container ml-2", 4, "ngIf"], [1, "container", "ml-2"], [2, "font-size", "20px"], [3, "formGroup"], [1, "form-group"], ["formControlName", "TrackingID", "placeholder", "123456", "type", "text"], [1, "btn", "myBtn", "ml-1", 3, "click"], ["style", "color:red", 4, "ngIf"], [2, "color", "#194056"], [2, "color", "red"]], template: function CellarViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tabla de Caracter\u00EDsticas de Paquetes\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CellarViewComponent_Template_button_click_6_listener() { return ctx.isConsulting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Consultar paquete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CellarViewComponent_div_8_Template, 11, 3, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.dataParent)("columns", ctx.columnsParent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.consultationRequest);
    } }, directives: [_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".myBtn[_ngcontent-%COMP%]{\n    background-color: #B8D3D9;\n    border: 1px solid #B8D3D9;\n    margin: 20px 0;\n    padding: 3px 15px 3px 15px;\n    margin-top: 15px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.myBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n.editBtn[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n    background-color: #3B565B;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.editBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n.deleteBtn[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n    background-color: #931621;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.deleteBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VsbGFyLXZpZXcvY2VsbGFyLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQztBQUNEO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQiwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2VsbGFyLXZpZXcvY2VsbGFyLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gU3R5bGVzc2hlZXQgZm9yIGNlbGxlci12aWV3IGNvbXBvbmVudFxuKi9cbi5teUJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjhEM0Q5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCOEQzRDk7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogM3B4IDE1cHggM3B4IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4ubXlCdG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTQwNTY7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5lZGl0QnRue1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjU2NUI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0I4RDNEOTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4uZWRpdEJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NDA1NjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmRlbGV0ZUJ0bntcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTMxNjIxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCOEQzRDk7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLmRlbGV0ZUJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NDA1NjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellarViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cellar-view',
                templateUrl: './cellar-view.component.html',
                styleUrls: ['./cellar-view.component.css']
            }]
    }], function () { return [{ type: src_app_cellar_view_cellar_view_service__WEBPACK_IMPORTED_MODULE_2__["CellarViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cellar-view/cellar-view.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cellar-view/cellar-view.module.ts ***!
  \***************************************************/
/*! exports provided: CellarViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellarViewModule", function() { return CellarViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _cellar_view_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cellar-view-routing.module */ "./src/app/cellar-view/cellar-view-routing.module.ts");
/* harmony import */ var _cellar_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cellar-view.component */ "./src/app/cellar-view/cellar-view.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







class CellarViewModule {
}
CellarViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CellarViewModule });
CellarViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CellarViewModule_Factory(t) { return new (t || CellarViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _cellar_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["CellarViewRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CellarViewModule, { declarations: [_cellar_view_component__WEBPACK_IMPORTED_MODULE_4__["CellarViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _cellar_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["CellarViewRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellarViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _cellar_view_component__WEBPACK_IMPORTED_MODULE_4__["CellarViewComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _cellar_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["CellarViewRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cellar-view/cellar-view.service.ts":
/*!****************************************************!*\
  !*** ./src/app/cellar-view/cellar-view.service.ts ***!
  \****************************************************/
/*! exports provided: CellarViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellarViewService", function() { return CellarViewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CellarViewService {
    constructor(http) {
        this.http = http;
        //private url: string = "http://localhost:53572/api/Packages";
        this.url = window.location.origin + "/api/Packages";
    }
    // Gets package json from server
    getPackage() {
        return this.http.get(this.url);
    }
}
CellarViewService.ɵfac = function CellarViewService_Factory(t) { return new (t || CellarViewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CellarViewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CellarViewService, factory: CellarViewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellarViewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=cellar-view-cellar-view-module-es2015.js.map