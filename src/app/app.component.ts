import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  randomText = lorem.sentence();
  userInput: string;

  handleInput(value: string) {
    this.userInput = value;
  }
}
