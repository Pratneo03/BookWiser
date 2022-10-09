import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams(); //We make use of hook called params here.
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
export default ProductScreen;
