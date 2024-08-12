import { useState,useEffect } from 'react'



// ...



import './App.css'
import { data } from 'autoprefixer';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [image, setImage] = useState([]);
  const [loading, setloading] = useState(true);
  const [term, setTerm] = useState('');
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImage(data.hits);
        setloading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <><div className="container mx-auto">
    <ImageSearch searchText={(text) => setTerm(text)} />

    {!loading && image.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

    {loading? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
      {image.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>}
  </div>
    </>
  )
}

export default App
