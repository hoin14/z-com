import style from './home.module.css'
import Tab from './_compoent/Tab'
import TabProvider from './_compoent/TabProvider'
import PostForm from './_compoent/PostForm'
import Post from '../_component/Post'

export default function home(){
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab/>
                 <PostForm/>
                 <Post/>
                 <Post/>
                 <Post/>    
            </TabProvider>           
        </main>
    )
}