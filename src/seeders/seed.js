// src\seeders\seed.ts
import { connectDatabase } from "../config/database.js";
import { runSeeders } from "./index.js";
const bootstrap = async () => {
    try {
        await connectDatabase();
        await runSeeders();
        console.log("All seeders executed successfully");
        process.exit(0);
    }
    catch (error) {
        console.error("Seeder execution failed", error);
        process.exit(1);
    }
};
void bootstrap();
//# sourceMappingURL=seed.js.map