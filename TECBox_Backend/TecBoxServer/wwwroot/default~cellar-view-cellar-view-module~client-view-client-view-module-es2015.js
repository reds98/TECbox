(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cellar-view-cellar-view-module~client-view-client-view-module"],{

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
// This module is to allow using a shared component in multiple different modules





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]], exports: [_table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                exports: [_table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function TableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r3);
} }
function TableComponent_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attribute_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attribute_r6);
} }
function TableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_tr_8_td_1_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.objectValues(product_r4));
} }
function TableComponent_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attribute_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", attribute_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", attribute_r9);
} }
function TableComponent_div_19_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Todos los campos son obligatorios.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableComponent_div_19_div_4_Template, 2, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableComponent_div_19_div_6_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_div_19_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.checkForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.emptyField);
} }
class TableComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.newProduct = false;
        this.emptyField = false;
        this.objectValues = Object.values;
        this.objectKeys = Object.keys;
        // Child attributes
        this.columns = null;
        this.data = null;
        // Creates form
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    }
    // Runs first
    ngOnInit() {
        // Parse Json from server
        this.data = JSON.parse(localStorage.getItem('tableData'));
        console.log(this.data);
        this.selectedItem = null;
        this.productArray = null;
        this.productArray = this.data;
        this.initTable();
        this.selectItems();
        this.deleteItems();
        this.initPopovers();
        this.initForm();
    }
    // Initializes Data table structure 
    initTable() {
        $(document).ready(function () {
            $('#cellerTable').DataTable({
                "bPaginate": false,
                "bLengthChange": false,
                "bFilter": true,
                "bInfo": false,
            });
        });
    }
    // Initializes popovers
    initPopovers() {
        $(document).ready(function () {
            $('[data-toggle="popover"]').popover({
                placement: 'left',
                trigger: 'hover'
            });
        });
        $("#saveBtn").attr('visible', 'false');
    }
    initForm() {
        for (var i = 0; i < this.columns.length; i++) {
            this.userForm.addControl(this.columns[i], new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
        }
    }
    ;
    // Method for selecting rows in table
    selectItems() {
        $(document).ready(function () {
            var table = $('#cellerTable').DataTable();
            $('#cellerTable tbody').on('click', 'tr', function () {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });
        });
    }
    // Deletes selected row
    deleteItems() {
        $('#deleteBtn').click(function () {
            $('#cellerTable').DataTable().row('.selected').remove().draw(false);
        });
    }
    // Checks for empty fields in form and adds the inputs to a lists
    checkForm() {
        for (var i = 0; i < this.columns.length; i++) {
            if (this.userForm.get(this.columns[i]).value == null) {
                this.emptyField = true;
            }
            else if (!this.userForm.get(this.columns[i]).value.emptyField) {
                this.emptyField = false;
            }
        }
        if (this.emptyField == false) {
            var list = [];
            for (var i = 0; i < this.columns.length; i++) {
                list.push(this.userForm.get(this.columns[i]).value);
            }
            this.addProduct(list, 0);
            this.newProduct = !this.newProduct;
        }
    }
    // Opens form for submiting new product
    newItem() {
        this.newProduct = !this.newProduct;
        this.selectedItem = Object.entries(this.productArray[0]).map(item => { return [this.productArray[0], ""]; });
    }
    // Enables editing of rows
    editItem() {
        $("#cellerTable").closest('div').attr('contenteditable', 'true');
        $("#cellerTable").closest('div').focus();
        $("#saveBtn").show();
    }
    // Disenables editing of rows
    saveEdit() {
        $("#cellerTable").closest('div').attr('contenteditable', 'false');
        $("#saveBtn").hide();
        var table = $('#cellerTable').DataTable();
        table
            .rows()
            .invalidate()
            .draw();
    }
    // Adds new product to the table
    addProduct(list, i) {
        var table = document.getElementById('cellerTable');
        var row = table.insertRow(-1);
        while (i < this.columns.length) {
            var cell = row.insertCell(i);
            cell.innerHTML = list[i];
            i++;
        }
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], inputs: { columns: "columns", data: "data" }, decls: 20, vars: 3, consts: [[1, "list-group"], ["id", "cellerTable", 1, "table", "table-striped", "table-hover"], ["scope", "col", 4, "ngFor", "ngForOf"], ["id", "row", 4, "ngFor", "ngForOf"], ["type", "button", "id", "deleteBtn", "data-toggle", "popover", "title", "Eliminar", "data-content", "Si elimina este elemento, no podr\u00E1 recuperarlo", 1, "btn", "deleteBtn", "ml-2"], [1, "fa", "fa-trash"], ["type", "button", "data-toggle", "popover", "title", "Editar", "data-content", "\u00BFDesea editar este elemento?", 1, "btn", "editBtn", "ml-2", 3, "click"], ["id", "editBtn", 1, "fa", "fa-edit"], ["type", "button", 1, "btn", "myBtn", "ml-2", 3, "click"], [1, "fa", "fa-plus"], ["type", "button", "id", "saveBtn", 1, "btn", "myBtn", "ml-2", 2, "display", "none", 3, "click"], [1, "fa", "fa-save"], ["class", "container ml-2", 4, "ngIf"], ["scope", "col"], ["id", "row"], [4, "ngFor", "ngForOf"], [1, "container", "ml-2"], [3, "formGroup"], ["class", "form-group", 4, "ngFor", "ngForOf"], ["style", "color:red", 4, "ngIf"], ["type", "button", 1, "btn", "myBtn", 3, "click"], [1, "form-group"], ["type", "text", 3, "formControlName", "placeholder"], [2, "color", "red"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableComponent_th_6_Template, 2, 1, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableComponent_tr_8_Template, 2, 1, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_Template_button_click_12_listener() { return ctx.editItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_Template_button_click_15_listener() { return ctx.newItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_Template_button_click_17_listener() { return ctx.saveEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TableComponent_div_19_Template, 9, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newProduct);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".myBtn[_ngcontent-%COMP%]{\n    background-color: #B8D3D9;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.myBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n.editBtn[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n    background-color: #3B565B;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.editBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n.deleteBtn[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n    background-color: #931621;\n    border: 1px solid #B8D3D9;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.deleteBtn[_ngcontent-%COMP%]:hover {\n    background-color: #194056;\n    color: #FFFFFF;\n}\n.myBtn2[_ngcontent-%COMP%]{\n    color: #B8D3D9;\n    background-color: #3B565B;\n    border: 1px solid #3B565B;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.myBtn2[_ngcontent-%COMP%]:hover {\n    background-color: #B8D3D9;\n    color: #3B565B;\n}\n.ml-1[_ngcontent-%COMP%] {\n    margin-left: 1 !important;\n    margin-right: 1 !important;\n}\n.myModal[_ngcontent-%COMP%]{\n    color: black;\n}\n.mySpan[_ngcontent-%COMP%]{\n    font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQztBQUNEO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBTdHlsZXNzaGVldCBmb3IgdGFibGUgY29tcG9uZW50XG4qL1xuLm15QnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCOEQzRDk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0I4RDNEOTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4ubXlCdG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTQwNTY7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5lZGl0QnRue1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjU2NUI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0I4RDNEOTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4uZWRpdEJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NDA1NjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmRlbGV0ZUJ0bntcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTMxNjIxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCOEQzRDk7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLmRlbGV0ZUJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NDA1NjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLm15QnRuMntcbiAgICBjb2xvcjogI0I4RDNEOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0I1NjVCO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzQjU2NUI7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLm15QnRuMjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I4RDNEOTtcbiAgICBjb2xvcjogIzNCNTY1Qjtcbn1cblxuLm1sLTEge1xuICAgIG1hcmdpbi1sZWZ0OiAxICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5teU1vZGFse1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm15U3BhbntcbiAgICBmb250LXNpemU6IHNtYWxsO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, { columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~cellar-view-cellar-view-module~client-view-client-view-module-es2015.js.map