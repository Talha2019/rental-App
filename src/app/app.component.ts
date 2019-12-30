import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rentalapp';

  componentTitle = "I am app component from component.ts file"

  clicked(){
    alert("I am clicked")
  }
}
