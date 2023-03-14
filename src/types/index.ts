type MyObject = {
  [key: string]: string[];
};

export type FormData = UserInput & {
  characterName: string;
  faction: string;
  characterRace: string;
  characterClass: string;
  title: string;
  characterSpec: string;
};

export type UserInput = {
  updateField: (field: Partial<FormData>) => void;
};
