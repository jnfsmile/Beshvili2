System.register(['@angular/core', '@angular/router', './main.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, main_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (main_service_1_1) {
                main_service_1 = main_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(router, mainService) {
                    this.router = router;
                    this.mainService = mainService;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.mainService.getHome();
                    //.then(heroes => this.heroes = heroes.slice(1, 5));
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'b-home',
                        template: "\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA",
                        styleUrls: ['app/home.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [main_service_1.MainService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, main_service_1.MainService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map