(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-view-admin-view-module"],{

/***/ "./src/app/admin-view/admin-view-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin-view/admin-view-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewRoutingModule", function() { return AdminViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-view.component */ "./src/app/admin-view/admin-view.component.ts");





const routes = [{ path: '', component: _admin_view_component__WEBPACK_IMPORTED_MODULE_2__["AdminViewComponent"] }];
class AdminViewRoutingModule {
}
AdminViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminViewRoutingModule });
AdminViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminViewRoutingModule_Factory(t) { return new (t || AdminViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin-view/admin-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-view/admin-view.component.ts ***!
  \****************************************************/
/*! exports provided: AdminViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewComponent", function() { return AdminViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_admin_view_admin_view_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-view/admin-view.service */ "./src/app/admin-view/admin-view.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AdminViewComponent_ul_13_li_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attribute_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attribute_r5);
} }
function AdminViewComponent_ul_13_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminViewComponent_ul_13_li_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.selectItem(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminViewComponent_ul_13_li_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.deleteItem(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminViewComponent_ul_13_li_1_div_6_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.objectValues(item_r3));
} }
function AdminViewComponent_ul_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminViewComponent_ul_13_li_1_Template, 7, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminViewComponent_ul_13_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.newItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function AdminViewComponent_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attr_r12[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", attr_r12[1]);
} }
function AdminViewComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminViewComponent_div_14_div_3_Template, 4, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminViewComponent_div_14_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminViewComponent_div_14_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.selectedItem);
} }
class AdminViewComponent {
    constructor(adminService) {
        this.adminService = adminService;
        this.data = {
            'roles': {},
            'offices': {},
            'workers': {},
            'sellers': {},
            'products': {},
            'routes': {},
            'app_movil_auth': { 'authorized': 'false' },
            'app_movil_packages': {}
        };
        this.selectedItem = null;
        this.title = 'Seleccione una vista';
        this.objectValues = Object.values;
        this.objectKeys = Object.keys;
    }
    // Gets data from the server and sets localStorage items
    getData(type, dataType) {
        this.selectedItem = null;
        this.items = null;
        this.title = 'Cargando';
        console.log(type);
        console.log(window.location.origin);
        this.adminService.getItems(type)
            .subscribe(data => {
            let oldData = localStorage.getItem(dataType);
            localStorage.setItem(dataType, JSON.stringify(data));
            if (oldData != localStorage.getItem(dataType)) {
                location.reload();
            }
        });
        this.setData(type);
    }
    // Sets the information to each item
    setData(type) {
        this.data.roles = JSON.parse(localStorage.getItem('RolesData'));
        this.data.offices = JSON.parse(localStorage.getItem('OfficesData'));
        this.data.workers = JSON.parse(localStorage.getItem('WorkersData'));
        this.data.sellers = JSON.parse(localStorage.getItem('SellersData'));
        this.data.products = JSON.parse(localStorage.getItem('ProductsData'));
        this.data.routes = JSON.parse(localStorage.getItem('RoutesData'));
        this.items = this.data[type];
    }
    // Adds item
    newItem() {
        this.selectedItem = Object.entries(this.items[0]).map(item => {
            return [item[0], ''];
        });
    }
    // Deletes item
    deleteItem(selectedItem) {
        this.items = this.items.filter(item => selectedItem !== item);
        this.selectedItem = null;
    }
    // Selects item
    selectItem(selectedItem) {
        this.selectedItem = Object.entries(selectedItem);
    }
    // Deselects item
    onConfirm() {
        this.selectedItem = null;
    }
    ngOnInit() {
    }
}
AdminViewComponent.ɵfac = function AdminViewComponent_Factory(t) { return new (t || AdminViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_view_admin_view_service__WEBPACK_IMPORTED_MODULE_1__["AdminViewService"])); };
AdminViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminViewComponent, selectors: [["app-admin-view"]], decls: 15, vars: 2, consts: [["type", "button", 1, "btn", "myBtn", "ml-1", 3, "click"], [1, "container"], ["class", "list-group", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["type", "button", 1, "btn", "myBtn", 3, "click"], [1, "fas", "fa-plus", "ml-1"], ["type", "button", 1, "btn", "editBtn", "ml-1", 3, "click"], [1, "fas", "fa-edit"], ["type", "button", 1, "btn", "deleteBtn", "ml-1", 3, "click"], [1, "fas", "fa-trash-alt"], [4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "fas", "fa-check"], ["type", "button", 1, "btn", "deleteBtn", 3, "click"], [1, "fas", "fa-window-close"], [1, "form-group"], ["for", "item1"], ["type", "text", "id", "item1", 1, "form-control", 3, "value"]], template: function AdminViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminViewComponent_Template_button_click_0_listener() { return ctx.getData("roles", "RolesData"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gesti\u00F3n de roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminViewComponent_Template_button_click_2_listener() { return ctx.getData("offices", "OfficesData"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gesti\u00F3n de sucursales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminViewComponent_Template_button_click_4_listener() { return ctx.getData("workers", "WorkersData"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Gesti\u00F3n de trabajadores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminViewComponent_Template_button_click_6_listener() { return ctx.getData("sellers", "SellersData"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Gesti\u00F3n de vendedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminViewComponent_Template_button_click_8_listener() { return ctx.getData("products", "ProductsData"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Gesti\u00F3n de productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminViewComponent_Template_button_click_10_listener() { return ctx.getData("routes", "RoutesData"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gesti\u00F3n de rutas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminViewComponent_ul_13_Template, 6, 1, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminViewComponent_div_14_Template, 8, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".myBtn[_ngcontent-%COMP%]{\n    background-color: #B8D3D9;\n    border: 1px solid #B8D3D9;\n    padding: 3px 15px 3px 15px;\n    margin-top: 5px;\n    margin-bottom: 15px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.myBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n.editBtn[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n    background-color: #3B565B;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.editBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n.deleteBtn[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n    background-color: #931621;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.deleteBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tdmlldy9hZG1pbi12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7QUFDRDtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMkNBQTJDO0FBQy9DO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMkNBQTJDO0FBQy9DO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMkNBQTJDO0FBQy9DO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXZpZXcvYWRtaW4tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBTdHlsZXNzaGVldCBmb3IgYWRtaW4tdmlldyBjb21wb25lbnRcbiovXG4ubXlCdG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I4RDNEOTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQjhEM0Q5O1xuICAgIHBhZGRpbmc6IDNweCAxNXB4IDNweCAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi5teUJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NDA1NjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmVkaXRCdG57XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNCNTY1QjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQjhEM0Q5O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi5lZGl0QnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0MDU2O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZGVsZXRlQnRue1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MzE2MjE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0I4RDNEOTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4uZGVsZXRlQnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0MDU2O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-view',
                templateUrl: './admin-view.component.html',
                styleUrls: ['./admin-view.component.css']
            }]
    }], function () { return [{ type: src_app_admin_view_admin_view_service__WEBPACK_IMPORTED_MODULE_1__["AdminViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin-view/admin-view.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin-view/admin-view.module.ts ***!
  \*************************************************/
/*! exports provided: AdminViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewModule", function() { return AdminViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _admin_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-view-routing.module */ "./src/app/admin-view/admin-view-routing.module.ts");
/* harmony import */ var _admin_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-view.component */ "./src/app/admin-view/admin-view.component.ts");





class AdminViewModule {
}
AdminViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminViewModule });
AdminViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminViewModule_Factory(t) { return new (t || AdminViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _admin_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminViewRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminViewModule, { declarations: [_admin_view_component__WEBPACK_IMPORTED_MODULE_3__["AdminViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _admin_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminViewRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_admin_view_component__WEBPACK_IMPORTED_MODULE_3__["AdminViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _admin_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminViewRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin-view/admin-view.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin-view/admin-view.service.ts ***!
  \**************************************************/
/*! exports provided: AdminViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewService", function() { return AdminViewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AdminViewService {
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
        console.log(this.url + type);
        return this.http.get(this.url + type);
    }
}
AdminViewService.ɵfac = function AdminViewService_Factory(t) { return new (t || AdminViewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdminViewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminViewService, factory: AdminViewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminViewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-view-admin-view-module-es2015.js.map