(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-view-home-view-module"],{

/***/ "./src/app/home-view/home-view-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/home-view/home-view-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HomeViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewRoutingModule", function() { return HomeViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-view.component */ "./src/app/home-view/home-view.component.ts");





const routes = [{ path: '', component: _home_view_component__WEBPACK_IMPORTED_MODULE_2__["HomeViewComponent"] }];
class HomeViewRoutingModule {
}
HomeViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeViewRoutingModule });
HomeViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeViewRoutingModule_Factory(t) { return new (t || HomeViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home-view/home-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-view/home-view.component.ts ***!
  \**************************************************/
/*! exports provided: HomeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewComponent", function() { return HomeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_home_view_home_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/home-view/home-view.service */ "./src/app/home-view/home-view.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");







function HomeViewComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeViewComponent_ul_6_li_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const product_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.addToCart([product_r4.purchase_price, product_r4.discount, product_r4.tax], product_r4.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Descripci\u00F3n: ", product_r4.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Precio: ", product_r4.purchase_price, "$ + ", product_r4.tax * 100, "% i.v.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Descuento: ", product_r4.discount * 100, "%");
} }
function HomeViewComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeViewComponent_ul_6_li_1_Template, 13, 6, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.products, ctx_r0.search));
} }
function HomeViewComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r7);
} }
function HomeViewComponent_p_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Debe ingresar un n\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeViewComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.isNumber = true;
        this.index = 0;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            TrackingID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.objectValues = Object.values;
        this.objectKeys = Object.keys;
    }
    // Assigns the data received to the dataParent attr
    ngOnInit() {
        this.getData("Products", 'ProductsData');
        this.products = JSON.parse(localStorage.getItem('ProductsData'));
        this.getData("Packages", 'PackageData');
        this.packageData = JSON.parse(localStorage.getItem('PackageData'));
        this.getData("clients", 'ClientData');
        this.clientData = JSON.parse(localStorage.getItem('ClientData'));
        console.log(this.objectValues(this.clientData[0])[2]);
        this.costDiscTaxArray = [];
        this.productArray = [];
        this.totalCost = 0;
        this.currentUser = (localStorage.getItem('email'));
    }
    // Gets data from server
    getData(type, dataType) {
        this.homeService.getItems(type)
            .subscribe(data => {
            let oldData = localStorage.getItem(dataType);
            localStorage.setItem(dataType, JSON.stringify(data));
            if (oldData != localStorage.getItem(dataType)) {
                location.reload();
            }
        });
    }
    // VErifies that the consult for the packages state is being done by current user on his packages
    checkCurrentUser(userEmail) {
        var bool = false;
        console.log("UserEmail: " + userEmail);
        for (var i = 0; i < this.packageData.length; i++) {
            if (this.currentUser == this.objectValues(this.clientData[i])[2]) {
                console.log("Email: " + this.objectValues(this.clientData[i])[2]);
                this.index = i;
                this.consultPackage();
                break;
            }
            else {
                bool = false;
                this.state = "Usted no puede acceder a esta información.";
            }
        }
        return bool;
    }
    // Checks if the number provided matches an existing package and returns it's current state
    consultPackage() {
        var value = this.userForm.get('TrackingID').value;
        if (!isNaN(value)) {
            this.isNumber = true;
            if (value == this.objectValues(this.clientData[this.index])[8]) {
                this.state = "El paquete se encuentra: " + this.objectValues(this.packageData[this.index])[4];
            }
            else {
                this.state = "No se ha encontrado un paquete en su cuenta con el número de traqueo cosultado.";
            }
        }
        else {
            this.isNumber = false;
        }
    }
    // Receives a list of the products cost, discount and tax, respectively as list1 and the product's name as prod
    addToCart(list1, prod) {
        this.costDiscTaxArray.push(list1);
        this.productArray.push(prod);
        console.log(this.costDiscTaxArray);
    }
    // Calculates the total cost of the purchase
    calcPurchaseTotal() {
        var costWDiscount = 0;
        var costWTax = 0;
        var array = this.costDiscTaxArray;
        let i = 0;
        this.totalCost = 0;
        while (i < array.length) {
            if (array[i][1] != 0 && array[i][2] != 0) {
                costWDiscount += (array[i][0] * (1 - array[i][1]));
                costWTax += (costWDiscount + costWDiscount * array[i][2]);
                this.totalCost += costWTax;
                costWDiscount = 0;
                costWTax = 0;
                i++;
            }
        }
    }
}
HomeViewComponent.ɵfac = function HomeViewComponent_Factory(t) { return new (t || HomeViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_home_view_home_view_service__WEBPACK_IMPORTED_MODULE_2__["HomeViewService"])); };
HomeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeViewComponent, selectors: [["app-home-view"]], decls: 44, vars: 7, consts: [[1, "input-icons", "myContainer"], ["align", "right", "type", "button", "data-toggle", "modal", "data-target", "#cartModal", 1, "btn", "buyBtn", 3, "click"], ["align", "right", 1, "fa", "fa-search", "icon"], ["type", "text", "name", "search", "placeholder", "Buscar...", "autocomplete", "off", 1, "form-control", "myBar", 2, "font-size", "20px", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["id", "confirmModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "myModal"], [1, "modal-content"], [1, "modal-body"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-footer", "mb-3"], ["aria-hidden", "true", "type", "button", "data-dismiss", "modal", 1, "btn", "buyBtn2"], ["id", "cartModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["class", "modal-body", 4, "ngFor", "ngForOf"], [1, "myLabel"], [1, "container", "ml-2"], [2, "font-size", "20px"], [3, "formGroup"], [1, "form-group"], ["formControlName", "TrackingID", "placeholder", "123456", "type", "text"], [1, "btn", "buyBtn2", "ml-1", 3, "click"], ["style", "color:red", 4, "ngIf"], [2, "color", "#194056"], [4, "ngFor", "ngForOf"], [1, "name"], [1, "description"], [1, "size", 3, "src"], ["type", "button", "data-toggle", "modal", "data-target", "#confirmModal", 1, "btn", "myBtn", "ml-2", 3, "click"], [1, "fa", "fa-shopping-cart", "fa-2x", "myIcon"], [2, "color", "red"]], template: function HomeViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeViewComponent_Template_button_click_1_listener() { return ctx.calcPurchaseTotal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Comprar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeViewComponent_Template_input_ngModelChange_5_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeViewComponent_ul_6_Template, 3, 4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A1Agregado al carrito!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A1Contin\u00FAe comprando con nosotros!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lista de compras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeViewComponent_div_25_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Digite el n\u00FAmero de traqueo del paquete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeViewComponent_Template_button_click_39_listener() { return ctx.consultPackage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HomeViewComponent_p_41_Template, 2, 0, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total: $ ", ctx.totalCost, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipe"]], styles: ["ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-wrap: wrap;\n}\nli[_ngcontent-%COMP%] {\n    background: rgb(230, 229, 229);\n    border-radius: 5px;\n    padding: 1em;\n    margin-right: 10px;\n    width: 20%;\n    height: auto;\n    margin-bottom: 1em;\n    display: flex;\n    flex-direction: column;\n}\np[_ngcontent-%COMP%] {\n    margin-left: 7%;\n    padding-top: 3px;\n    font-size: .8rem;\n    flex-grow: 1;\n}\np.name[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\np.description[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 0.9rem;\n    flex-grow: 1;\n}\n.size[_ngcontent-%COMP%]{\n    max-width: 100%;\n    height: auto;\n}\n.myBar[_ngcontent-%COMP%]{\n    width: 35%;\n    height: 35px;\n    margin-bottom: 20px;\n    text-align: justify;\n}\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \n    position: absolute; \n}\n.input-icons[_ngcontent-%COMP%] { \n    width: 100%; \n    margin-bottom: 10px;\n}\n.icon[_ngcontent-%COMP%] { \n    padding: 10px; \n    min-width: 40px;\n    margin-left: 30%;\n}\n.myIcon[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    top: 50%;\n    left: 30%;\n    right: 25%;\n    height: 50%;\n    transform: translate(-50%, -50%);\n}\n.myContainer[_ngcontent-%COMP%]{\n    position: center;\n    padding: 15px 50px 50px 50px;\n    margin-left: 8%;\n}\n.myModal[_ngcontent-%COMP%]{\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n.myLabel[_ngcontent-%COMP%]{\n    font-size: 0.9rem;\n    padding: 5px 70% 5px 5px;\n}\n\n.buyBtn[_ngcontent-%COMP%]{\n    margin: 15px 50px -55px 76%;\n    color: #FFFFFF;\n    background-color: rgb(72, 103, 109);\n    border: 1px solid rgb(72, 103, 109);\n}\n.buyBtn[_ngcontent-%COMP%]:hover {\n    background-color: #B8D3D9;\n    color: rgb(72, 103, 109);\n}\n.buyBtn2[_ngcontent-%COMP%]{\n    margin-top: 5px;\n    color: #FFFFFF;\n    background-color: rgb(72, 103, 109);\n    border: 1px solid rgb(72, 103, 109);\n}\n.buyBtn2[_ngcontent-%COMP%]:hover {\n    background-color: #B8D3D9;\n    color: rgb(72, 103, 109);\n}\n.myBtn[_ngcontent-%COMP%]{\n    margin-top: -50px;\n    width: 50px;\n    height: 50px;\n    position: relative;\n    float: right;\n    background-color: #B8D3D9;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.myBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n.editBtn[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n    background-color: #3B565B;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.editBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n.deleteBtn[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n    background-color: #931621;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.deleteBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS12aWV3L2hvbWUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDO0FBQ0Q7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUdBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBR0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7QUFFQTs7Q0FFQztBQUNEO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsbUNBQW1DO0FBQ3ZDO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxtQ0FBbUM7QUFDdkM7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS12aWV3L2hvbWUtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBTdHlsZXNzaGVldCBmb3IgaG9tZS12aWV3IGNvbXBvbmVudFxuKi9cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cblxubGkge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMzAsIDIyOSwgMjI5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5wIHtcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxucC5uYW1lIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5wLmRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLnNpemV7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuXG4ubXlCYXJ7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uaW5wdXQtaWNvbnMgaSB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG59IFxuXG4uaW5wdXQtaWNvbnMgeyBcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0gXG5cbi5pY29uIHsgXG4gICAgcGFkZGluZzogMTBweDsgXG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG59IFxuXG4ubXlJY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDMwJTtcbiAgICByaWdodDogMjUlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSBcblxuLm15Q29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweCA1MHB4IDUwcHggNTBweDtcbiAgICBtYXJnaW4tbGVmdDogOCU7XG59XG5cbi5teU1vZGFse1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5teUxhYmVse1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIHBhZGRpbmc6IDVweCA3MCUgNXB4IDVweDtcbn1cblxuLypcbiBCdXR0b25zXG4qL1xuLmJ1eUJ0bntcbiAgICBtYXJnaW46IDE1cHggNTBweCAtNTVweCA3NiU7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcyLCAxMDMsIDEwOSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDcyLCAxMDMsIDEwOSk7XG59XG5cbi5idXlCdG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCOEQzRDk7XG4gICAgY29sb3I6IHJnYig3MiwgMTAzLCAxMDkpO1xufVxuXG4uYnV5QnRuMntcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcyLCAxMDMsIDEwOSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDcyLCAxMDMsIDEwOSk7XG59XG5cbi5idXlCdG4yOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjhEM0Q5O1xuICAgIGNvbG9yOiByZ2IoNzIsIDEwMywgMTA5KTtcbn1cblxuLm15QnRue1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCOEQzRDk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0I4RDNEOTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4ubXlCdG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTQwNTY7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5lZGl0QnRue1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjU2NUI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0I4RDNEOTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4uZWRpdEJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NDA1NjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmRlbGV0ZUJ0bntcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTMxNjIxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCOEQzRDk7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLmRlbGV0ZUJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NDA1NjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-view',
                templateUrl: './home-view.component.html',
                styleUrls: ['./home-view.component.css']
            }]
    }], function () { return [{ type: src_app_home_view_home_view_service__WEBPACK_IMPORTED_MODULE_2__["HomeViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home-view/home-view.module.ts":
/*!***********************************************!*\
  !*** ./src/app/home-view/home-view.module.ts ***!
  \***********************************************/
/*! exports provided: HomeViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewModule", function() { return HomeViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-view-routing.module */ "./src/app/home-view/home-view-routing.module.ts");
/* harmony import */ var _home_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-view.component */ "./src/app/home-view/home-view.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");





// search module


class HomeViewModule {
}
HomeViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeViewModule });
HomeViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeViewModule_Factory(t) { return new (t || HomeViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeViewRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeViewModule, { declarations: [_home_view_component__WEBPACK_IMPORTED_MODULE_3__["HomeViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeViewRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_view_component__WEBPACK_IMPORTED_MODULE_3__["HomeViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeViewRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home-view/home-view.service.ts":
/*!************************************************!*\
  !*** ./src/app/home-view/home-view.service.ts ***!
  \************************************************/
/*! exports provided: HomeViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewService", function() { return HomeViewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class HomeViewService {
    constructor(http) {
        this.http = http;
        //private url: string = "http://localhost:53572/api/";
        this.url = window.location.origin + "/api/";
    }
    // Assigns a type to every observable that is received and returns this typified observable.
    getItems(type) {
        let observable;
        observable = this.httpGet(type);
        return observable;
    }
    // Calls http.get() with the corresponding resource url.
    httpGet(type) {
        return this.http.get(this.url + type);
    }
}
HomeViewService.ɵfac = function HomeViewService_Factory(t) { return new (t || HomeViewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HomeViewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeViewService, factory: HomeViewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeViewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=home-view-home-view-module-es2015.js.map