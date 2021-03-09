import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository = {
  name: 'next',
  description: 'next repository',
  link: 'https://github.com/eltoncampos1/Next-App-Boilerplate'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
