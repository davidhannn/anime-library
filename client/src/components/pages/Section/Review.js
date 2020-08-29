import React, { useState } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

const Review = (props) => {
  const [Review, setReview] = useState("");
  const handleChange = (e) => {
    setReview(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      content: Review,
      user: localStorage.getItem("userId"),
      id: props.id,
    };

    Axios.post("/review/saveReview", variables).then((response) => {
      if (response.data.success) {
        setReview("");
        props.refreshFunction(response.data.result);
      } else {
        alert("Failed to saved review");
      }
    });
  };

  return (
    <div>
      <br />
      <p> Replies </p>
      {/* Comment List */}
      {console.log(props.ReviewList)}

      {/* {props.ReviewList && props.ReviewList.map((comment, index) => {
          <React.Fragment>
              <SingleReview />
          </React.Fragment>
      })} */}
      {/* Root Comment Form */}
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <input
          style={{ width: "100%", borderRadius: "5px" }}
          onChange={handleChange}
          value={Review}
          placeholder="write some comments"
        />
        <br />
      </form>
      <Button style={{ width: "20%", height: "52px" }} onClick={onSubmit}>
        Submit
      </Button>
      <form></form>
    </div>
  );
};

export default Review;
