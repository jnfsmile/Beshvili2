System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var MainService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            MainService = (function () {
                function MainService(http) {
                    this.http = http;
                    this.mainUrl = 'api/'; // URL to web api
                }
                MainService.prototype.getHome = function () {
                    return this.http.get(this.mainUrl)
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.hanldeError);
                };
                /*getHeroes(): Promise<Hero[]> {
                  return this.http.get(this.heroesUrl)
                             .toPromise()
                             .then(response => response.json().data)
                             .catch(this.handleError);
                }
                getHero(id: number) {
                  return this.getHeroes()
                             .then(heroes => heroes.find(hero => hero.id === id));
                }
                save(hero: Hero): Promise<Hero>  {
                  if (hero.id) {
                    return this.put(hero);
                  }
                  return this.post(hero);
                }
                delete(hero: Hero) {
                  let headers = new Headers();
                  headers.append('Content-Type', 'application/json');
                  let url = `${this.heroesUrl}/${hero.id}`;
                  return this.http
                             .delete(url, headers)
                             .toPromise()
                             .catch(this.handleError);
                }
                // Add new Hero
                private post(hero: Hero): Promise<Hero> {
                  let headers = new Headers({
                    'Content-Type': 'application/json'});
                  return this.http
                             .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
                             .toPromise()
                             .then(res => res.json().data)
                             .catch(this.handleError);
                }
                // Update existing Hero
                private put(hero: Hero) {
                  let headers = new Headers();
                  headers.append('Content-Type', 'application/json');
                  let url = `${this.heroesUrl}/${hero.id}`;
                  return this.http
                             .put(url, JSON.stringify(hero), {headers: headers})
                             .toPromise()
                             .then(() => hero)
                             .catch(this.handleError);
                }*/
                MainService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                MainService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MainService);
                return MainService;
            }());
            exports_1("MainService", MainService);
        }
    }
});
//# sourceMappingURL=main.service.js.map