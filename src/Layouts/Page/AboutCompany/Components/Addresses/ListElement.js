import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`

`;

const ButtonLeftWrapper = styled.div`
    padding-right:6px;
    &:hover {
        opacity: 80%;
    }
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <Option className='flex-grow-1'>{props.children}</Option>

                <ButtonLeftWrapper>
                    <IconOnlyButton icon={<EditIcon/>}/>
                </ButtonLeftWrapper>

                <ButtonLeftWrapper>
                    <IconOnlyButton icon={<RemoveIcon/>}/>
                </ButtonLeftWrapper>
        </div>
    );
}

export default ListElement;