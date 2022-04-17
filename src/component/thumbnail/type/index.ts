export enum EThumbnailType { left = "left", right = "right", mobile = "mobile" }
export interface IThumbnail {
    thumbnailType: EThumbnailType;
    thumbnail: string[];
    isMotion: boolean;
}