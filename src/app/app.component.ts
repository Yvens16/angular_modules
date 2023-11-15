import { Component } from '@angular/core';
import { navigation } from 'src/assets/navigation';
import * as content from 'src/assets/content.json';


// Un peu overkill mais c'est pour montrer que c'est possible
// Mais permet d'avoir l'auto-completion pour évter les erreurs de frappes au moins
interface Content {
  loginBtn: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orders: string = navigation.orders;
  customers: string = navigation.customers;

  // Ou juste une variable content directement aussi possible
  content: Content = content;


  title = 'angular_modules';
}
