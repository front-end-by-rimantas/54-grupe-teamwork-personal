import { header } from "../components/header.js";
import { blueTitleColumn } from "../components/blue-title-column.js";
import { aboutFreeText } from "../components/about-free-text.js";
import { aboutTools } from "../components/about-tools.js";

import { footer } from "../components/footer.js";

header();
blueTitleColumn("About Me", "About Me", "./about/index.html");
aboutFreeText();
aboutTools();
footer();
