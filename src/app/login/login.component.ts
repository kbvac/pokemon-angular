import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: ``,
})
export class LoginComponent implements OnInit {
  message: string = "Vous etes deconnecté. (pikachu/123)";
  name: string;
  password: string;
  authService: AuthService;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService = this.auth;
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = "Vous etes connectée";
    } else {
      this.message = `Nom ou Mot de passe incorrect, ${this.name} ${this.password}`;
    }
  }

  login() {
    this.message = "Tentative de connexion en cours...";
    this.auth
      .login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(["/pokemons"]);
        } else {
          console.log("Etat de connexion :", isLoggedIn)
          this.password = '';
          this.router.navigate(["/login"]);
        }
      });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }
}
