import Link from "next/link"
import style from "./post.module.css"
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from "./ActionButtons";
import PostArticle from "./PostArticle";

dayjs.locale('ko')
dayjs.extend(relativeTime)

export default function Post() {
    const target = {
      postId: 1,
        User: {
            id: 'elonmusk',
            nickname: "Elon Musk",
            image: '/yRsRRjGO.jpg',
        },
        content: 'AAA',
        createdAt: new Date(),
        Images: [] as any[],
    }

    return (
       <PostArticle post={target}>
        <div className={style.postWrapper}>
          <div className={style.postUserSection}>
            <Link href={`/${target.User.id}`} className={style.postUserImage}>
              <img src={target.User.image} alt={target.User.nickname}/>
              <div className={style.postShade} />
            </Link>
          </div>
          <div className={style.postBody}>
            <div className={style.postMeta}>
              <Link href={`/${target.User.id}`}>
                <span className={style.postUserName}>{target.User.nickname}</span>
                &nbsp;
                <span className={style.postUserId}>@{target.User.id}</span>
                &nbsp;
                ·
                &nbsp;
              </Link>
              <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
            </div>
            <div>{target.content}</div>
            <div className={style.postImageSection}>  
            
            </div>
            <ActionButtons/>
          </div>
        </div>
       </PostArticle>
    )
}