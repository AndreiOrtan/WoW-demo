export type FormData = UserInput & {
  characterName: string;
  faction: string;
  characterRace: string;
  title: string;
};

export type UserInput = {
  updateField: (field: Partial<FormData>) => void;
};
