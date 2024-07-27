import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiBookmark, CiHeart, CiShare2 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import "./index.css";

const SpaceCards = ({
  username,
  title,
  description,
  daysAgo,
  likes,
  comments,
  views,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="post-card-container">
      <div className="post-card" onClick={handleToggleExpand}>
        <div className="post-header">
          <div className="post-user">
            <CgProfile className="post-user-icon" />
            <span className="post-username">{username}</span>
          </div>
          <div className="post-timestamp">
            {daysAgo} days ago
            <CiBookmark />
          </div>
        </div>
        <div className="post-title">{title}</div>
        <div className="post-description">
          {isExpanded ? description : description.substring(0, 100) + "..."}
        </div>
        {isExpanded && (
          <button className="back-button" onClick={handleToggleExpand}>
            Back
          </button>
        )}
        <div className="post-footer">
          <div className="post-meta">
            <span>
              <CiHeart /> {likes}
            </span>
            <span>
              <FaRegComment />
              {comments}
            </span>
          </div>
          <div className="post-views">
            <span>
              <MdOutlineRemoveRedEye /> {views}
            </span>
            <span>
              <CiShare2 />
            </span>{" "}
            {/* This could be a share icon */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpaceCards;
