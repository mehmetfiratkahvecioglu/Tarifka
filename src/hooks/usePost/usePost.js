import {useState} from 'react';
import axios from 'axios';

export default function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const post = async (url, value) => {
    try {
      const {data: responseData} = await axios.post(url, value);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {data, loading, error, post};
}
