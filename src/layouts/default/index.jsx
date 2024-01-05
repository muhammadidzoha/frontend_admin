import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes.js";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from 'services/config';

export default function Default(props) {
  const { ...rest } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [username, setUsername] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";
    for (const element of routes) {
      if (
        window.location.href.indexOf(element.layout + "/" + element.path) !== -1
      ) {
        setCurrentRoute(element.name);
      }
    }
    return activeRoute;
  };

  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (const element of routes) {
      if (window.location.href.indexOf(element.layout + element.path) !== -1) {
        return element.secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/main") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  useEffect(() => {
    reToken();
  }, []);

  const reToken = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/auth/token`, {
        withCredentials: true,
      });
      const decoded = jwtDecode(response.data.accessToken);
      setUsername(decoded.name);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error.response);
      navigate("/auth/sign-in");
    }
  };

  const Logout = async () => {
    try {
      await axios.delete(`${BASE_URL}/api/auth/logout`, {
        withCredentials: true,
      });
      navigate("/auth/sign-in");
    } catch (error) {
      console.log(error.response);
    }
  };

  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        isLoggedIn={isLoggedIn}
      />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Horizon UI Tailwind React"}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              username={username}
              onClick={Logout}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
