import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth;
    const Button = styled.div`
            background: #ffffff;
            border: 1px solid #64748B;
            border-radius: 24px; /* Скругление */
            box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
            min-width: 217px;
            color: #64748B; /* Цвет текста */
            font-family: 'Inter Medium', sans-serif; /* Шрифт */
            padding: 16px 24px; /* Отступы */
            cursor: pointer; /* Указатель при наведении */
            &:hover {
                background: #ffffff;
                border-color: transparent; /* Прозрачная обводка */
                color: #64748B; /* Цвет текста */
                opacity: 0.8; /* Изменение прозрачности при наведении */
            }
            &:active {
                background: #ffffff;
                border-color: transparent;
                color: #64748B;
                opacity: 0.6; /* Изменение прозрачности при наведении */
            }
        `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;