(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showcustomer-showcustomer-module"],{

/***/ "./src/app/showcustomer/showcustomer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/showcustomer/showcustomer.module.ts ***!
  \*****************************************************/
/*! exports provided: ShowcustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcustomerPageModule", function() { return ShowcustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _showcustomer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showcustomer.page */ "./src/app/showcustomer/showcustomer.page.ts");







var routes = [
    {
        path: '',
        component: _showcustomer_page__WEBPACK_IMPORTED_MODULE_6__["ShowcustomerPage"]
    }
];
var ShowcustomerPageModule = /** @class */ (function () {
    function ShowcustomerPageModule() {
    }
    ShowcustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_showcustomer_page__WEBPACK_IMPORTED_MODULE_6__["ShowcustomerPage"]]
        })
    ], ShowcustomerPageModule);
    return ShowcustomerPageModule;
}());



/***/ }),

/***/ "./src/app/showcustomer/showcustomer.page.html":
/*!*****************************************************!*\
  !*** ./src/app/showcustomer/showcustomer.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Show Customer</ion-title>\n      <ion-buttons slot=\"primary\">\n        <ion-back-button text=\"Back\" icon=\"\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Ionic its works</ion-card-subtitle>\n      <ion-card-title>{{name_customer}}</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      {{desc_customer}}\n    </ion-card-content>\n  </ion-card>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/showcustomer/showcustomer.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/showcustomer/showcustomer.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3djdXN0b21lci9zaG93Y3VzdG9tZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/showcustomer/showcustomer.page.ts":
/*!***************************************************!*\
  !*** ./src/app/showcustomer/showcustomer.page.ts ***!
  \***************************************************/
/*! exports provided: ShowcustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcustomerPage", function() { return ShowcustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ShowcustomerPage = /** @class */ (function () {
    function ShowcustomerPage(router, postPvdr, actRoute) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.actRoute = actRoute;
    }
    ShowcustomerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.id = data.id;
            _this.name_customer = data.name;
            _this.desc_customer = data.desc;
            console.log(data);
        });
    };
    ShowcustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showcustomer',
            template: __webpack_require__(/*! ./showcustomer.page.html */ "./src/app/showcustomer/showcustomer.page.html"),
            styles: [__webpack_require__(/*! ./showcustomer.page.scss */ "./src/app/showcustomer/showcustomer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ShowcustomerPage);
    return ShowcustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=showcustomer-showcustomer-module.js.map