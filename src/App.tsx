import Categories from "./components/Categories";
import PublishedAt from "./components/PublishedAt";
import Text from "./components/Text";
import Profile from "./components/Profile";
import illustration from "../src/assets/images/illustration-article.svg";

function App() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "hsl(47, 88%, 63%)",
      }}
    >
      <div
        className="card p-4"
        style={{
          width: "22rem",
          height: "30rem",
          borderColor: "black",
          borderRadius: "30px",
          borderRightWidth: "8px",
          borderBottomWidth: "8px",
        }}
      >
        <img src={illustration} alt="alt" className="rounded" />
        <Categories />
        <PublishedAt />
        <Text />
        <Profile />
      </div>
    </div>
  );
}

export default App;
