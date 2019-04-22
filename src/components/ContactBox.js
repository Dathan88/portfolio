import React from "react"

const ContactBox = props => (
    <div className="boxes">
      {props.contactProps.map((prop, i) => {
          console.log(prop, i);
        return (
          <div key={i}>
            <span className='text-secondary'>{prop.type}</span>
            {prop.info}
          </div>
        )
      })}
    </div>
)

export default ContactBox
