/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as ReactDOM from "react-dom";
// import { hydrateRoot } from "react-dom/client";
import App from "./App";

ReactDOM.render(document, <App assets={window.assetManifest} />);
