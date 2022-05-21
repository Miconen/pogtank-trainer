class UpdatePacket {
	gameField: number[][];
	statistics: object;
	constructor(gameField: number[][], statistics: object) {
		this.gameField = gameField;
		this.statistics = statistics;
	}
}

export default UpdatePacket;
