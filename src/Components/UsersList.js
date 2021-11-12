import React, { useState, Fragment } from "react";
import data from "../data.json";

const UsersList = () => {
    const [contacts, setContacts] = useState(data);
    
  return (
    <div className="UsersList-container">
      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
                <tr>
                    <td>{contact.fullName}</td>
                    <td>{contact.address}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>{contact.email}</td>
                </tr>
            ))}
          </tbody>
        
        </table>
      </form>
    </div>
  );
};

export default UsersList;