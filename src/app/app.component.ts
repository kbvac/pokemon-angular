import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log("la page a chargée...");

    let deferredPrompt;
    typeof window !== "undefined" && window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      console.log("vous pouvez installer l'application...");
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
    });

  }
}
