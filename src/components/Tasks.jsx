import { Check, ChevronRight, Trash2} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Tasks({tasks, onTaskClick, onTrashClick}) {
    const navigate = useNavigate();

    function onSeeDetailsClick (task) {
        const query = new URLSearchParams();
        query.set('title', task.title);
        query.set('description', task.description);
        navigate(`/task?${query.toString()}`);
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">

            {tasks.map((task) => (
                <li key={task.id} className='flex gap-2'>

                    <button onClick={() => onTaskClick(task.id)}
                     className={` flex text-left bg-slate-400 w-full text-white p-2 rounded-md ${task.isComplited && 'line-through'}`}>
                        {task.isComplited && <Check />}
                        {task.title}
                    </button>

                    <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
                        <ChevronRight />
                    </button>
                    <button onClick={() => onTrashClick(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
                        <Trash2 />
                    </button>

                </li>
            ))}
        </ul>
    );
}

export default Tasks;