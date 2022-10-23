export interface ICollectionResponse<T>{
    data: T;
    meta: IResourceMeta;
}

interface IResourceMeta{
    pagination: IPagination;
}

interface IPagination{
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface ICategory{
    id: number;
    attributes:ICategoryAttribute;
}

interface ICategoryAttribute{
    Title: string;
    Slug: string;
}

export interface IArtical{
    id: number;
    attributes: IArticalAttibute
}

interface IArticalAttibute{
    Title: string;
    Body: string;
    Slug: string;
}