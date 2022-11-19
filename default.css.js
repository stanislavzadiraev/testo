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
    color: rgb(120 120 120);
    font-family: "Trebuchet MS", Helvetica, sans-serif;
}

header {
    background-color: rgb(20 20 10);
}

div {
  padding: 10px;
}

body {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgb(10 10 10);
}

.center {
    display: grid;
    justify-content: center;
    align-items: center;
}

a
{
    text-decoration: none;
    color: rgb(200 200 200);
    transition-duration: 400ms;
}

a:hover {
    color: white;

}

h1 {
    font-size: 64px;
}

p {
    font-size: 20px;
}
`
