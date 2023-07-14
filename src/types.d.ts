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
meta: {
  copyright: string;
  generated_at: string;
}
links: {
  self: string;
}

interface TopBarProps {
  appBarColor: string;
}
