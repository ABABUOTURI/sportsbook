export interface BetSelection {
	event_odd_id: number;
	parent_match_id: number;
	home_team: string;
	away_team: string;
	market_name: string;
	outcome_name: string;
	outcome_alias: string;
	odd_value: number;
}

export interface BetslipState {
	selections: BetSelection[];
	totalOdds: number;
	stake: number;
	potentialWin: number;
}
