import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth; 
    const Button = styled.div`
        background: #ffffff;
        border: 1px solid #64748B;
        border-radius: 24px; /* Скругление */
        box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
        min-width: 34px;
        color: #64748B; /* Цвет текста */
        font-family: 'Inter Medium', sans-serif; /* Шрифт */
        padding: 12px 24px; /* Отступы */
        cursor: pointer; /* Указатель при наведении */
        &:hover {
            background: linear-gradient(180deg, #4D9FF0 0%, #36699D 100%);
            border-color: #64748B;
            color: #ffffff;
        }
        &:active {
            background: #152842;
            border-color: #152842;
            color: #ffffff;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;