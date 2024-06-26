import styled from 'styled-components';
import SearchIcon from '../../../../Icons/SearchIcon';
import IconOnlyButton from '../../../../Components/IconOnlyButton';

const WrapperInput = styled.div`
    position:relative;
    width: 216px;
`;

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    width: 100%;
    padding: 8px 16px 8px 16px; /* Adjusted padding */
    &:hover {
        background-color: #F8FAFC;
    }
    &:focus {
        background: white;
    }
`;

const SearchIconWrapper = styled.div`
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>  
            <Input className='' placeholder='Найти'/>
            <SearchIconWrapper className='p-2'>
                <IconOnlyButton icon={<SearchIcon />} />
            </SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;