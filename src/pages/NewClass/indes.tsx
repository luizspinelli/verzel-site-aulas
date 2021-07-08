import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { api } from '../../services/api';
import { Container, FormContainer } from './styles';

interface IModule {
  id: string;
  name: string;
}

const NewClass: React.FC = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [module, setModule] = useState('')
  const [modules, setModules] = useState<IModule[]>([])

  const history = useHistory();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    console.log({ name, module, date })
    try {
      const a = await api.post(`/class`, { name, module_id: module, date })

      console.log(a)
      history.push('/');

    } catch (error) {
      alert(error.message)
    }
  }, [history, name, date, module])

  const handleOption = useCallback(async (id:string) => {
    setModule(id)
  }, [])

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
          <form action="">
            <h1>Cadastrar Aula</h1>
            <div>
              <input type="text" placeholder="Nome" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div>
              <input type="date" placeholder="Data" value={date} onChange={(e) => { setDate(e.target.value) }} />
            </div>
            <div>
              <select onChange={(e) => handleOption(e.target.value)}>
                {modules.map(module => (
                  <option key={module.id} value={module.id} onChange={(e) => handleOption(module.id)}>{module.name}</option>
                ))}
              </select>
            </div>
            <button onClick={handleSubmit}>Cadastrar</button>
          </form>
        </FormContainer>
      </Container>
    </>
  )
}

export default NewClass;