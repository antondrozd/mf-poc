import { init } from "@module-federation/enhanced/runtime";
import { remotes } from "./remotes";

init({ name: "host", remotes });

import("./bootstrap");
