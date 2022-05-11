import React, { useState } from "react";
import Button from "../../elements/Button/Button";
import LinkElements from "../../elements/LinkElements/LinkElements";
import ListElements from "../../elements/ListElements/ListElements";

 const Dropdown = ({
    options,
    selectedValue,
    setSelectedValue,
    classNameBtn,
    classNameContainer,
    classNameUl,
    classNameli
  
}) => {
    const [show, setShow] = useState(true);
    
    const handleOnClick = (e) => {
        e.preventDefault()
        setSelectedValue(e.target.textContent)
}
  return (
    <div>
      <Button
        onMouseEnter={() => setShow(false)}
        onMouseLeave={() => setShow(true)}
        type="button"
        content={selectedValue || "Select Value"}
        className={classNameBtn}
      />
       <div
        onMouseEnter={() => setShow(false)}
        onMouseLeave={() => setShow(true)}
        hidden={show}
        className={classNameContainer}
      >
        <ul className={classNameUl}>
          {options && options.map((el) => (
              <ListElements key={el.id} className={classNameli}>
                  {<LinkElements href="/" onClick={(e) => handleOnClick(e)}>
                     {el.name} {el.city} {el.phone}
                  </LinkElements>}
              </ListElements>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown