import { Component } from '@angular/core';
import { RegisterComponent } from "./register/register.component";
import { HeaderComponent } from "./header/header.component";
import { FootComponent } from "./foot/foot.component";
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RegisterComponent, HeaderComponent, FootComponent, HomeComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
}
