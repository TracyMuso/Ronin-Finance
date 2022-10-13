import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoById } from '../redux/reducers';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { point } = useSelector((point) => point.crypto);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCryptoById(id));
  }, [dispatch, id]);

  if (point.image && point.market_data) {
    return (
      <div className="crypto-dets">
        <div className="detailstaker">
          <div className="back">
            <FaArrowCircleLeft className="icon" onClick={() => navigate('/')} />
            <p>Go back</p>
          </div>
          <img src={point.image.large} alt="coin" className="dets-img" />
          <li className="name">
            Symbol:
            {' '}
            {point.symbol}
          </li>
          <li className="name">
            Name:
            {' '}
            {point.name}
          </li>
          <li className="name">
            Hashing Algorithm:
            {' '}
            {point.hashing_algorithm}
          </li>
          <li className="name">
            Current Price:
            {' '}
            $
            {point.market_data.current_price.usd}
          </li>
          <li className="name">
            Market Cap:
            {' '}
            $
            {point.market_data.market_cap.usd}
          </li>
          <li className="name">
            Circulating Supply:
            {' '}
            {point.market_data.circulating_supply}
          </li>
          <li className="change">
            Creation Date:
            {' '}
            {point.genesis_date}
          </li>
          <li className="name price">
            Price Change 24h:
            {' '}
            <p className={`${point.market_data.price_change_percentage_24h < 0 ? 'red' : 'green'}`}>
              {point.market_data.price_change_percentage_24h.toFixed(2)}
              %
            </p>
          </li>
        </div>
        <footer>
          <p>Designed with love by Tracy</p>
          <span role="img" aria-label="heart">❤️</span>
          <span>copyright &#169; 2022</span>
          {' '}
          <p>powered by CoinGecko</p>
        </footer>
      </div>
    );
  }
  return <div>Loading...</div>;
};
export default Details;
