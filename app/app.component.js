"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var formulario_1 = require("./models/formulario");
var core_2 = require('angular2-cookie/core');
var AppComponent = (function () {
    // Constructor
    function AppComponent(_cookieService) {
        this._cookieService = _cookieService;
        //this.formulario= new Formulario("Eduardo","Arevalo", 1018409095,'1986-10-20',"eduardoarevaloco@gmail.com","ditoaforero");
        this.formulario = new formulario_1.Formulario("", "", 0, "", "", "");
        this.formularioCookie = new formulario_1.Formulario("", "", 0, "", "", "");
    }
    AppComponent.prototype.onSubmit = function () {
        console.log(this.formulario);
        this._cookieService.putObject("cookie", this.formulario);
        // TODO: Aqui ya se volvio tipo Object, Averiguar como hacer Serializable de TypeScript Class
        console.log("Cookie recuperada:");
        console.log(this._cookieService.getObject("cookie"));
        // TODO: Averiguar como se realiza un angular.copy en angular 2
        this.formularioCookie.igualar(this.formulario);
        console.log("Formulario Cookie:");
        console.log(this.formularioCookie);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/views/formulario.html'
        }), 
        __metadata('design:paramtypes', [core_2.CookieService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map