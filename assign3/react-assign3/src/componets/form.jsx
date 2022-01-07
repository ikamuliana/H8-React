import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { kanbanForm } from '../store/actions/input';
import { Tobacklog } from "../store/actions/toBacklog";



function Form () {
  // const [kanban, setKanban] = useState([])
  // const [task, setTask] = useState("")
  const dispatch = useDispatch()
  const kanban = useSelector(({kanban}) => kanban)

  // const data = [...props.data]


  // const handleAdd = () => {
  //   dispatch(kanbanForm())
  //     // setKanban([...kanban, task]);
  //     // setTask("")
  //     // console.log(task)
  // }

    // const handleDelete = () => {
    //     const newData = [...kanban]
    //     newData.shift()
    //     setKanban(newData)
    //     // console.log(newData)
    // }

  return (
    <div>
      <form>
        <div className="mb-3">
          <input type="text" value={kanban.inputkanban} placeholder='New Task' onChange={(event) => dispatch(kanbanForm(event.target.value))}/>
          {/* <input type="text" id="name" placeholder='New Task' value={task} onChange={(event) => setTask(event.target.value)}/> */}
        </div>
        <button onClick={() => dispatch(Tobacklog(kanban.inputkanban))} type="button" className="btn btn-primary">Save to Backlog</button>
      </form>
			<br />
			<br />
      {/*  */}
      {/* <div className="card-body">
        {data.length === 0 ? (

        )
        } */}
        {/* {
          kanban.map((item, index) => (
            <div key={index} className="card bg-primary mb-3">
              <div className="d-flex justify-content-between">
                <p className="pb-3 mb-0 small lh-sm overflow-auto">
                  <strong className="d-block text-black">{item}</strong>
                </p>
              </div>
            </div>
        ))
        } */}
      {/* </div> */}
    </div>
  )
}


export default Form