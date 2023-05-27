import React from 'react';

// navigation
import Navigation from './src/components/navigations/Navigation';

// packages
import {ToastProvider} from 'react-native-toast-notifications';

const App = () => {
  return (
    <ToastProvider
      duration={800}
      placement="bottom"
      successColor="#56a641"
      dangerColor="#FF4545"
      warningColor="#FFC745">
      <Navigation />
    </ToastProvider>
  );
};

export default App;
