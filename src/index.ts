import { application } from "./infrastructure/webserver";

const PORT = process.env.PORT || 3000;

application.listen(PORT, () => 
  console.log(`Server running at port ${PORT}`));