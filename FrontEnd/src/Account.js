import men1 from './resources/men1.jpeg'
import './App.css'
const Account = () => {
    return(
        <div className="profile-container">
        <div className="user-info">
            <img src={men1} alt="Profile Picture" className="profile-picture"/>
            <div className="info-container">
                <div className="info-item">Name: Sunnidhya Roy</div>
                <div className="info-item">Email: sunny@gmail.com</div>
                <div className="info-item">Address: IIIT Bangalore</div>
                <div className="info-item">Mobile No: 7564667890</div>
            </div>
        </div>
        <a href="#" className="edit-button"><h4>Edit Profile</h4></a>
    </div>
    )
}

export default Account;