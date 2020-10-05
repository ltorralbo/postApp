import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
    
}

html, body, #root {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

body {
    font: 14px 'Roboto', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
    
}
*::-webkit-input-placeholder {
    color: #cfe0ed;
}

ul {
    list-style: none;
}`;
