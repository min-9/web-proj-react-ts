import { BrowserRouter } from 'react-router-dom';
import { App } from '../shared';

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
