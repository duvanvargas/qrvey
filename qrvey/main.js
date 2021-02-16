(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AlexanderVargas\Documents\tests\qrvey\src\main.ts */"zUnb");


/***/ }),

/***/ "0WY4":
/*!********************************************************!*\
  !*** ./src/app/core/pipes/filter-name-country.pipe.ts ***!
  \********************************************************/
/*! exports provided: FilterNameCountryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterNameCountryPipe", function() { return FilterNameCountryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterNameCountryPipe {
    transform(countries, term) {
        //check if the search term is defined
        if (!countries || !term)
            return countries;
        //return updated countries array
        return countries.filter(function (country) {
            return country.name.toLowerCase().includes(term.toLowerCase());
        });
    }
}
FilterNameCountryPipe.ɵfac = function FilterNameCountryPipe_Factory(t) { return new (t || FilterNameCountryPipe)(); };
FilterNameCountryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterNameCountry", type: FilterNameCountryPipe, pure: true });


/***/ }),

/***/ "2C8/":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/countries/components/qrvey-country-list/qrvey-country-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: QrveyCountryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrveyCountryListComponent", function() { return QrveyCountryListComponent; });
/* harmony import */ var src_app_core_state_countries_countries_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/state/countries/countries.actions */ "KsdB");
/* harmony import */ var src_app_core_state_countries_countries_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/state/countries/countries.selectors */ "A4DL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "tqRt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _qrvey_country_item_qrvey_country_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../qrvey-country-item/qrvey-country-item.component */ "IAsa");
/* harmony import */ var _qrvey_country_modal_qrvey_country_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../qrvey-country-modal/qrvey-country-modal.component */ "qN6L");
/* harmony import */ var src_app_core_pipes_filter_name_country_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/pipes/filter-name-country.pipe */ "0WY4");
/* harmony import */ var src_app_core_pipes_filter_region_country_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/pipes/filter-region-country.pipe */ "9lK9");









