import { useDispatch, useSelector } from "react-redux"

const Inprogress = () => {
  // const [kanban, setKanban] = useState([])
  const dispatch = useDispatch();
  const kanban =useSelector(({kanban}) => kanban)

  return (
    <div className="row">
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
  )
}

export default Inprogress