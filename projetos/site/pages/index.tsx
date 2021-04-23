import styled from 'styled-components'

import { Button } from '@pmdpaula/ui/src/components/Button';

const Title = styled.h1`
  color: blueviolet;
  font-size: 50px;
`

export default function Home() {
  return (
    <div>
      <Title>Nosso site que usa lib de componentes locais</Title>
      <Button />
        {/* Este é o children do botão
      </Button> */}
    </div>
  )
}
