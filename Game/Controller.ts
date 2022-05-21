import GameModel from './Model';
import GameView from './View';
import EventPacket from './EventPacket';

class GameController {
	Model: GameModel;
	View: GameView;
	constructor() {
		this.Model = new GameModel();
		this.View = new GameView();
	}

	gameLoop() {
		this.Model.update(new EventPacket(true));
		this.View.render(this.Model.getData());
	}
}

export default GameController;

let gameController = new GameController();
