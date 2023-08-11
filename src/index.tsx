import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = document.getElementById('root');
if (root) {
    ReactDOM.createRoot(root).render(<App/>);
}