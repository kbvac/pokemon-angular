import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  // Injection du service auth
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return true;
  }

  router.navigate(["/login"]);
  return false

};
