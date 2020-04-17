import React from "react";
import { Home } from "./containers/Home/Home";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { Switch, Route } from "react-router-dom";
import { Watch } from "./containers/Watch/Watch";

function App() {
    return (
        <AppLayout>
            <Switch>
                <Route path="/watch" component={Watch} />
                <Route path="/" component={Home} />
            </Switch>
        </AppLayout>
    );
}

export default App;
