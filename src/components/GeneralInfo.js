import '../styles/GeneralInfo.css';

const GeneralInfo = () => {
    return (
        <form className="general-info">
            <h2>General Information</h2>
            <div className="general-info__container">
                <div className="general-info__container__left">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" />
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="Your phone number" />
                </div>
                <div className="general-info__container__right">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" placeholder="Your address" />
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input type="text" id="linkedin" name="linkedin" placeholder="Your LinkedIn profile" />
                    <label htmlFor="github">GitHub</label>
                    <input type="text" id="github" name="github" placeholder="Your GitHub profile" />
                </div>
            </div>
        </form>
    );
}

export default GeneralInfo;