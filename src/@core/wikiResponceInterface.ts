export interface wikiResponse {
  query: {
    search: {
      title: String;
      pageid: number;
      wordcount: number;
    }[];
  };
}
