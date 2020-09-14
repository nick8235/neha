(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updatecustomer-updatecustomer-module"],{

/***/ "./src/app/updatecustomer/updatecustomer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/updatecustomer/updatecustomer.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdatecustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatecustomerPageModule", function() { return UpdatecustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updatecustomer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updatecustomer.page */ "./src/app/updatecustomer/updatecustomer.page.ts");







var routes = [
    {
        path: '',
        component: _updatecustomer_page__WEBPACK_IMPORTED_MODULE_6__["UpdatecustomerPage"]
    }
];
var UpdatecustomerPageModule = /** @class */ (function () {
    function UpdatecustomerPageModule() {
    }
    UpdatecustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updatecustomer_page__WEBPACK_IMPORTED_MODULE_6__["UpdatecustomerPage"]]
        })
    ], UpdatecustomerPageModule);
    return UpdatecustomerPageModule;
}());



/***/ }),

/***/ "./src/app/updatecustomer/updatecustomer.page.html":
/*!*********************************************************!*\
  !*** ./src/app/updatecustomer/updatecustomer.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Update Customer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-back-button text=\"Back\" icon=\"\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\"> Name </ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"name_customer\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\"> Description </ion-label>\n    <ion-textarea [(ngModel)]=\"desc_customer\"></ion-textarea>\n  </ion-item>\n\n  <ion-button expand=\"block\" padding color=\"tertiary\" *ngIf=\"id>=1\" (click)=\"updateProses()\" fill=\"outline\">Submit</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/updatecustomer/updatecustomer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/updatecustomer/updatecustomer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZWN1c3RvbWVyL3VwZGF0ZWN1c3RvbWVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/updatecustomer/updatecustomer.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/updatecustomer/updatecustomer.page.ts ***!
  \*******************************************************/
/*! exports provided: UpdatecustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatecustomerPage", function() { return UpdatecustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var UpdatecustomerPage = /** @class */ (function () {
    function UpdatecustomerPage(postPvdr, router, toastController, actRoute) {
        this.postPvdr = postPvdr;
        this.router = router;
        this.toastController = toastController;
        this.actRoute = actRoute;
        this.name_customer = '';
        this.desc_customer = '';
    }
    UpdatecustomerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.id = data.id;
            _this.name_customer = data.name;
            _this.desc_customer = data.desc;
            console.log(data);
        });
    };
    UpdatecustomerPage.prototype.updateProses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, body;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.name_customer == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Customer is required',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.desc_customer == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Description is required',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 4:
                        body = {
                            aksi: 'update',
                            customer_id: this.id,
                            name_customer: this.name_customer,
                            desc_customer: this.desc_customer,
                        };
                        // this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
                        //   var alertpesan = data.msg;
                        //   if (data.success) {
                        this.router.navigate(['/customer']);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UpdatecustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updatecustomer',
            template: __webpack_require__(/*! ./updatecustomer.page.html */ "./src/app/updatecustomer/updatecustomer.page.html"),
            styles: [__webpack_require__(/*! ./updatecustomer.page.scss */ "./src/app/updatecustomer/updatecustomer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UpdatecustomerPage);
    return UpdatecustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=updatecustomer-updatecustomer-module.js.map