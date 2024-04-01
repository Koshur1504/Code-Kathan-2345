export interface IArticle {
  id: number;
  title: string;
  Description: string;
  source: string;
  time: number;
  articleLink: string;
  image1: string;
  image2: string;
  category: string;
  clicks: number;
}

export type ArticleState = {
  articles: IArticle[];
};

export type ArticleAction = {
  type: string;
  payload: IArticle;
};


export type DispatchType = (args: ArticleAction) => ArticleAction;
