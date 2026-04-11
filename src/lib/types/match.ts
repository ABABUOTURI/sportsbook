export interface Odd {
	event_odd_id: number;
	parent_match_id: number;
	sub_type_id: number;
	outcome_id: string;
	outcome_name: string;
	outcome_alias: string;
	market_name: string;
	market_status: number;
	status: number;
	odd_value: number;
	prev_odd_value: number;
}

export interface Market {
	sub_type_id: number;
	name: string;
	market_type: string;
	market_priority?: number;
	odds: Odd[];
}

export interface Match {
	parent_match_id: number;
	home_team: string;
	away_team: string;
	start_time: string;
	sport_id: number;
	sport_name: string;
	competition_id: number;
	competition_name: string;
	country_code: string;
	country_name: string;
	result: string;
	status: number;
	status_desc: string;
	total_markets: number;
	main_market_name: string;
	markets: Market[];
}

export interface GroupedMatches {
	competition_name: string;
	country_name: string;
	matches: Match[];
}
