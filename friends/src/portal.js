import ReactDOM from 'react-dom';

const Portal = props => ReactDOM.createPortal(props.children, document.getElementById('portal'));

export default Portal;
