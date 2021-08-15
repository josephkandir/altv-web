export class Category {
    constructor(
        public categoryName: string,
        public subCategoryName: string,
        public categoryCss: string,
        public isMenu: boolean,
        public isActive: boolean
    ){}
}