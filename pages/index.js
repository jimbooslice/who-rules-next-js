
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { CharacterCard } from '../components';
import { Container, Grid, Paper } from '@material-ui/core'

export default function Home() {

  const gridSize = 6;
  return (
    <Container maxWidth="xs">
      
      <h1>Character Bio</h1>
      <Grid container spacing={4}>
        <Grid item sm={gridSize} >
          <CharacterCard />
        </Grid>
        <Grid item sm={gridSize}>
          <CharacterCard />
        </Grid>
        <Grid item sm={gridSize}>
          <CharacterCard />
        </Grid>
        <Grid item sm={gridSize}>
          <CharacterCard />
        </Grid>
      </Grid>

    </Container>
  );
}
