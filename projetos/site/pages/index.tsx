import styled from 'styled-components'
import { UIProvider } from '@pmdpaula/ui/src/theme/UIProvider';

import Button from '@pmdpaula/ui/src/components/Button';

const Title = styled.h1`
  color: blueviolet;
  font-size: 50px;
`

export default function Home() {
  return (
    <UIProvider>
      <div>
        <Title>Nosso site que usa lib de componentes locais</Title>
        <Button>
          Botão do site
        </Button>
      </div>
    </UIProvider>
  )
}
