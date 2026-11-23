// SPDX-License-Identifier: MIT
const LINE =
  "WARNING: This human runs on 4 hours of sleep, caffeine, and spite. Do not operate before coffee. Side effects include unsolicited opinions.";
if (LINE.length > 160 || LINE.includes("\n")) {
  throw new Error("warning label must be one line of at most 160 characters");
}
console.log(LINE);
