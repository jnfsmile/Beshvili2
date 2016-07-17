System.register(['@angular/router', './home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                {
                    path: '',
                    redirectTo: '/home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    component: home_component_1.HomeComponent
                } /*,
                {
                  path: 'personal',
                  component: PersonalComponent
                },
                {
                  path: 'workshop',
                  component: WorkshopComponent
                },
                {
                  path: 'lecture',
                  component: LectureComponent
                },
                {
                  path: 'blog',
                  component: BlogComponent
                }*/,
                {
                    path: 'about',
                    component: AboutComponent
                },
                {
                    path: 'contact',
                    component: ContactComponent
                }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map