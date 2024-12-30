"use client"
import {useState }  from "react"; 
const Comments = () => {
    const [comments, setComments] = useState<string[]>([]);
    const [comment, setComment] = useState<string>("");
  
    const handleAddComment = () => {
      setComments([...comments, comment]);
      setComment(""); 
    };
  
    return (
      <div className="border border-black p-4 rounded">
        <h3>Comments</h3>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className=" h-10 text-black" placeholder="Add a comment"
        />
        <button onClick ={handleAddComment} className="bg-black flex gap-5 text-white rounded-full p-2 hover:bg-yellow-400">Submit</button>
        <ul>
          {comments.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Comments;
  