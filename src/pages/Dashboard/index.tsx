import React, { useCallback, useEffect, useState } from "react";
import { FiDelete, FiEdit, FiPlusCircle } from 'react-icons/fi';
import { Link } from "react-router-dom";
import icone from '../../assets/icone.svg';
import Header from "../../components/Header";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Class, ClassesContainer, ClassesContent, Container, Content, Module, ModulesContainer, ModulesContent, ModuleTitle, TitleContainer } from './styles';
interface IModule {
  id: string;
  name: string;
  classes: IClass[];
}
interface IClass {
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const [modules, setModules] = useState<IModule[]>([])
  const [activeModule, setActiveModule] = useState<IModule>()

  const { user } = useAuth()

  const handleClickModule = useCallback((module: IModule) => {
    if (activeModule?.id === module.id) {
      setActiveModule({} as IModule)
    }

    setActiveModule(module)
  }, [activeModule]);

  const handleDeleteModule = useCallback((id: string) => {
    const check = window.confirm('Deseja deletar o módulo?');
    try {
      if (check) {
        const newModules = modules.filter(module => module.id !== id).sort((a, b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });

        setModules(newModules);

        api.delete(`modules/${id}`)
      }
    } catch (error) {
      alert(error.message)
    }

  }, [modules])

  const handleDeleteClass = useCallback((id: string) => {
    const check = window.confirm('Deseja deletar a aula?');
    try {
      if (check) {
        api.delete(`class/${id}`);
        const newActiveModule: IModule = {
          id: activeModule?.id || '',
          name: activeModule?.name || '',
          classes: activeModule?.classes.filter(className => className.id !== id) || []
        }

        setActiveModule(newActiveModule)
      }
    } catch (error) {
      alert(error.message)
    }

  }, [activeModule?.id, activeModule?.name, activeModule?.classes])

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
        <Content>
          <ModulesContainer>
            <TitleContainer>
              <div className="titleBox">
                <h1>Módulos</h1>
                {user &&
                  <Link to={`/newModule`}>
                    <FiPlusCircle />
                  </Link>
                }
              </div>
              <p>Selecione o módulo para ver as aulas disponíveis</p>
              <ModulesContent>
                {modules.map(moduleName => (
                  <Module key={moduleName.id} onClick={() => { handleClickModule(moduleName) }} active={moduleName.id === activeModule?.id}>
                    <div>
                      <img src={icone} alt="Ícone Aulas" />
                      <div>
                        <h5>{moduleName.name}</h5>
                        <span>{moduleName.classes.length} aulas</span>
                      </div>
                    </div>
                    {user &&
                      <div className="optionsBox">

                        <Link to={`/editModule/${moduleName.id}`}>
                          <FiEdit />
                        </Link>
                        <button onClick={() => { handleDeleteModule(moduleName.id) }}>
                          <FiDelete />
                        </button>
                      </div>
                    }
                  </Module>
                ))}
              </ModulesContent>
            </TitleContainer>
          </ModulesContainer>
          <ClassesContainer>
            <ModuleTitle>
              <img src={icone} alt="Ícone Aulas" />
              <div>
                <h1>{activeModule?.name}</h1>
                <p>Todas as aulas disponíveis nesse módulo:</p>
              </div>
              {user &&
                  <Link to={`/newClass`}>
                    <FiPlusCircle />
                  </Link>
                }
            </ModuleTitle>
            <ClassesContent>
              {activeModule?.classes.map(className => (
                <Class key={className.id}>
                  <div>
                    {className.name}
                  </div>
                  {user &&
                    <div className="optionsBox">
                      <Link to={`/editClass/${className.id}`}>
                        <FiEdit />
                      </Link>
                      <button onClick={() => { handleDeleteClass(className.id) }}>
                        <FiDelete />
                      </button>
                    </div>
                  }
                </Class>
              ))}
            </ClassesContent>
          </ClassesContainer>
        </Content>
      </Container>
    </>
  )
}

export default Dashboard;