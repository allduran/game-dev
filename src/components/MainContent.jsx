// MainContent.jsx
import PropTypes from "prop-types";
import GameDesignDocument from "./GameDesignDocument";
import NodeInterface from "./NodeInterface";
import AssetLibrary from "./AssetLibrary";
import KanbanBoard from "./KanbanBoard";
import "../styles/MainContent.css";

const MainContent = ({ option }) => {
  switch (option) {
    case "document":
      return (
        <div className="main-content-container">
          <div className="main-content-inner">
            <GameDesignDocument />
          </div>
        </div>
      );
    case "node":
      return (
        <div className="main-content-container">
          <div className="main-content-inner">
            <NodeInterface />
          </div>
        </div>
      );
    case "assets":
      return (
        <div className="main-content-container">
          <div className="main-content-inner">
            <AssetLibrary />
          </div>
        </div>
      );
    case "kanban":
      return (
        <div className="main-content-container">
          <div className="main-content-inner">
            <KanbanBoard />
          </div>
        </div>
      );
    default:
      return (
        <div className="main-content-container">
          <div className="main-content-inner">
            <div className="main-content-placeholder">
              Select an option from the sidebar
            </div>
          </div>
        </div>
      );
  }
};

MainContent.propTypes = {
  option: PropTypes.string.isRequired,
};

export default MainContent;
