import "./header.css"
export default function Header()
{
    return (
    <div className="header">
        <div className="left">
        <h1>Trazer</h1>
        </div>
        <div className="right">
        <div className="rightItems">
        <input type="search"  id="search" placeholder= " search for loaction" height="41.6px" />
        <input type="submit" className="submit" value="search" />
        <li className="items active">home</li>
        <li className="items">about</li>
        <li className="items">profile</li>
        </div>
        </div>
    </div>);
}
