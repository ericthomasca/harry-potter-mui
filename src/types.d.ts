interface Book {
  id: string;
  type: string;
  attributes: {
    slug: string;
    title: string;
    summary: string;
    author: string;
    release_date: string;
    dedication: string;
    pages: number;
    order: number;
    cover: string;
    wiki: string;
  };
  relationships: {
    chapters: {
      data: {
        id: string;
        type: string;
      }[];
    };
  };
}

interface Character {
  id: string;
  type: string;
  attributes: {
    slug: string;
    name: string;
    born: string;
    died: string | null;
    gender: string | null;
    species: string;
    height: number | null;
    weight: number | null;
    hair_color: string;
    eye_color: string;
    skin_color: string;
    blood_status: string;
    marital_status: string;
    nationality: string;
    animagus: string | null;
    boggart: string;
    house: string;
    patronus: string;
    alias_names: string[] | null;
    family_members: string[] | null;
    jobs: string[] | null;
    romances: string[] | null;
    titles: string[] | null;
    wands: string[] | null;
    image: string;
    wiki: string;
  };
}

interface TopBarProps {
  appBarColor: string;
}