function QrveyCountryListComponent_div_0_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-qrvey-country-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QrveyCountryListComponent_div_0_div_1_div_1_div_3_Template_app_qrvey_country_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r8.selectItem(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r7);
} }
function QrveyCountryListComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QrveyCountryListComponent_div_0_div_1_div_1_div_3_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "filterNameCountry");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "filterRegionCountry");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 8, ctx_r5.countries$), item_r4), ctx_r5.searchTerm));
} }
function QrveyCountryListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QrveyCountryListComponent_div_0_div_1_div_1_Template, 7, 10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.filterRegion === "All" || ctx_r2.filterRegion === item_r4);
} }
function QrveyCountryListComponent_div_0_div_2_div_3_app_qrvey_country_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-qrvey-country-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QrveyCountryListComponent_div_0_div_2_div_3_app_qrvey_country_item_1_Template_app_qrvey_country_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r14.selectItem(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r12);
} }
function QrveyCountryListComponent_div_0_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QrveyCountryListComponent_div_0_div_2_div_3_app_qrvey_country_item_1_Template, 1, 1, "app-qrvey-country-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r12.favorite);
} }
function QrveyCountryListComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QrveyCountryListComponent_div_0_div_2_div_3_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "filterNameCountry");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "filterRegionCountry");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 7, ctx_r3.countries$), ctx_r3.item), ctx_r3.searchTerm));
} }
function QrveyCountryListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QrveyCountryListComponent_div_0_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QrveyCountryListComponent_div_0_div_2_Template, 7, 9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.continents);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.filterRegion === "Favorites");
} }
function QrveyCountryListComponent_app_qrvey_country_modal_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-qrvey-country-modal", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeModal", function QrveyCountryListComponent_app_qrvey_country_modal_2_Template_app_qrvey_country_modal_closeModal_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.closeModalOpen($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", ctx_r1.selectedItem);
} }
class QrveyCountryListComponent {
    constructor(store) {
        this.store = store;
        this.openModal = false;
        this.continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
    }
    ngOnInit() {
        this.store.dispatch(Object(src_app_core_state_countries_countries_actions__WEBPACK_IMPORTED_MODULE_0__["loadCountries"])());
        this.countries$ = this.store.select(src_app_core_state_countries_countries_selectors__WEBPACK_IMPORTED_MODULE_1__["getAllCountries"]);
        //
        this.store.select(src_app_core_state_countries_countries_selectors__WEBPACK_IMPORTED_MODULE_1__["searchTerm"]).subscribe((item) => {
            this.searchTerm = item;
        });
        this.store.select(src_app_core_state_countries_countries_selectors__WEBPACK_IMPORTED_MODULE_1__["filterRegion"]).subscribe((item) => {
            this.filterRegion = item;
        });
    }
    selectItem(item) {
        this.openModal = true;
        this.selectedItem = item;
    }
    closeModalOpen() {
        this.openModal = false;
    }
}
QrveyCountryListComponent.ɵfac = function QrveyCountryListComponent_Factory(t) { return new (t || QrveyCountryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
QrveyCountryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QrveyCountryListComponent, selectors: [["app-qrvey-country-list"]], decls: 3, vars: 4, consts: [["class", "list", 4, "ngIf"], ["id", "modal", 3, "item", "closeModal", 4, "ngIf"], [1, "list"], [4, "ngFor", "ngForOf"], ["class", "region", 4, "ngIf"], [1, "region"], [1, "region_title"], [3, "item", "click"], [3, "item", "click", 4, "ngIf"], ["id", "modal", 3, "item", "closeModal"]], template: function QrveyCountryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QrveyCountryListComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QrveyCountryListComponent_app_qrvey_country_modal_2_Template, 1, 1, "app-qrvey-country-modal", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.countries$).length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.openModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _qrvey_country_item_qrvey_country_item_component__WEBPACK_IMPORTED_MODULE_5__["QrveyCountryItemComponent"], _qrvey_country_modal_qrvey_country_modal_component__WEBPACK_IMPORTED_MODULE_6__["QrveyCountryModalComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], src_app_core_pipes_filter_name_country_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterNameCountryPipe"], src_app_core_pipes_filter_region_country_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterRegionCountryPipe"]], styles: [".list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 50px;\n}\n.list[_ngcontent-%COMP%]   .region_title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 23px;\n  color: #09295e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHFydmV5LWNvdW50cnktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUNJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ04iLCJmaWxlIjoicXJ2ZXktY291bnRyeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIC5yZWdpb24ge1xyXG4gICAgJl90aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICBjb2xvcjogIzA5Mjk1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "5xAg":
/*!******************************************************************!*\
  !*** ./src/app/core/state/countries/services/country.service.ts ***!
  \******************************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");


class CountryService {
    constructor(http) {
        this.http = http;
    }
    getAllCountries() {
        return this.http.get('https://restcountries.eu/rest/v2/all');
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9lK9":
/*!**********************************************************!*\
  !*** ./src/app/core/pipes/filter-region-country.pipe.ts ***!
  \**********************************************************/
/*! exports provided: FilterRegionCountryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterRegionCountryPipe", function() { return FilterRegionCountryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterRegionCountryPipe {
    transform(countries, term) {
        //check if the search term is defined
        if (!countries || !term)
            return countries;
        //return updated countries array
        return countries.filter(function (country) {
            return country.region.toLowerCase().includes(term.toLowerCase());
        });
    }
}
FilterRegionCountryPipe.ɵfac = function FilterRegionCountryPipe_Factory(t) { return new (t || FilterRegionCountryPipe)(); };
FilterRegionCountryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterRegionCountry", type: FilterRegionCountryPipe, pure: true });


/***/ }),

/***/ "A4DL":
/*!*************************************************************!*\
  !*** ./src/app/core/state/countries/countries.selectors.ts ***!
  \*************************************************************/
