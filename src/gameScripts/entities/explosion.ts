import { Bullet } from './bullet';
import { GameObject } from '../core/class/GameObject/game-object';
import { Transform } from '../core/interfaces/transform';
import { Game } from '../game';
/**
 * PLAYER PROTOTYPE
 */
export class Explosion extends GameObject {
  constructor(transform: Transform) {
    super(
      name,
      {
        className: 'Explosion',
        images: ['assets/images/explosion.png'],
      },
      transform,
    );
    setTimeout(() => {
      super.onDestroy();
    }, 1000);

    setInterval(() => {
      this.transform.scale.x /= Math.random() * 2 + 1;
      this.transform.scale.y /= Math.random() * 2 + 1;
    }, 50);
  }
}