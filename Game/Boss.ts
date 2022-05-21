import Entity from './Entity';
import Player from './Player';

class Boss extends Entity {
	constructor() {
		super([0, 0], undefined, 5, 7, 1, 1);
	}

	attack(Player: Player) {
		// TODO: Change to closest hull tile
		this.targetTile = Player.currentTile;
		if (!this.canAttack()) return;
		this.endOfTickAttackCooldownCheck();
		// TODO: Change attack styles from string to enum?
		// if (Player.isInMeleeRange()) return 'melee';
		// return Math.random() > 0.5 ? 'ranged' : 'magic';
	}
}

export default Boss;
