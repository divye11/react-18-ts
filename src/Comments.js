/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useData } from "./data";

export default function Comments() {
  const comments = useData();
  return (
    <>
      {comments.map((comment, i) => (
        <div className="comment" key={i}>
          <div className="comment-heading">
            <div className="comment-info">
              <a href="#" className="author">
                {comment.user}
              </a>
              <p className="datetime">{comment.datetime}</p>
            </div>
          </div>
          <div className="comment-body">
            <p>{comment.comment}</p>
            <button
              type="button"
              onClick={() => {
                window.alert(`Replied to comment ${i + 1}!`);
              }}
            >
              Reply
            </button>
            <button
              type="button"
              onClick={() => {
                window.alert(`Comment ${i + 1} has been flagged!`);
              }}
            >
              Flag
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
