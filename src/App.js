import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Post from './components/Post';
import Comment from './components/Comment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

var obj = {
  pro_img: "https://images.unsplash.com/photo-1651493284167-827aaab0f50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  post_img: [
    {
      src: "https://images.unsplash.com/photo-1651582859880-9b96a348a211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80",
      comment: [
        {
          id: "martin_king",
          text: 'Cam Perfecto !!!!1',
          time : '7d'

        },
        {
          id: "i_am_s",
            text: 'The artistic look damn',
            time: '3w'
          },
        {
          id: "itz_x",
              text: 'Cool and dark photography, best combinations ever exist',
              time: '1m'
        },
        {
          id: "u_no_me",
                text: 'Can there  be any more perfection, congratulations boy on passing your first test',
          time: '2w'
        }
      ]
    },
    {
      src: "https://images.unsplash.com/photo-1651592597975-0fde071703cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      comment: [
        {
          id: "martin_king",
          text: 'Cam Perfecto !!!!1',
          time :'2d'
        },
        {
          id: "i_am_s",
            text: 'The artistic look damn',
            time :'2m'
        },
        {
          id: "itz_x",
              text: 'Cool and dark photography, best combinations ever exist',
              time :'5m'
        },
        {
          id: "u_no_me",
                text: 'Can there  be any more perfection, congratulations boy on passing your first test',
                time :'5d'
        },
        {
          id: "Abca",
          text: 'Lorem Ipsum',
          time :'2d'
        },
        {
          id: "Abca",
            text: 'Lorem Ipsum',
            time :'2d'
        },
        {
          id: "Abca",
              text: 'Lorem Ipsum',
              time :'2d'
        },
        {
          id: "Abca",
                text: 'Lorem Ipsum',
                time :'2d'
        }
      ]
    },
    {
      src: "https://images.unsplash.com/photo-1651596568011-0ef5956d1194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      comment: [
        {
          id: "martin_king",
          text: 'Cam Perfecto !!!!1',
          time :'2d'
        },
        {
          id: "i_am_s",
            text: 'The artistic look damn',
            time :'2m'
        },
        {
          id: "itz_x",
              text: 'Cool and dark photography, best combinations ever exist',
              time :'5m'
        },
        {
          id: "u_no_me",
                text: 'Can there  be any more perfection, congratulations boy on passing your first test',
                time :'5d'
        },
        {
          id: "Abca",
          text: 'Lorem Ipsum',
          time :'2d'
        },
        {
          id: "Abca",
            text: 'Lorem Ipsum',
            time :'2d'
        },
        {
          id: "Abca",
              text: 'Lorem Ipsum',
              time :'2d'
        },
        {
          id: "Abca",
                text: 'Lorem Ipsum',
                time :'2d'
        }
      ]
    },
    {

      src: "https://images.unsplash.com/photo-1651661268925-de0ea060181f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      comment: [
        {
          id: "Abca",
            text: 'Lorem Ipsum',
          time :'2d'
        },
        {
          id: "Abca",
              text: 'Lorem Ipsum',
              time :'2d'
        },
        {
          id: "Abca",
                text: 'Lorem Ipsum',
                time :'2d'        },
        {
          id: "martin_king",
          text: 'Cam Perfecto !!!!1',
          time :'1y'},
        {
          id: "i_am_s",
            text: 'The artistic look damn',
            time :'3d'
        },
        {
          id: "itz_x",
              text: 'Cool and dark photography, best combinations ever exist',
          time :'2d'  
          },
        {
          id: "u_no_me",
                text: 'Can there  be any more perfection, congratulations boy on passing your first test',
                time :'2w'},
        {
          id: "Abca",
          text: 'Lorem Ipsum',
          time :'2d'
        },
        
      ]
    }]
}

function App() {
  localStorage.setItem('obj', JSON.stringify(obj));
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main content={obj} />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/comment/:id' element={<Comment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
