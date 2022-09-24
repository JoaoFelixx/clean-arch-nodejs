import { application } from "./infrastructure/post/webserver";

application.listen(3000, () => console.log('OK'));