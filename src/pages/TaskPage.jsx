import { ChevronLeft } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function TaskPage() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const title = searchParams.get('title');
    const description = searchParams.get('description');

  return (
    <div className="h-screen w-screen bg-slate-500 flex p-6 justify-center">

        <div className='w-[500px] space-y-4'>

            <div className='flex justify-center relative mb-6'>
              <button className='absolute left-0 top-0 bottom-0 p-2 text-slate-300 transition-colors duration-200' onClick={() => navigate('/')}>
                <ChevronLeft />
              </button>
              <h1 className="text-3xl text-slate-100 font-bold text-center">Detalhes da Tarefa</h1>
            </div>

            <div className='bg-slate-400 p-4 rounded-md shadow-sm'>

                <h2 className='text-slate-100 font-bold text-xl'>{title}</h2>
                <p className='text-slate-100'>{description}</p>
                
            </div>
        </div>
    
    </div>
  );
}

export default TaskPage;