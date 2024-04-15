import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
            {props.message}
            </div>
            <div className={s.like}>like{props.likeCount}</div>
            <div >
                <img className={s.img} src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'/>
            </div>
        </div>

    )
}

export default Post;