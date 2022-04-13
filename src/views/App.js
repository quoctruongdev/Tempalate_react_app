import "./App.scss";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";

import { Switch, withRouter, Route } from "react-router";
import { renderRoutesAdmin, renderRoutesHome } from "../routes";
import AuthPage from "../containers/AdminTemplate/AuthPage";
import PageNotFound from "../containers/PageNotFound";
import { Suspense } from "react";
import Loader from "../components/Loader/Loader";
// import { actTryLogin } from "./containers/Admin/AuthPage/modules/actions";
// import BackToTop from "./components/BackToTop/BackToTop";
// import { actTryLoginHome } from "./containers/Home/_components/Login/modules/actions";

function App(props) {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actTryLogin(props.history));
  //   dispatch(actTryLoginHome(props.history));
  // }, [dispatch, props.history]);

  return (
    <Suspense
      fallback={
        <>
          <Loader />
        </>
      }
    >
      {/* <BackToTop /> */}
      <Switch>
        {renderRoutesHome()}
        {renderRoutesAdmin()}
        <Route path="/auth" component={AuthPage} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
