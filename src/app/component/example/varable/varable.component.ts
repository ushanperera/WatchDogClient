import { Component, signal } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-varable',
  imports: [ChildComponent],
  templateUrl: './varable.component.html',
  styleUrl: './varable.component.scss'
})
export class VarableComponent {

  // this is a normal variable
  normalVaraible: string = "This is a normal variable";

  // this is a signal variable
  signalVaraible = signal("This is a signal variable");




  // event varables
  public eventVaraible: string = " ";
  public eventClicked() {
    this.eventVaraible = "clicked";
  }

  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
  //---------------------


  public quantity: number = 2;
  public price: number = 10;

  //Directives
  public myBoolean = true;
  public operatingSystems = [{ id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS' }, { id: 'linux', name: 'Linux' }];



}
