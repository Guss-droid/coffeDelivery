import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { CoffeeProvider } from "./context/CartContext";
import { FormProvider } from "./context/FormContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeProvider>
          <FormProvider>
            <Router />
          </FormProvider>
        </CoffeeProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}