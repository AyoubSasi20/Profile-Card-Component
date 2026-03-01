import "./App.css";
import { useState } from "react";

function App() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(1999);
  const handleFollowClick = () => {
    if (isFollowing === false) {
      setIsFollowing(true);
      setFollowersCount(2000);
    } else {
      setIsFollowing(false);
      setFollowersCount(1999);
    }
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <img src="profile-img.png" alt="Profile" />
          </div>
          <div className="card-content">
            <h1>John Deo</h1>
            <h2>Frontend Developer</h2>
            <p>
              Passionate frontend developer with expertise in HTML, CSS,
              JavaScript, and React.
            </p>
            <div className="stats">
              <div>
                <h3>{followersCount}</h3>
                <p>Followers</p>
              </div>
              <div>
                <h3>190</h3>
                <p>Following</p>
              </div>
              <div>
                <h3>15</h3>
                <p>Project</p>
              </div>
            </div>
            <div className="buttons">
              <button onClick={handleFollowClick}>
                {isFollowing ? "Following" : "Follow"}
              </button>
              <button>View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
