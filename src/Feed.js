import { useState, useEffect } from "react";

import CreateIcon from "@material-ui/icons/Create";
import SendIcon from "@material-ui/icons/Send";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import EventIcon from "@material-ui/icons/Event";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import firebase from "firebase";
import { db } from "./firebase";

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input}
              placeholder="Write Something ..."
            />
            <button type="submit">
              <SendIcon />
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={PhotoIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={YouTubeIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={EventIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={SpeakerNotesIcon}
            title="Write article"
            color="#FA9295"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
