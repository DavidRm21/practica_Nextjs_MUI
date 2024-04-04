import * as React from "react"
import { theme } from "./utils/theme"
import { Container, Stack, Button, Typography, ThemeProvider } from'@mui/material';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeProvider theme ={theme}>
        <Typography variant="h1">Hola mundo</Typography>
      </ThemeProvider>
    </main>
  );
}
