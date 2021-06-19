import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://wewatch.gg/blog/wp-content/uploads/2020/07/invoker-1.jpg" />
      <Post img="https://i.pinimg.com/originals/95/00/be/9500bec7a43857fb17865ab116ce3403.jpg" />
      <Post img="http://cdn.dota2.com/apps/dota2/images/blogfiles/blgimg_iaccde.jpg"/>
      <Post img="https://static-prod.weplay.tv/2019-12-11/f7c71c93cafd789ba34040dcf40e05ea_large_cover.432314-D38130-A4947C.jpeg"/>
      <Post img="http://static1.squarespace.com/static/59af2189c534a58c97bd63b3/59b15e689f8dce2f6a674f7f/59ff6add53450a448c8c9c20/1545950746234/Anti+Mage+Guilt+of+the+Survivor+loading+screen+Dota.jpg?format=1500w"/>
    </div>
  );
}
