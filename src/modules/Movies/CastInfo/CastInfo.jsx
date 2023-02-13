import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getCredits } from 'shared/services/movies-api';

const CastInfo = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  console.log('Це id з useParams', id);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await getCredits(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [id]);

  console.log('Ось такий Cast ми отримали після запиту про касти:', cast);

  //   const elements = cast.map(({ id, name, character, profile_path }) => (
  //     <li key={id}>
  //       <img src={`https://image/tmdb.org/t/p/w500/${profile_path}`} alt="" />
  //       <p>{name}</p>
  //       <p>{character}</p>
  //     </li>
  //   ));

  return (
    <>
      {loading && <Loader />}
      {/* {cast.length !== 0 ? <p>cast не пустий</p> : <p>сast пустий</p>} */}
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt=""
              />
            )}
            <p>{name}</p>><p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

// const elements = cast.map(({ id, name, character, profile_path }) => (
//     <li key={id}>
//       <img src={`https://image/tmdb.org/t/p/w500/${profile_path}`} alt="" />
//       <p>{name}</p>
//       <p>{character}</p>
//     </li>
//   ));

//   return (
//     <>
//       {loading && <Loader />}
//       {cast.length !== 0 ? <p>cast не пустий</p> : <p>сast пустий</p>}
//       <ul>{elements}</ul>
//     </>
//   );
// };

export default CastInfo;
