
export interface Author {
    id: string
    alias: string
}
export interface ContentFile {
    id: string
    path: string
    url?: string
}
export enum ArticleState {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    ARCHIVED = "ARCHIVED",
    DELETE = "DELETE",
}
export interface Article {
    id?: string
    title: string
    contentFile: ContentFile
    publishedDate: Date
    editedDates?: Date[]
    state: ArticleState
    main_photo_url?: string
}
export enum FetchState {
    IDLE = "IDLE",
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}