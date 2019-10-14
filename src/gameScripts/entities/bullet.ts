import { Game } from '../game';
import { GameObject } from '../core/class/GameObject/game-object';
import { Vector3 } from 'three';
/**
 * PLAYER PROTOTYPE
 */
export class Bullet extends GameObject {
  // the class name of collision target object
  direction: Vector3;
  bulletSpeed: number;
  destroyTimeout: any;
  constructor(
    name: string,
    position: Vector3,
    direction: Vector3,
    bulletSpeed: number = 25,
  ) {
    super(
      name,
      {
        className: 'Bullet',
        images: ['assets/images/bullet.png'],
        parent: Game.scene,
      },
      {
        position,
        rotation: new Vector3(0, direction.x !== 0 ? (direction.x === -1 ? -45 : 45) : 0, 0),
        scale: new Vector3(8, 32, 1),
      },
    );
    this.direction = direction;
    this.bulletSpeed = bulletSpeed;
    this.onAwake();
    this.destroyTimeout = setTimeout(() => {
      this.onDestroy();
    }, 3000);
  }

  onUpdate() {
    this.transform.position.y += this.bulletSpeed * this.direction.y;
    this.transform.position.x += this.bulletSpeed * this.direction.x;
  }

  onDestroy() {
    clearTimeout(this.destroyTimeout);
    super.onDestroy();
  }
}
