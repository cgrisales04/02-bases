import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';

@Component({
  selector: 'dragonball-character-form',
  imports: [],
  templateUrl: './character-form.html'
})
export class DragonBallCharacterForm {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();
  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  })

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    }

    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
