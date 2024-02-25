import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "powerIllustrator",
})
export class PowerIllustratorPipe implements PipeTransform {
  transform(types: string[] | undefined): string {
    const customDisplayArray: string[] = [];

    if (types) {
      types.forEach((spec: string) => {
        if (spec === "Feu") {
          customDisplayArray.push("🔥");
        } else if (spec === "Poison") {
          customDisplayArray.push("☠️");
        } else if (spec === "Plante") {
          customDisplayArray.push("🍀");
        } else if (spec === "Eau") {
          customDisplayArray.push("💦");
        } else if (spec === "Fée") {
          customDisplayArray.push("🪄");
        } else if (spec === "Normal") {
          customDisplayArray.push("👁️");
        } else if (spec === "Insecte") {
          customDisplayArray.push("🐜");
        } else if (spec === "Vol") {
          customDisplayArray.push("🦅");
        } else if (spec === "Electrik") {
          customDisplayArray.push("⚡️");
        } else {
          customDisplayArray.push("Inconnu");
        }
      });
    }

    return customDisplayArray.join(" + ");
  }
}