/*! exports provided: countryFeatureSelector, getAllCountries, arecountriesLoaded, searchTerm, filterRegion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryFeatureSelector", function() { return countryFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCountries", function() { return getAllCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arecountriesLoaded", function() { return arecountriesLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTerm", function() { return searchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterRegion", function() { return filterRegion; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "tqRt");
/* harmony import */ var _countries_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries.reducer */ "LHSX");


const countryFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('countries');
const getAllCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(countryFeatureSelector, _countries_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const arecountriesLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(countryFeatureSelector, (state) => state.countriesLoaded);
const searchTerm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(countryFeatureSelector, (state) => state.searchTerm);
const filterRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(countryFeatureSelector, (state) => state.filterRegion);


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IAsa":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/countries/components/qrvey-country-item/qrvey-country-item.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: QrveyCountryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrveyCountryItemComponent", function() { return QrveyCountryItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function QrveyCountryItemComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} }
function QrveyCountryItemComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} }
class QrveyCountryItemComponent {
    constructor() { }
    ngOnInit() { }
}
QrveyCountryItemComponent.ɵfac = function QrveyCountryItemComponent_Factory(t) { return new (t || QrveyCountryItemComponent)(); };
QrveyCountryItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QrveyCountryItemComponent, selectors: [["app-qrvey-country-item"]], inputs: { item: "item" }, decls: 5, vars: 4, consts: [[1, "country-item"], ["alt", "flag", 3, "src"], ["class", "star", "src", "assets/star.svg", 4, "ngIf"], ["class", "star", "src", "assets/star-fill.svg", 4, "ngIf"], ["src", "assets/star.svg", 1, "star"], ["src", "assets/star-fill.svg", 1, "star"]], template: function QrveyCountryItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QrveyCountryItemComponent_img_3_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QrveyCountryItemComponent_img_4_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.item.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.favorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.favorite);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".country-item[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHFydmV5LWNvdW50cnktaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFFRiIsImZpbGUiOiJxcnZleS1jb3VudHJ5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnRyeS1pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "KsdB":
/*!***********************************************************!*\
  !*** ./src/app/core/state/countries/countries.actions.ts ***!
  \***********************************************************/
/*! exports provided: loadCountries, loadCountriesSuccess, loadCountriesFail, searchTermCountry, filterRegionCountry, addFavorite, removeFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCountries", function() { return loadCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCountriesSuccess", function() { return loadCountriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCountriesFail", function() { return loadCountriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTermCountry", function() { return searchTermCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterRegionCountry", function() { return filterRegionCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFavorite", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFavorite", function() { return removeFavorite; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "tqRt");

const loadCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Countries component] Load Countries');
const loadCountriesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Countries component] Load Countries Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCountriesFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Countries component] Load Countries Fail');
const searchTermCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Countries component] searchTermCountry', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const filterRegionCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Countries component] filterRegionCountry', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addFavorite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Countries component] addFavorite', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removeFavorite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Countries component] removeFavorite', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "LHSX":
/*!***********************************************************!*\
  !*** ./src/app/core/state/countries/countries.reducer.ts ***!
  \***********************************************************/
/*! exports provided: adapter, initialState, countryReducer, selectAll, selectIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryReducer", function() { return countryReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "tqRt");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "R0sL");
/* harmony import */ var _countries_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries.actions */ "KsdB");



