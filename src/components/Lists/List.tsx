import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Wish } from '../../types/Wish';

interface Props {
  wishes: Array<Wish>;
}

const List:FC<Props> = ({ wishes }) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Link</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody>
        {wishes ? (
         wishes.map((wish, index) => (
          <tr key={index}>
            <td>
              {/* <img src="https://via.placeholder.com/100" /> */}
            </td>

            <td>{wish.title}</td>

            <td>
              <a href={wish.link} target="_blank">
                {wish.link}
              </a>
            </td>

            <td>
              <Link to="/wishes/id/edit" className="btn btn-sm btn-secondary me-1">
                <i className="bi bi-pencil-square"></i>
              </Link>

              <Link to="/wishes/id/delete" className="btn btn-sm btn-secondary">
                <i className="bi bi-trash"></i>
              </Link>
            </td>
          </tr>
         ))
        ) : (
          <tr>
            <td colSpan={4} className="text-center">
              You haven't added any wishes yet.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default List;
