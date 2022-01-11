import { useState, useEffect } from "react";
import {useHistory, useParams} from "react-router-dom";


const Edit = () => {
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/blogs/${id}`)
      .then((response) => {
        if (response) {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          setTitle((state) => data.title || state);
          setBody((state) => data.body || state);
          setAuthor((state) => data.author || state);
          setIsPending(false);
        }
      }); 
},[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch(`http://127.0.0.1:3000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": " application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push(`/blogs/${id}`);
    });
  };

  return (
    <div className="create">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        <button disabled={isPending}>{(isPending && 'Loading...') || 'Edit blog'}</button>
      </form>
    </div>
  );
};

export default Edit;
