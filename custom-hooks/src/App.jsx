import './App.css'
import useStorage from './useStorage'

function App() {

  const [content, setContent] = useStorage('content', '');

  return (
    <>
      <div>
        <input
          type="text"
          value={content} 
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder='🔍 Search here...'
        />
      </div>
    </>
  );
}

export default App;