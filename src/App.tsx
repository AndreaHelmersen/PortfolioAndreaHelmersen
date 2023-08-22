import { PortfolioHeader } from "./components/PortfolioHeader";
import { ProjectList } from "./components/ProjectList";

export const App = () => {
  return (
    <div style={{ padding: "3vh" }}>
      <PortfolioHeader />
      <ProjectList />
    </div>
  );
};
