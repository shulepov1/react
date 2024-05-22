export interface player {
  id: number;
  college: string;
  country: string;
  first_name: string;
  last_name: string;
  height: string;
  weight: string;
  jersey_number: string;
  position: string;
  draft_year: number;
  draft_number: number;
}

export interface stat {
  ast: number;
  blk: number;
  dreb: number;
  fg3_pct: number;
  fg3a: number;
  fg3m: number;
  fg_pct: number;
  fga: number;
  fgm: number;
  ft_pct: number;
  fta: number;
  ftm: number;
  id: number;
  min: string;
  oreb: number;
  pf: number;
  pts: number;
  reb: number;
  stl: number;
  turnover: number;
  game: game;
}

export interface game {
  date: string;
  home_team_id: number;
  home_team_score: number;
  id: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team_id: number;
  visitor_team_score: number;
}

export interface team {
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  id: number;
  name: string;
}
