import { useEffect, useState } from "react";

function Teacher() {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: 'Anil',
      createdAt: '123123'
    },
    {
      id: 2,
      name: 'Sunil',
      createdAt: '123321'
    }
  ]);

  useEffect(() => {
    fetch(`http://localhost:1337/api/teachers`)

      .then((res) => res.json())


      .then((data) => {
        let newTeachers = data.data.map((cv) => {
          return {
            id: cv.id,
            name: cv.attributes.name,
            createdAt: cv.attributes.createdAt
          };
        });
        setTeachers(newTeachers);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <br /><hr />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {
              teachers.map((cv, idx, arr) => (
                <tr key={idx}>
                  <td>{cv.id}</td>
                  <td>{cv.name}</td>
                  <td>{cv.createdAt}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Teacher;
