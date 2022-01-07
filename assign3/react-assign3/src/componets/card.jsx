import { useDispatch, useSelector } from "react-redux"

const Card = () => {
  // const [kanban, setKanban] = useState([])
  const dispatch = useDispatch();
  const kanban =useSelector(({kanban}) => kanban)

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="col">
        <div className="card border-dark mb-3">
          <div className="card-header">Backlog</div>
            <div className="card-body">
              {/* <h5 className="card-title">Backlog</h5> */}
              {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
              {}
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-dark mb-3">
          <div className="card-header">In Progress</div>
            <div className="card-body">
              {/* <h5 className="card-title">Backlog</h5> */}
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
              {/* <button onClick={() => ()} type="button" className="btn btn-primary">Take</button> */}
            </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-dark mb-3">
          <div className="card-header">Evaluation</div>
            <div className="card-body">
              {/* <h5 className="card-title">Backlog</h5> */}
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-dark mb-3">
          <div className="card-header">Done</div>
            <div className="card-body">
              {/* <h5 className="card-title">Backlog</h5> */}
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
      </div>
      {JSON.stringify(kanban)}
    </div>
  )
}

export default Card