import { useState } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { requestMediumArticles } from '../../reducers/mediumReducer.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';

export default function Medium() {
  
  const articles = useSelector((state) => state.medium.articles)
  const loading = useSelector((state) => state.medium.loading)

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

  const dispatch = useDispatch()

  useEffect(() => 
  {
    dispatch(requestMediumArticles)
  }, [])

  return (
    <div className="news-container">
      <img src="../../assets/mediumLogo.png" style={{ width: '250px' }} alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
