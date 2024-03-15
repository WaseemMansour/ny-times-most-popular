export type DateString = string; // e.g. "2024-02-15"
export type DateTimeString = string; // e.g. "2024-02-16 11:49:40"

export type PopularPeriod = 1 | 7 | 30;

export type MostPopularArticlesRes = {
  status:      string;
  copyright:   string;
  num_results: number;
  results:     Article[];
}

export type Article = {
  uri:            string;
  url:            string;
  id:             number;
  asset_id:       number;
  source:         string;
  published_date: DateString;
  updated:        DateTimeString;
  section:        string;
  subsection:     string;
  nytdsection:    string;
  adx_keywords:   string;
  column:         null;
  byline:         string;
  type:           ResultType;
  title:          string;
  abstract:       string;
  des_facet:      string[];
  org_facet:      string[];
  per_facet:      string[];
  geo_facet:      string[];
  media:          Media[];
  eta_id:         number;
}

export type Media = {
  type:                     MediaType;
  subtype:                  SubType;
  caption:                  string;
  copyright:                string;
  approved_for_syndication: number;
  "media-metadata":         MediaMetadatum[];
}

export type MediaMetadatum = {
  url:    string;
  format: string;
  height: number;
  width:  number;
}

export type SubType = "photo" | "";

export type MediaType = "image" | "video" | "audio";

export type ResultType = "Article" | "Interactive";