const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({
    selectId: (Country) => Country.alpha2Code,
});
const initialState = adapter.getInitialState({
    countriesLoaded: false,
    searchTerm: '',
    filterRegion: 'All',
});
const _countryReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_countries_actions__WEBPACK_IMPORTED_MODULE_2__["loadCountries"], (state) => (Object.assign({}, initialState))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_countries_actions__WEBPACK_IMPORTED_MODULE_2__["loadCountriesSuccess"], (state, action) => {
    return adapter.setAll(action.countries, Object.assign(Object.assign({}, state), { countriesLoaded: true }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_countries_actions__WEBPACK_IMPORTED_MODULE_2__["loadCountriesFail"], (state) => (Object.assign({}, initialState))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_countries_actions__WEBPACK_IMPORTED_MODULE_2__["searchTermCountry"], (state, action) => {
    return adapter.addMany([], Object.assign(Object.assign({}, state), { searchTerm: action.searchTerm }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_countries_actions__WEBPACK_IMPORTED_MODULE_2__["addFavorite"], (state, action) => {
    return adapter.updateOne({
        id: action.idCountry,
        changes: {
            favorite: true,
        },
    }, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_countries_actions__WEBPACK_IMPORTED_MODULE_2__["removeFavorite"], (state, action) => {
    return adapter.updateOne({
        id: action.idCountry,
        changes: {
            favorite: false,
        },
    }, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_countries_actions__WEBPACK_IMPORTED_MODULE_2__["filterRegionCountry"], (state, action) => (Object.assign(Object.assign({}, state), { filterRegion: action.filterRegion }))));
function countryReducer(state, action) {
    return _countryReducer(state, action);
}
const { selectAll, selectIds } = adapter.getSelectors();


/***/ }),

/***/ "MdAD":
/*!***********************************************************!*\
  !*** ./src/app/core/state/countries/countries.effects.ts ***!
  \***********************************************************/
/*! exports provided: CountriesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesEffects", function() { return CountriesEffects; });
/* harmony import */ var _countries_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries.actions */ "KsdB");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/country.service */ "5xAg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class CountriesEffects {
    constructor(countryService, actions$, router) {
        this.countryService = countryService;
        this.actions$ = actions$;
        this.router = router;
        this.loadCountries$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_countries_actions__WEBPACK_IMPORTED_MODULE_0__["loadCountries"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(() => this.countryService.getAllCountries()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((countries) => Object(_countries_actions__WEBPACK_IMPORTED_MODULE_0__["loadCountriesSuccess"])({ countries }))));
    }
}
CountriesEffects.ɵfac = function CountriesEffects_Factory(t) { return new (t || CountriesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CountriesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CountriesEffects, factory: CountriesEffects.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'qrvey';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "YILF":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/countries/components/qrvey-search/qrvey-search.component.ts ***!
  \*************************************************************************************/
/*! exports provided: QrveySearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrveySearchComponent", function() { return QrveySearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _qrvey_search_bar_qrvey_search_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../qrvey-search-bar/qrvey-search-bar.component */ "eSWb");


class QrveySearchComponent {
    constructor() { }
    ngOnInit() { }
}
QrveySearchComponent.ɵfac = function QrveySearchComponent_Factory(t) { return new (t || QrveySearchComponent)(); };
QrveySearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QrveySearchComponent, selectors: [["app-qrvey-search"]], decls: 9, vars: 0, consts: [[1, "search"]], template: function QrveySearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Find any ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " in the world. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-qrvey-search-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_qrvey_search_bar_qrvey_search_bar_component__WEBPACK_IMPORTED_MODULE_1__["QrveySearchBarComponent"]], styles: [".search[_ngcontent-%COMP%] {\n  max-height: 420px;\n  background: url(\"/assets/bg-search.png\");\n  background-repeat: no-repeat;\n  background-position: right;\n  display: flex;\n  align-items: center;\n  padding: 50px;\n  padding-top: 100px;\n}\n.search[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 50px;\n  line-height: 59px;\n  color: var(--dark-blue);\n}\n.search[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--clear-blue);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHFydmV5LXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQURJO0VBQ0Usd0JBQUE7QUFHTiIsImZpbGUiOiJxcnZleS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcclxuICBtYXgtaGVpZ2h0OiA0MjBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnLXNlYXJjaC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTlweDtcclxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jbGVhci1ibHVlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_countries_countries_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/countries/countries.module */ "nEOE");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "tqRt");
/* harmony import */ var _core_state_countries_countries_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/state/countries/countries.reducer */ "LHSX");
/* harmony import */ var _core_state_countries_countries_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/state/countries/countries.effects */ "MdAD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _core_state_countries_services_country_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/state/countries/services/country.service */ "5xAg");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_core_state_countries_services_country_service__WEBPACK_IMPORTED_MODULE_10__["CountryService"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _modules_countries_countries_module__WEBPACK_IMPORTED_MODULE_3__["CountriesModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({ countries: _core_state_countries_countries_reducer__WEBPACK_IMPORTED_MODULE_6__["countryReducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([_core_state_countries_countries_effects__WEBPACK_IMPORTED_MODULE_7__["CountriesEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                maxAge: 100,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _modules_countries_countries_module__WEBPACK_IMPORTED_MODULE_3__["CountriesModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"]] }); })();


/***/ }),

/***/ "daQr":
/*!***************************************************************************!*\
  !*** ./src/app/modules/countries/core/qrvey-home/qrvey-home.component.ts ***!
  \***************************************************************************/
/*! exports provided: QrveyHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrveyHomeComponent", function() { return QrveyHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_qrvey_search_qrvey_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/qrvey-search/qrvey-search.component */ "YILF");
/* harmony import */ var _components_qrvey_country_list_qrvey_country_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/qrvey-country-list/qrvey-country-list.component */ "2C8/");



