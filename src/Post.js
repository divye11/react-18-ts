/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export default function Post() {
  return (
    <div className="my-post">
      <div>
        <a href="#" className="author">
          Dan Abramanov
        </a>
        <a href="#" className="author-handle">
          @danab
        </a>
        <p className="datetime">1 month ago</p>
      </div>
      <p>
        React 18 includes architectural improvements to React server-side
        rendering (SSR) performance. Also React.lazy "just works" with SSR now!
      </p>
    </div>
  );
}
