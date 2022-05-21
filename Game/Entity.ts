abstract class Entity {
	// Tile coordinates
	currentTile: number[];
	targetTile: number[] | undefined;
	// Size of one side, size^2 = area
	size: number;
	// In ticks, each tick being 0.6 seconds
	attackSpeed: number;
	attackCooldown: number;
	attackRange: number;
	movementSpeed: number;
	constructor(
		currentTile: number[],
		targetTile: number[] | undefined,
		size: number,
		attackSpeed: number,
		attackRange: number,
		movementSpeed: number
	) {
		this.currentTile = currentTile;
		this.targetTile = targetTile;
		this.size = size;
		this.attackSpeed = attackSpeed;
		this.attackCooldown = 0;
		this.attackRange = attackRange;
		this.movementSpeed = movementSpeed;
	}

	canAttack() {
		if (0 == this.attackCooldown) return true;
		return false;
	}

	endOfTickAttackCooldownCheck() {
		// Decrement attackCooldown
		if (0 == this.attackCooldown) return;
		this.attackCooldown--;
	}

	move(target: number[]) {
		this.currentTile = target;
	}

	path(target: number[]) {}

	isUnder() {
		// Check tiles under
	}

	isInMeleeRange() {
		// Check perimeter tiles
	}

	isAway() {
		// if (this.isUnder()) return false;
		// if (this.isInMeleeRange()) return false;
		return true;
	}
}

export default Entity;
