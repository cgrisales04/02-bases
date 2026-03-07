import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal, WritableSignal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})
export class HeroPageComponent {
  name: WritableSignal<string> = signal('Ironman');
  age: WritableSignal<number> = signal(45);
  heroDescription = computed(() => `${this.name()} - ${this.age()}`)
  //capitalizeName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

}
