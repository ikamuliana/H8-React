import { useDispatch, useSelector } from "react-redux"

const Evaluate = () => {
  // const [kanban, setKanban] = useState([])
  const dispatch = useDispatch();
  const kanban =useSelector(({kanban}) => kanban)

  return (
		<div className="row">
		<div className="card border-dark mb-3">
			<div className="card-header">Evaluation</div>
				<div className="card-body">
					{/* <h5 className="card-title">Backlog</h5> */}
					<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
    </div>
		</div>
  )
}

export default Evaluate