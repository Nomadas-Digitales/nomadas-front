import { auth } from "service";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await auth.login({
        email: "maidersonn@gmail.com",
        password: "maider",
      });
      console.log(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <header>Nomadas Digitales. </header>
    </div>
  );
};

export default App;
