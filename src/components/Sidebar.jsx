// Sidebar.jsx
import PropTypes from 'prop-types';
import '../styles/Sidebar.css';

const Sidebar = ({ setOption }) => {
  return (
    <div className="sidebar">
      <button onClick={() => setOption('document')}>Game Design Document</button>
      <button onClick={() => setOption('node')}>Node-based Interface</button>
      <button onClick={() => setOption('assets')}>Asset Library</button>
      <button onClick={() => setOption('kanban')}>Kanban Board</button>
    </div>
  );
};

Sidebar.propTypes = {
  setOption: PropTypes.func.isRequired,
};

export default Sidebar;
