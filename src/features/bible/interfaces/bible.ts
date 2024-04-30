export interface Bible {
  id: string;
  dblId: string;
  relatedDbl: null;
  name: string;
  nameLocal: string;
  abbreviation: string;
  abbreviationLocal: string;
  description: string;
  descriptionLocal: string;
  language: Language;
  countries: Country[];
  type: string;
  updatedAt: Date;
  audioBibles: any[];
}

export interface Country {
  id: string;
  name: string;
  nameLocal: string;
}

export interface Language {
  id: string;
  name: string;
  nameLocal: string;
  script: string;
  scriptDirection: string;
}
