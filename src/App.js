import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

function App(props) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if(data.apiData) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => {
          // dispatch fetchData
        }}>Thunk!</button>
        <button onClick={() => {
          // dispatch reset
        }}>Clear</button>
        <button onClick={() => {
          // dispatch next
        }}>Next</button>
        <button onClick={() => {
          // dispatch prev
        }}>Back</button>
      </div>
      <input value={ data.objectId } onChange={(e) => {
        // dispatch setArtId
      }} />
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}

export default App;