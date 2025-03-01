import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { RouterOutlet } from '@angular/router';
import { VarableComponent } from "./component/example/varable/varable.component";
import { FormTemplateComponent } from "./component/example/form-template/form-template.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent, VarableComponent, VarableComponent, FormTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Watchdog';
}
