import { Component } from '@angular/core';

@Component({
  selector: 'app-form-template',
  imports: [],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.scss'
})

export class FormTemplateComponent {

  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {
    alert(this.favoriteFramework);

}
}