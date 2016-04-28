// import {Injectable} from 'angular2/core';
//
// @Injectable()
// export class PizzaService {
//     getPizza() {
//         return [{
//             "id": 1,
//             "name": "Pizza Vegetaria",
//             "price": 5.99
//         }, {
//             "id": 2,
//             "name": "Pizza Salami",
//             "price": 10.99
//         }, {
//             "id": 3,
//             "name": "Pizza Thunfisch",
//             "price": 7.99
//         }, {
//             "id": 4,
//             "name": "Aktueller Flyer",
//             "price": 0
//         }]
//     }
// }
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // add map function to observable
import 'rxjs/Rx';

@Injectable()
export class PizzaService {
    constructor(private http: Http) {
    }

    getPizza() {
        return this.http.get('http://localhost:8000/pizza.json')
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
