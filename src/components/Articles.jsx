import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import { useParams } from "react-router-dom";

const Articles = () => {
const [articles,setArticles] = useState([])
const [isLoading, setIsLoading] = useState(true);
const {slug} = useParams()



useEffect(()=>{
getArticles(slug).then((articles)=>{
    console.log(articles)
setArticles(articles)
setIsLoading(false)
})},[articles])




if (isLoading === true) return(',.....loading')
    return (
   <main className="main">
     <h2 id = "articles__header">Positive news articles</h2> 
   <ul id = "articlesList">
    {articles.map((article)=>{
return(
    <li key={article.article_id} id = "article">
     <span id = "Home__article--title"><h3>{article.topic}</h3> <h2>{article.title}</h2></span>
     <h3>{article.author}</h3>
     <p>{article.body}</p>
     <h3>{article.created_at}</h3>
    </li>
)
    })}    
    </ul>
    </main>
    );
};

export default Articles;