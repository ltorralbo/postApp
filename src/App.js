import React from 'react';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Card from './components/Card';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Card></Card>
    </Provider>
  );
}

export default App;
