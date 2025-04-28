import { header } from "../components/header.js";
import { blueTitleColumn } from "../components/blue-title-column.js";
import { contactsForms } from "../components/contacts-forms.js";
import { footer } from "../components/footer.js";



header();
blueTitleColumn('Contact Us', 'Contact Us', './contacts/index.html')
contactsForms();
footer();