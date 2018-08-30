import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'button-toggle-app';

  selectedValue : String[] = ["First"]

  toggleOptions: Array<String> = ["First", "Second"];

  selectionChanged(item) {
    console.log("Selected value: " + item.value);

    this.selectedValue.forEach(i => console.log(`Included Item: ${i}`));
  }
}
