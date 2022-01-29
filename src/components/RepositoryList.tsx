import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

// https://api.github.com/orgs/rocketseat/repos
const repos = [
  {
    name: "unform1",
    description: "Forms in React",
    html_url: "https://github.com/unform/unform",
  },
  {
    name: "unform2",
    description: "Forms in React",
    html_url: "https://github.com/unform/unform",
  },
  {
    name: "unform3",
    description: "Forms in React",
    html_url: "https://github.com/unform/unform",
  },
];

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    // fetch("https://api.github.com/orgs/rocketseat/repos")
    //   .then((response) => response.json())
    //   .then((data) => setRepositories(data));
    setRepositories(repos);
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
