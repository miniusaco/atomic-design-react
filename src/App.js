import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "いぬっこ",
  image: "https://source.unsplash.com/BJaqPaH6AGQ",
  email: "one@example.com",
  phone: "111-1111-1111",
  company: {
    name: "いぬいぬ会社"
  },
  website: "http://mole.com"
};

export default function App() {
  return <Router />;
}
