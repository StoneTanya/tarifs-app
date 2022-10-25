
// Базовый компонент кнопки. Принимает содержимое кнопки и стили
const ButtonBase = ({ style, children }) => {
    return <button style={style}>{children}</button>;
};

const withTheme1 = (Button) => (props) => {
 //  стили, для темы "theme1"
if (props.theme === "theme1") {
    return <Button {...props} style={{ backgroundColor: "red" }} />;
}
    return <Button {...props} />;
};

const withTheme2 = (Button) => (props) => {
 // HOC применяет стили, только если выбрана тема "theme2"
if (props.theme === "theme2") {
    return <Button {...props} style={{ backgroundColor: "green" }} />;
}
    return <Button {...props} />;
};

// ф-я для оборачивания компонента в несколько HOC
const compose = (...hocs) => (BaseComponent) =>
    hocs.reduce((Component, nextHOC) => nextHOC(Component), BaseComponent);

// собираем кнопку, передав нужный набор тем
const Button = compose(withTheme1, withTheme2)(ButtonBase);

export default function ButtonBlock() {
    return (
        <div className="//">
            <Button theme="theme1">"Red"</Button>
            <Button theme="theme2">"Green"</Button>
        </div>
    );
}