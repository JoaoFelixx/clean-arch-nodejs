import { application } from "./infrastructure/webserver";

application.listen(3000, () => console.log('OK'));