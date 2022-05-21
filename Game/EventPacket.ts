class EventPacket {
	attackRequest: boolean;
	moveRequest: number[] | undefined;
	eatRequest: number | undefined;
	prayerRequest: string | undefined;

	constructor(
		attackRequest: boolean = false,
		moveRequest?: number[],
		eatRequest?: number,
		prayerRequest?: string
	) {
		this.attackRequest = attackRequest;
		this.moveRequest = moveRequest;
		this.eatRequest = eatRequest;
		this.prayerRequest = prayerRequest;
	}
}

export default EventPacket;
