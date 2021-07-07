import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import icone from '../../assets/icone.svg'
import Header from "../../components/Header";
import { api } from "../../services/api";

import { Container, Content, TitleContainer, ModulesContainer, ModulesContent, Module, ClassesContainer, ModuleTitle, ClassesContent, Class } from './styles'

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

  const handleClickModule = useCallback((module: IModule) => {
    if (activeModule?.id === module.id) {
      setActiveModule({} as IModule)
    }

    setActiveModule(module)
  }, [activeModule])

  useEffect(() => {
    api.get('/modules').then(response => {
      const data = response.data;

      setModules(data);

    })
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <ModulesContainer>
            <TitleContainer>
              <h1>Módulos</h1>
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
            </ModuleTitle>
            <ClassesContent>
              {activeModule?.classes.map(className => (
                <Class key={className.id}>
                  <div>
                    {className.name}
                  </div>
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