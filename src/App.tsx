import { Provider } from 'react-redux';
import './App.css'
import CrudPage from './pages/CrudPage';
import { store } from './store';

function App() {

  return (
      <Provider store={store}>
          <CrudPage></CrudPage>
      </Provider>
  )
}

export default App
