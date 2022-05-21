import Player from './Player';
import Boss from './Boss';
import EventPacket from './EventPacket';
import UpdatePacket from './UpdatePacket';

class GameModel {
	gameField: number[][];
	Player: Player;
	Boss: Boss;
	statistics: object;

	constructor() {
		this.gameField = [];
		this.Player = new Player();
		this.Boss = new Boss();
		this.statistics = {
			melees: 0,
			missedPrayers: 0,
		};
	}

	update(EventPacket: EventPacket) {
		this.Boss.attack(this.Player);

		if (EventPacket.moveRequest) this.Player.path(EventPacket.moveRequest);
		if (EventPacket.attackRequest) this.Player.attack(this.Boss);

		if (this.Player.isAway()) this.Boss.move(this.Player.currentTile);
	}

	getData() {
		return new UpdatePacket(this.gameField, this.statistics);
	}
}

export default GameModel;
