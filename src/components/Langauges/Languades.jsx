import ListRender from "../../utils/ListRender";
import { lang } from '../../mock/mockFooterNav' 



export const Languages = () => {
    return (
        <ListRender data={lang} classNameUl="header-lang flex text-gray text-lg" classNameLi="mr-3 hover:text-yellow not-last:after:content-['|']  not-last:after:ml-3"/>
        )
 }

export default Languages