class QrveyHomeComponent {
    constructor() { }
    ngOnInit() { }
}
QrveyHomeComponent.ɵfac = function QrveyHomeComponent_Factory(t) { return new (t || QrveyHomeComponent)(); };
QrveyHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QrveyHomeComponent, selectors: [["app-qrvey-home"]], decls: 2, vars: 0, template: function QrveyHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-qrvey-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qrvey-country-list");
    } }, directives: [_components_qrvey_search_qrvey_search_component__WEBPACK_IMPORTED_MODULE_1__["QrveySearchComponent"], _components_qrvey_country_list_qrvey_country_list_component__WEBPACK_IMPORTED_MODULE_2__["QrveyCountryListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxcnZleS1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "eSWb":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/countries/components/qrvey-search-bar/qrvey-search-bar.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: QrveySearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrveySearchBarComponent", function() { return QrveySearchBarComponent; });
/* harmony import */ var src_app_core_state_countries_countries_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/state/countries/countries.actions */ "KsdB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "tqRt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");




class QrveySearchBarComponent {
    constructor(store) {
        this.store = store;
        this.country = '';
        this.region = 'All';
    }
    ngOnInit() { }
    find() {
        this.store.dispatch(Object(src_app_core_state_countries_countries_actions__WEBPACK_IMPORTED_MODULE_0__["searchTermCountry"])({ searchTerm: this.country }));
        this.store.dispatch(Object(src_app_core_state_countries_countries_actions__WEBPACK_IMPORTED_MODULE_0__["filterRegionCountry"])({ filterRegion: this.region }));
    }
}
QrveySearchBarComponent.ɵfac = function QrveySearchBarComponent_Factory(t) { return new (t || QrveySearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
QrveySearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QrveySearchBarComponent, selectors: [["app-qrvey-search-bar"]], decls: 18, vars: 2, consts: [[1, "search-bar"], ["placeholder", "Search country", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["value", "All"], ["value", "Africa"], ["value", "America"], ["value", "Asia"], ["value", "Europe"], ["value", "Oceania"], ["value", "Favorites"], [3, "click"]], template: function QrveySearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QrveySearchBarComponent_Template_input_ngModelChange_1_listener($event) { return ctx.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QrveySearchBarComponent_Template_select_ngModelChange_2_listener($event) { return ctx.region = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Show all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "America");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Asia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Europe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Oceania");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QrveySearchBarComponent_Template_button_click_17_listener() { return ctx.find(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.region);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: [".search-bar[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 70px;\n  border: 1px solid var(--clear-white);\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  background-color: white;\n  border-radius: 10px;\n  display: flex;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 6;\n  outline: none;\n  border-radius: 10px;\n  border: none;\n  font-size: 19px;\n  line-height: 22px;\n  padding-left: 20px;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.search-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 3;\n  outline: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url(\"/assets/arrow-select.svg\");\n  background-repeat: no-repeat;\n  background-position-x: 88%;\n  background-position-y: 48%;\n  background-size: 9%;\n  border: none;\n  height: 100%;\n  font-size: 19px;\n  line-height: 22px;\n  border: 1px solid var(--clear-white);\n  border-top: none;\n  border-bottom: none;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex: 1;\n  outline: none;\n  border: none;\n  height: 100%;\n  background-color: var(--clear-blue);\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-image: url(\"/assets/search-icon.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHFydmV5LXNlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBQ0UsK0JBQUE7QUFHTjtBQUFFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQUU7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUVKIiwiZmlsZSI6InFydmV5LXNlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbGVhci13aGl0ZSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBpbnB1dCB7XHJcbiAgICBmbGV4OiA2O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2VsZWN0IHtcclxuICAgIGZsZXg6IDM7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9hcnJvdy1zZWxlY3Quc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogODglO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA0OCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDklO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbGVhci13aGl0ZSk7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsZWFyLWJsdWUpO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc2VhcmNoLWljb24uc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "nEOE":
/*!*******************************************************!*\
  !*** ./src/app/modules/countries/countries.module.ts ***!
  \*******************************************************/
/*! exports provided: CountriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesModule", function() { return CountriesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _countries_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries-routing.module */ "qgKj");
/* harmony import */ var _components_qrvey_search_qrvey_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/qrvey-search/qrvey-search.component */ "YILF");
/* harmony import */ var _core_qrvey_home_qrvey_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/qrvey-home/qrvey-home.component */ "daQr");
/* harmony import */ var _components_qrvey_country_list_qrvey_country_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/qrvey-country-list/qrvey-country-list.component */ "2C8/");
/* harmony import */ var _components_qrvey_search_bar_qrvey_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/qrvey-search-bar/qrvey-search-bar.component */ "eSWb");
/* harmony import */ var src_app_core_pipes_filter_name_country_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/pipes/filter-name-country.pipe */ "0WY4");
/* harmony import */ var src_app_core_pipes_filter_region_country_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/pipes/filter-region-country.pipe */ "9lK9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _components_qrvey_country_item_qrvey_country_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/qrvey-country-item/qrvey-country-item.component */ "IAsa");
/* harmony import */ var _components_qrvey_country_modal_qrvey_country_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/qrvey-country-modal/qrvey-country-modal.component */ "qN6L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class CountriesModule {
}
CountriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: CountriesModule });
CountriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function CountriesModule_Factory(t) { return new (t || CountriesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _countries_routing_module__WEBPACK_IMPORTED_MODULE_1__["CountriesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CountriesModule, { declarations: [_components_qrvey_search_qrvey_search_component__WEBPACK_IMPORTED_MODULE_2__["QrveySearchComponent"],
        _core_qrvey_home_qrvey_home_component__WEBPACK_IMPORTED_MODULE_3__["QrveyHomeComponent"],
        _components_qrvey_country_list_qrvey_country_list_component__WEBPACK_IMPORTED_MODULE_4__["QrveyCountryListComponent"],
        _components_qrvey_search_bar_qrvey_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["QrveySearchBarComponent"],
        src_app_core_pipes_filter_name_country_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterNameCountryPipe"],
        src_app_core_pipes_filter_region_country_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterRegionCountryPipe"],
        _components_qrvey_country_item_qrvey_country_item_component__WEBPACK_IMPORTED_MODULE_9__["QrveyCountryItemComponent"],
        _components_qrvey_country_modal_qrvey_country_modal_component__WEBPACK_IMPORTED_MODULE_10__["QrveyCountryModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _countries_routing_module__WEBPACK_IMPORTED_MODULE_1__["CountriesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();


/***/ }),

/***/ "qN6L":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/countries/components/qrvey-country-modal/qrvey-country-modal.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: QrveyCountryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrveyCountryModalComponent", function() { return QrveyCountryModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_state_countries_countries_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/state/countries/countries.actions */ "KsdB");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "tqRt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function QrveyCountryModalComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QrveyCountryModalComponent_img_3_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addFav(ctx_r5.item.alpha2Code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QrveyCountryModalComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QrveyCountryModalComponent_img_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeFav(ctx_r7.item.alpha2Code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QrveyCountryModalComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currency_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", currency_r9.name, ", ");
} }
function QrveyCountryModalComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", language_r10.name, ", ");
} }
function QrveyCountryModalComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const border_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", border_r11, ", ");
} }
class QrveyCountryModalComponent {
    constructor(eRef, store) {
        this.eRef = eRef;
        this.store = store;
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    clickout(event) {
        if (event.target.id === 'modal') {
            this.closeModal.emit(null);
        }
    }
    addFav(alpha2Code) {
        this.store.dispatch(Object(src_app_core_state_countries_countries_actions__WEBPACK_IMPORTED_MODULE_1__["addFavorite"])({ idCountry: alpha2Code }));
        this.closeModal.emit(null);
    }
    removeFav(alpha2Code) {
        this.store.dispatch(Object(src_app_core_state_countries_countries_actions__WEBPACK_IMPORTED_MODULE_1__["removeFavorite"])({ idCountry: alpha2Code }));
        this.closeModal.emit(null);
    }
}
QrveyCountryModalComponent.ɵfac = function QrveyCountryModalComponent_Factory(t) { return new (t || QrveyCountryModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
QrveyCountryModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QrveyCountryModalComponent, selectors: [["app-qrvey-country-modal"]], hostBindings: function QrveyCountryModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QrveyCountryModalComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { open: "open", item: "item" }, outputs: { closeModal: "closeModal" }, decls: 33, vars: 10, consts: [[1, "container"], ["class", "star", "src", "assets/star.svg", 3, "click", 4, "ngIf"], ["class", "star", "src", "assets/star-fill.svg", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "flag", 3, "src"], ["src", "assets/star.svg", 1, "star", 3, "click"], ["src", "assets/star-fill.svg", 1, "star", 3, "click"]], template: function QrveyCountryModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QrveyCountryModalComponent_img_3_Template, 1, 0, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QrveyCountryModalComponent_img_4_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Region: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Population: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Capital: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Currency: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, QrveyCountryModalComponent_span_20_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Language: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, QrveyCountryModalComponent_span_24_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Border Countries: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, QrveyCountryModalComponent_span_28_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Flag: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.favorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.favorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.capital);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item.currencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item.borders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.item.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  background: rgba(9, 41, 94, 0.7);\n  top: 0;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  overscroll-behavior: contain;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 500px;\n  background: #ffffff;\n  border: 1px solid #e0e0e0;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  padding: 50px;\n  padding-top: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  height: 29px;\n  width: 29px;\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 40px;\n  color: #09295e;\n}\n\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  color: #4f4f4f;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 181px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHFydmV5LWNvdW50cnktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBREo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQURKIiwiZmlsZSI6InFydmV5LWNvdW50cnktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoOSwgNDEsIDk0LCAwLjcpO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC5jbG9zZSB7XHJcbiAgfVxyXG4gIC5zdGFyIHtcclxuICAgIGhlaWdodDogMjlweDtcclxuICAgIHdpZHRoOiAyOXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6ICMwOTI5NWU7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmZsYWcge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxODFweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "qgKj":
/*!***************************************************************!*\
  !*** ./src/app/modules/countries/countries-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CountriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesRoutingModule", function() { return CountriesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_qrvey_home_qrvey_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/qrvey-home/qrvey-home.component */ "daQr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _core_qrvey_home_qrvey_home_component__WEBPACK_IMPORTED_MODULE_1__["QrveyHomeComponent"],
    },
];
class CountriesRoutingModule {
}
CountriesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CountriesRoutingModule });
CountriesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CountriesRoutingModule_Factory(t) { return new (t || CountriesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CountriesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/countries/countries.module */ "nEOE")).then((m) => m.CountriesModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map