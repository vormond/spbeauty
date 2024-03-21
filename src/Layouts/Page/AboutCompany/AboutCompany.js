import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div style={{ paddingLeft: '72px', paddingRight: '72px' }}>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex flex-column mt-5'>
                <div className='d-flex flex-row justify-content-between'>
                    <General />  {/* Основная информация вроде названия, типа и телефона */}
                    <Addresses /> {/* Список доступных адресов заведений */}
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;