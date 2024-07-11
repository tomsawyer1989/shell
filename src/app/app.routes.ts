import { Routes } from '@angular/router';
import { loadRemoteModule } from "@angular-architects/module-federation";

export const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            loadRemoteModule({
                type: "module",
                remoteEntry: "http://localhost:4201/remoteEntry.js",
                exposedModule: "./mf1Routes"
            }).then(m => m.routes)
    }
];
