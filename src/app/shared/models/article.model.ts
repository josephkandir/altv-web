export class Article {
    constructor(
        public articleId: string,
        public category: string,
        public subCategory: string,
        public articleTitle: string,
        public article: string,
        public articleImage: string,
        public articleVideo: string,
        public createdDate: Date,
        public modifiedDate: Date,
        public articleAuthor: string,
        public articleEIC: string,
        public articleStatus: boolean,
    ){}
}