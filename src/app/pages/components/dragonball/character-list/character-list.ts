import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html'
})
export class CharacterList {
  listName = input<string>('');
  characters = input.required<Character[]>();
}
