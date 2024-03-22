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
        <div style={{ minWidth: '453px', border: '1px solid rgba(100, 116, 139, 0.12)', borderRadius: '8px', padding: '24px' }}  className='d-flex flex-column justify-content-between'>
            <div className= ' d-flex flex-column gap-2 justify-content-between'>

                <div className='title'>Адреса заведений</div>

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