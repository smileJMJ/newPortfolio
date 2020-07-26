export enum EThumbnailType { left = "left", right = "right" }
export interface IThumbnail {
    thumbnailType: EThumbnailType;
    thumbnail: string[];
}