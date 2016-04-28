System.register(['angular2/core', 'angular2/http', './directive/redfont.directive', './service/pizza.service'], function(exports_1, context_1) {
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
    var core_1, http_1, redfont_directive_1, pizza_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (redfont_directive_1_1) {
                redfont_directive_1 = redfont_directive_1_1;
            },
            function (pizza_service_1_1) {
                pizza_service_1 = pizza_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                // constructor(private DeliveryHero: PizzaService) {
                //     this.pizzas = this.DeliveryHero.getPizza();
                // }
                function AppComponent(pizzaService) {
                    this.pizzaService = pizzaService;
                    this.name = 'Team';
                    this.pizzas = [];
                    this.loadData();
                }
                AppComponent.prototype.loadData = function () {
                    var _this = this;
                    this.pizzaService.getPizza().subscribe(function (pizzas) { return _this.pizzas = pizzas; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [pizza_service_1.PizzaService, http_1.HTTP_PROVIDERS],
                    }),
                    core_1.View({
                        directives: [redfont_directive_1.RedFontDirective],
                        templateUrl: 'templates/sidebar.tmpl.html',
                        styleUrls: ['css/app.css'],
                    }), 
                    __metadata('design:paramtypes', [pizza_service_1.PizzaService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
