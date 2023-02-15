export interface ReviewPrePostType {
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}

export interface ReviewPostType extends ReviewPrePostType {
  cameraId: number;
}
