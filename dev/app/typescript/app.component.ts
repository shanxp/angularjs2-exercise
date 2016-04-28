import {Component, View} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RedFontDirective} from './directive/redfont.directive';
import {PizzaService} from './service/pizza.service';

@Component({
    selector: 'my-app',
    providers: [PizzaService, HTTP_PROVIDERS],
})

@View({
    directives: [RedFontDirective],
    templateUrl: 'templates/sidebar.tmpl.html',
    styleUrls: ['css/app.css'],
})

export class AppComponent {
    name = 'Team';
    public pizzas = [];

    // constructor(private DeliveryHero: PizzaService) {
    //     this.pizzas = this.DeliveryHero.getPizza();
    // }
    constructor(private pizzaService: PizzaService) {
        this.loadData();
    }

    loadData(){
         this.pizzaService.getPizza().subscribe(pizzas => this.pizzas = pizzas);
    }
}
