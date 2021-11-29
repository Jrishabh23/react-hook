interface IButton {
    name: string;
    onClick: () => void;
}
export const Button = ({ onClick, name }: IButton) => {
    return (
        <>
            <button onClick={onClick}>{name}</button>
        </>
    );
};
