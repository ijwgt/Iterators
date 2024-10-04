export default class Team {
	constructor(team) {
		this.team = team;
	}

	[Symbol.iterator]() {
		let i = 0;
		let team = this.team;
		return {
			next() {
				if (i < team.length) {
					return { done: false, value: team[i++] };
				}
				return { done: true };
			}
		}
	}
}