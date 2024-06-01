export interface IUser {
   avatar: string
   name: string
}

export interface IComment {
   id: number
   user: IUser
   comment: string
   created: string
   answer: IComment[]
}

export interface IBlog {
   id: number
   name: string
   description: string
   images: string[]
   todo: string
   viewCount: number
   comments: IComment[]
}
