export default () =>
`*,
html {
    margin: 0;
    padding: 0;
    border: 0;
}

html {
    width: 100%;
    height: 100%;
}

body {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgb(195 111 0);
}

.center {
    width: 100%;
    height: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    text-align: center;
}

h1 {
    font-size: 64px;
}

p {
    font-size: 24px;
}
`
