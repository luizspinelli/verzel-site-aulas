import { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { api } from '../../services/api';
import { Container, FormContainer } from './styles';

interface IModule {
  id: string;
  name: string;
}

interface Params {
  id: string;
}

interface IClass {
  id: string;
  name: string;
  module_id: string;
  date: string;
}

const EditClass: React.FC = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [module, setModule] = useState('')
  const [modules, setModules] = useState<IModule[]>([])
  const [className, setClass] = useState<IClass>()

  const { id } = useParams<Params>();

  const history = useHistory();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    console.log({ name, module, date })
    try {
      const a = await api.put(`/class/${id}`, { name, module_id: module, date })

      console.log(a)
      history.push('/');

    } catch (error) {
      alert(error.message)
    }
  }, [history, name, date, module, id])

  const handleOption = useCallback(async (id: string) => {
    setModule(id)
  }, [])

  useEffect(() => {
    api.get(`/class/${id}`).then(response => {
      const data: IClass = response.data;

      setClass(data);
      setName(data.name);
      setDate(data.date);
      setModule(data.module_id);

    })
  }, [id]);

  useEffect(() => {
    api.get('/modules').then(response => {
      const data: IModule[] = response.data;

      const orderModules = data.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      })

      setModules(orderModules);

    })
  }, []);

  return (
    <>
      <Header />
      <Container>
        <FormContainer>
          <form>
            <h1>Cadastrar Aula</h1>
            <div>
              <input type="text" placeholder="Nome" value={name} defaultValue={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div>
              <input type="date" placeholder="Data" value={date} defaultValue={date} onChange={(e) => { setDate(e.target.value) }} />
            </div>
            <div>
              <select onChange={(e) => handleOption(e.target.value)}>
                {modules.map(m => (
                  m.id === className?.module_id ?
                  (<option
                    key={m.id} 
                    value={m.id} 
                    onChange={(e) => handleOption(m.id)}
                    selected
                  >
                    {m.name}
                  </option>) :
                  (<option
                    key={m.id} 
                    value={m.id} 
                    onChange={(e) => handleOption(m.id)}
                  >
                    {m.name}
                  </option>)
                ))}
              </select>
            </div>
            <button onClick={handleSubmit}>Alterar</button>
          </form>
        </FormContainer>
      </Container>
    </>
  )
}

export default EditClass;