import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";


function Addresses() {
    const mainDivStyle = {
        width: '453px',
        height: '420px',
        padding: '24px',
        position: 'relative'
    };

    const ButPosition = {
        position: 'absolute',
        bottom: '0',
        left: '0'
    };

    return (
        <div style={{ minWidth: '447px' }}  className='d-flex flex-column justify-content-between'>
            <div className= ' d-flex flex-column gap-2 mt-4 justify-content-between'>

                <div className='title mb-3'>Адреса заведений</div>

                <div className='d-inline-flex flex-column gap-3'>
                    <div style={{ marginTop: '16px', marginBottom: '16px' }}>
                        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    </div>

                    <div style={{ marginTop: '16px', marginBottom: '16px' }}>
                        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    </div>
                </div>

            </div>

            <SecondaryButton style={ButPosition}>Добавить филиал</SecondaryButton>

        </div>
    );
}

export default Addresses;