import {FC} from "react"
import {IComment} from "../../types/blog"
import CommentItem from "./CommentItem"
import {List} from "@mui/material"

interface ICommentListProps {
   comments: IComment[]
}

const CommentList: FC<ICommentListProps> = ({comments}) => {
   return (
      <List sx={{width: "100%"}}>
         {comments.map(comment => (
            <CommentItem key={comment.id} {...comment} />
         ))}
      </List>
   )
}

export default CommentList
