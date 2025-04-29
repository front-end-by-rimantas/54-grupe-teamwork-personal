import { header } from "../components/header.js";
import { blueTitleColumn } from "../components/blue-title-column.js";
import { aboutMe } from "../components/about-me.js";
import { aboutTools } from "../components/about-tools.js";
/* My Qualifications */
import { clientFeedbackSection } from "../components/client-feedback-section.js";
import { subFooter } from "../components/sub-footer.js";
import { footer } from "../components/footer.js";

header();
blueTitleColumn("About Me", "About Me", "./about/index.html");
aboutMe();
aboutTools();
/* My Qualifications */
clientFeedbackSection();
subFooter();
footer();
