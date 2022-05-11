import ListElements from "../elements/ListElements/ListElements"
import LinkElements from "../elements/LinkElements/LinkElements"

const ListRender = ({ data, classNameLi, classNameUl, children}) => {
    return (
      <ul className= {classNameUl}>
        {data && data.map((el) => <ListElements key={el.id} className={classNameLi}>
        {children}
         {  el.href  ? (<LinkElements href={el.href}>{el.name}</LinkElements>) : el.name}
      </ListElements>)}
    </ul>)
}

export default ListRender