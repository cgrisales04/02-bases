import { Component, computed, inject, signal } from '@angular/core';
import { CharacterList } from "../components/dragonball/character-list/character-list";
import { DragonBallCharacterForm } from "../components/dragonball/character-form/character-form";
import { DragonBallService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super.html',
  imports: [CharacterList, DragonBallCharacterForm],
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonBallService);

}
