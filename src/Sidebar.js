/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const options = [
  "Home",
  "Explore",
  "Notifications",
  "Messages",
  "Bookmarks",
  "Lists",
  "Profile",
  "More",
];

export default function Sidebar() {
  return (
    <>
      <h1 className="logo">Desi Twitter</h1>
      <ul className="options">
        {options.map((option, i) => (
          <li
            key={i}
            onClick={() => {
              window.alert(`${option} clicked!`);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </>
  );
}
