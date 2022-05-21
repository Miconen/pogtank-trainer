import Entity from './Entity';
import Boss from './Boss';

class Player extends Entity {
	constructor() {
		super([0, 0], undefined, 1, 4, 1, 2);
	}

	attack(Boss: Boss) {
		this.targetTile = Boss.currentTile;
		if (this.attackSpeed == this.attackCooldown) return;
	}
}

export default Player;
